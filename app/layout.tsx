import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export const metadata = {
  title: "PorscheForYou - Find Your Perfect Porsche Match",
  description: "Discover which Porsche model matches your personality through our engaging quiz.",
  icons: {
    icon: "/favicon.ico",
    apple: "/image/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Header />
        <main className="site-container">
          <div className="content">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
