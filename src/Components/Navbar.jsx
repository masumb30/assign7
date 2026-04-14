import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
            <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-600 text-teal-200 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-stone-icon lucide-stone"><path d="M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z" /><path d="M11.99 22 14 12l7.822 3.184" /><path d="M14 12 8.47 2.302" /></svg>
                </div>
                <span className="text-xl font-bold tracking-tight text-gray-900">KeenKeeper</span>
            </Link>

            <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center gap-2 py-2 text-gray-600 transition-colors hover:text-indigo-600 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                    <span className="hidden sm:inline font-medium">Home</span>
                </Link>

                <Link href="/timeline" className="flex items-center gap-2  py-2 text-gray-600 transition-colors hover:text-indigo-600 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    <span className="hidden sm:inline font-medium">Timeline</span>
                </Link>

                <Link href="/stats" className="flex items-center gap-2 py-2 text-gray-600 transition-colors hover:text-indigo-600 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined"><path d="M12 16v5" /><path d="M16 14v7" /><path d="M20 10v11" /><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" /><path d="M4 18v3" /><path d="M8 14v7" /></svg>
                    <span className="hidden sm:inline font-medium">Stats</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar