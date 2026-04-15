"use client";
import { useState } from "react";
import { useData } from "@/context/DataContext";

export default function Timeline() {
    const { checkIns } = useData();

    // Mapping types to specific icons
    const iconMap = {
        call: (
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        text: (
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
        ),
        video: (
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
    };

    const [filter, setFilter] = useState('all');
    const filterFunction = (checkIns, filter) => {
        if (filter === 'all') {
            return checkIns;
        }
        return checkIns.filter((checkIn) => checkIn.type === filter);
    }

    return (
        <div className=" ">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-left">Timeline</h2>

            {/* Filter Placeholder */}
            <div className="mb-8 flex ">
                <div className="relative w-64">
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full bg-white border border-gray-200 text-gray-400 py-2 px-4 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500">

                        <option>all</option>
                        <option>call</option>
                        <option>text</option>
                        <option>video</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            {/* Timeline List */}
            <div className="space-y-3">
                {checkIns.length === 0 ? (
                    <p className="text-gray-400 italic">No interactions recorded yet.</p>
                ) : (
                    filterFunction(checkIns, filter).map((log) => (
                        <div
                            key={log.id}
                            className="flex items-center gap-6 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Icon Container */}
                            <div className="p-3 bg-gray-50 rounded-lg">
                                {iconMap[log.type] || iconMap.text}
                            </div>

                            {/* Text Content */}
                            <div>
                                <p className="text-lg">
                                    <span className="font-bold text-emerald-800 capitalize">{log.type}</span>
                                    <span className="text-slate-400 mx-1">with</span>
                                    <span className="text-slate-500 font-medium">{log.name}</span>
                                </p>
                                <p className="text-sm text-slate-400 mt-0.5">
                                    {log.date}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}