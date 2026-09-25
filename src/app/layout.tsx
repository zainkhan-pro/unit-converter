import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'ZETA — Ultimate Universal Converter', description:'Convert Anything. Instantly.', metadataBase:new URL('https://zeta-converter.example') };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
