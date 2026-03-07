'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const GA_TRACKING_ID = 'GTM-NKBH5W2W'

const GoogleAnalytics = ({ hasConsent }: { hasConsent: boolean }) => {
  const pathname = usePathname()

  useEffect(() => {
    if (hasConsent && pathname && typeof window.gtag === 'function') {
      window.gtag('config', GA_TRACKING_ID, { page_path: pathname })
    }
  }, [pathname, hasConsent])

  if (!hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'granted'
            });
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </>
  )
}

export default GoogleAnalytics
