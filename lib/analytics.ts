import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, remove } from 'firebase/database';

// Firebase configuration - Replace with your Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

// Initialize Firebase
let db: any = null;
if (typeof window !== 'undefined') {
  const app = initializeApp(firebaseConfig);
  db = getDatabase(app);
}

// Analytics utility for tracking user interactions
export type AnalyticsEvent = {
  eventName: string;
  eventCategory: string;
  eventLabel?: string;
  eventValue?: number;
  timestamp: string;
  userAgent: string;
};

export type PageView = {
  pageTitle: string;
  pagePath: string;
  timestamp: string;
};

export type Match = {
  id?: string | null;
  porscheId?: string;
  porscheName?: string;
  userName?: string;
  timestamp?: string;
};

// Store analytics events in localStorage
export const trackEvent = (
  eventName: string,
  eventCategory: string,
  eventLabel?: string,
  eventValue?: number
) => {
  if (typeof window === 'undefined') return;

  const event: AnalyticsEvent = {
    eventName,
    eventCategory,
    eventLabel,
    eventValue,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };

  // Store in localStorage
  const events = JSON.parse(localStorage.getItem('pf-analytics-events') || '[]');
  events.push(event);
  localStorage.setItem('pf-analytics-events', JSON.stringify(events));

  // Send to Google Analytics if available
};

// Track page views
export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (typeof window === 'undefined') return;

  const pageView: PageView = {
    pageTitle,
    pagePath,
    timestamp: new Date().toISOString(),
  };

  // Store in localStorage
  const pageViews = JSON.parse(localStorage.getItem('pf-analytics-pageviews') || '[]');
  pageViews.push(pageView);
  localStorage.setItem('pf-analytics-pageviews', JSON.stringify(pageViews));

  // Send to Google Analytics
};

// Track Porsche match
export const trackPorscheMatch = async (porscheId: string, porscheName: string, userName?: string) => {
  trackEvent('porsche_matched', 'engagement', porscheName, 1);
  
  if (typeof window === 'undefined' || !db) return;
  
  try {
    const matchRef = ref(db, 'matches');
    await push(matchRef, {
      porscheId,
      porscheName,
      userName: userName || 'Anonymous',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error saving match to Firebase:', error);
  }
};

// Get analytics summary from Firebase
export const getAnalyticsSummary = (callback: (data: any) => void) => {
  if (typeof window === 'undefined' || !db) {
    callback(null);
    return;
  }

  try {
    const matchRef = ref(db, 'matches');
    onValue(matchRef, (snapshot) => {
      const matches: Match[] = [];
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const val = childSnapshot.val();
          matches.push({
            id: childSnapshot.key,
            ...(val as Match),
          });
        });
      }

      const events = JSON.parse(localStorage.getItem('pf-analytics-events') || '[]');
      const pageViews = JSON.parse(localStorage.getItem('pf-analytics-pageviews') || '[]');

      callback({
        totalEvents: events.length,
        totalPageViews: pageViews.length,
        totalMatches: matches.length,
        events,
        pageViews,
        matches,
      });
    });
  } catch (error) {
    console.error('Error fetching analytics from Firebase:', error);
    callback(null);
  }
};

// Clear analytics data
export const clearAnalytics = () => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('pf-analytics-events');
  localStorage.removeItem('pf-analytics-pageviews');
  localStorage.removeItem('pf-analytics-matches');
};
