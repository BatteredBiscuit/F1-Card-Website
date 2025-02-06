import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ClientThemeProvider from '@/components/Providers/ClientThemeProvider';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: {
    default: "Fleet Management Website",
    template: "%s | Fleet Management Website",
  },
  description: 'Fleet Management Website',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ClientThemeProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
