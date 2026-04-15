import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[60vh] py-7 flex flex-col items-center justify-center text-center">
            {/* Visual Accent */}
            <div className="mb-3">
                <h1 className="text-5xl md:text-9xl font-black text-slate-200">404</h1>
            </div>

            {/* Text Content */}
            <div className="">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    Page not found
                </h2>
                <p className="text-slate-500 mb-2 text-lg">
                    Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
                </p>

                {/* Action Link */}
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-2 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-sm hover:shadow-md"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>
            </div>

            {/* Subtle background decoration (Optional) */}

        </div>
    );
}