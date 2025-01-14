
import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="p-4 bg-[#2A2A2A] text-[#E0E0E0]">
            <nav className="flex justify-center space-x-6">
                <Link href="/" className="hover:text-[#FFC0CB] transition-colors">Home</Link>
                <Link href="/about" className="hover:text-[#FFC0CB] transition-colors">About</Link>
                <Link href="/experience" className="hover:text-[#FFC0CB] transition-colors">Experience</Link>
            </nav>
        </header>
    )
}

