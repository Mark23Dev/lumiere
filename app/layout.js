import './globals.css'

export const metadata = {
  title: 'LUMIÈRE | AI Cinema',
  description: 'The Future of AI Cinema',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}