import './globals.css'
import React from 'react'

export const metadata = {
  title: 'KIPP - Robot',
  description: 'KIPP - Your Intelligent Robot Assistant for seamless event experiences with AI-powered navigation and personalized assistance.',
  keywords: 'AI robot, intelligent assistant, event navigation, robotics, automation, smart assistant',
  authors: [{ name: 'KIPP Technologies' }],
  icons: {
    icon: [
      { url: '/assets/favicon.ico', sizes: 'any' },
      { url: '/assets/11.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/11.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/assets/favicon.ico',
    apple: { url: '/assets/11.png', sizes: '180x180' },
  },
}

export const viewport = {
  themeColor: '#64FFDA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
