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
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
    });
  }
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
  if (typeof gtag !== 'undefined') {
    gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Track Porsche match
export const trackPorscheMatch = (porscheId: string, porscheName: string, userName?: string) => {
  trackEvent('porsche_matched', 'engagement', porscheName, 1);
  
  if (typeof window === 'undefined') return;
  
  const matches = JSON.parse(localStorage.getItem('pf-analytics-matches') || '[]');
  matches.push({
    porscheId,
    porscheName,
    userName: userName || 'Anonymous',
    timestamp: new Date().toISOString(),
  });
  localStorage.setItem('pf-analytics-matches', JSON.stringify(matches));
};

// Get analytics summary
export const getAnalyticsSummary = () => {
  if (typeof window === 'undefined') return null;

  const events = JSON.parse(localStorage.getItem('pf-analytics-events') || '[]');
  const pageViews = JSON.parse(localStorage.getItem('pf-analytics-pageviews') || '[]');
  const matches = JSON.parse(localStorage.getItem('pf-analytics-matches') || '[]');

  return {
    totalEvents: events.length,
    totalPageViews: pageViews.length,
    totalMatches: matches.length,
    events,
    pageViews,
    matches,
  };
};

// Clear analytics data
export const clearAnalytics = () => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('pf-analytics-events');
  localStorage.removeItem('pf-analytics-pageviews');
  localStorage.removeItem('pf-analytics-matches');
};
