import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-teal-800 text-white pt-12 pb-8">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 gap-12 mb-12 items-center">

                    <div class="flex flex-col items-center gap-2 mb-4">
                        <div className='text-teal-300 '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-stone-icon lucide-stone"><path d="M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z" /><path d="M11.99 22 14 12l7.822 3.184" /><path d="M14 12 8.47 2.302" /></svg>
                        </div>
                        <h2 class="text-6xl font-bold tracking-tight ">KeenKeeper</h2>

                        <p class=" leading-relaxed">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                    </div>


                    <div class="flex flex-col items-center">

                        <h3 class="text-sm font-semibold  uppercase tracking-wider mb-4">Social Links</h3>
                        <div class="flex gap-5">
                            <a href="#" class="text-teal-600 hover:bg-teal-900 hover:text-white bg-white p-3 rounded-md  transition-colors">
                                <span class="sr-only">Twitter</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="#" class="text-teal-600 hover:bg-teal-900 hover:text-white bg-white p-3 rounded-md  transition-colors">
                                <span class="sr-only">LinkedIn</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" /></svg>
                            </a>
                            <a href="#" class="text-teal-600 hover:bg-teal-900 hover:text-white bg-white p-3 rounded-md  transition-colors">
                                <span class="sr-only">Facebook</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="border-t border-teal-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-sm text-gray-200 order-2 md:order-1">
                        &copy; 2026 KeenKeeper. All rights reserved.
                    </p>
                    <div class="flex flex-wrap justify-center gap-x-8 gap-y-2 order-1 md:order-2">
                        <a href="#" class="text-sm text-gray-200 hover:text-indigo-600 transition-colors">Privacy Policy</a>
                        <a href="#" class="text-sm text-gray-200 hover:text-indigo-600 transition-colors">Terms of Service</a>
                        <a href="#" class="text-sm text-gray-200 hover:text-indigo-600 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer