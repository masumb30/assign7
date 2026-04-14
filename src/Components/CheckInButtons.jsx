'use client'
import Link from 'next/link'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useData } from '@/context/DataContext'

const CheckInButtons = ({ name }) => {
    const { addCheckIn } = useData();
    const handleCheckIn = (type, name) => {
        addCheckIn({ type, name })
        toast.success(`You checked in with ${name} via ${type}`)

    }
    return (
        <>
            <ToastContainer />
            <div className="grid grid-cols-3 gap-4">

                <button onClick={() => handleCheckIn('call', name)} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-all border border-transparent hover:border-emerald-100 group">
                    <svg className="w-6 h-6 mb-2 text-slate-600 group-hover:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span className="text-sm font-semibold uppercase tracking-wide">Call</span>
                </button>
                <button onClick={() => handleCheckIn('text', name)} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-all border border-transparent hover:border-emerald-100 group">
                    <svg className="w-6 h-6 mb-2 text-slate-600 group-hover:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    <span className="text-sm font-semibold uppercase tracking-wide">Text</span>
                </button>
                <button onClick={() => handleCheckIn('video', name)} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-all border border-transparent hover:border-emerald-100 group">
                    <svg className="w-6 h-6 mb-2 text-slate-600 group-hover:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    <span className="text-sm font-semibold uppercase tracking-wide">Video</span>
                </button>
            </div>

        </>
    )
}

export default CheckInButtons;