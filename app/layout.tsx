import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './componenets/Header'
import Footer from './componenets/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Your Name - Software Engineer',
    description: 'Portfolio of Your Name, a software engineer',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-[#2A2A2A] text-[#E0E0E0] flex flex-col min-h-screen`}>
                <Header />
                <main className="flex-grow p-8 justify-center items-center ">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )



}

