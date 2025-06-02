import Head from "next/head";

export const metadata = {
  title: `SociClip | Where Viral Videos Become Valuable NFTs`,
  description: 'Discover, share, and collect exclusive video moments as unique NFTs. Join the next wave of social media and digital ownership.',
  keywords: 'SociClip, NFTs, video clips, creators, social media, digital ownership, blockchain',
  openGraph: {
    title: 'SociClip | Where Viral Videos Become Valuable NFTs',
    description: 'Discover, share, and collect exclusive video moments as unique NFTs. Join the next wave of social media and digital ownership.',
    url: 'https://sociclip.com',
    siteName: 'SociClip',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SociClip - Own the Moment',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SociClip | Where Viral Videos Become Valuable NFTs',
    description: 'Discover, share, and collect exclusive video moments as unique NFTs. Join the next wave of social media and digital ownership.',
    images: ['/twitter-image.jpg'],
    creator: '@SociClip',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#280068',
  manifest: '/site.webmanifest',
};

export default function LandingpageLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <Head>
          {/* Basic Meta Tags */}
          
          <link
            rel="icon"
            href="../favicon.ico"
          />
          
         
          
          
        </Head>
        {children}
      </>
    );
  }