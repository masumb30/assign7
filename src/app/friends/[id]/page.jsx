import CheckInButtons from '@/Components/CheckInButtons';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getFriendData(id) {
  const baseUrl = 'https://keenkeeper-mu.vercel.app';
  const res = await fetch(`${baseUrl}/data.json`, { next: { revalidate: 3600 } });

  if (!res.ok) return null;

  const friends = await res.json();
  // Find the friend by ID (matching the string ID from the URL to the number in JSON)
  return friends.find((f) => f.id.toString() === id);
}

export default async function FriendDetailsPage({ params }) {
  const { id } = await params;
  const friend = await getFriendData(id);

  // If friend doesn't exist, trigger the Next.js 404 page
  if (!friend) {
    notFound();
  }

  return (
    <div className=" autowidth  grid grid-cols-1 md:grid-cols-12 gap-4 text-slate-700">

      {/* Left Column: Profile Card & Actions */}
      <div className="md:col-span-4 space-y-4">
        {/* Profile Card */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-2 flex flex-col items-center text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-gray-50"
          />
          <h2 className="text-xl font-bold text-slate-800">{friend.name}</h2>

          <div className="flex flex-col gap-2 mt-2">
            {/* Dynamic Overdue Badge */}
            <span className={`${friend.status === 'overdue' ? 'bg-red-50 text-red-600' : friend.status === 'almost due' ? 'bg-amber-50 text-amber-600' : 'bg-green-50 text-green-600'
              } text-[10px] font-bold px-3 py-0.5 rounded-full uppercase`}>
              {friend.status}
            </span>

            {/* Dynamic Tags (Mapping the first tag as the primary category) */}
            {friend.tags && friend.tags.length > 0 && (
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-0.5 rounded-full uppercase">
                {friend.tags[0]}
              </span>
            )}
          </div>

          <p className="mt-4 italic text-slate-500 text-sm">"{friend.bio}"</p>
          <p className="text-xs text-slate-400 mt-1">Preferred: {friend.email}</p>
        </div>

        {/* Sidebar Buttons (Static UI for now) */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-50 overflow-hidden">
          <button className="w-full flex items-center justify-center gap-2 py-2 hover:bg-gray-50 transition-colors font-medium text-slate-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            Snooze 2 Weeks
          </button>
          <button className="w-full flex items-center justify-center gap-2 py-2 hover:bg-gray-50 transition-colors font-medium text-slate-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
            Archive
          </button>
          <button className="w-full flex items-center justify-center gap-2 py-2 hover:bg-red-50 transition-colors font-medium text-red-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            Delete
          </button>
        </div>
      </div>

      {/* Right Column: Dynamic Stats & Check-in */}
      <div className="md:col-span-8 space-y-4">
        {/* Top Stats Row */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <p className="text-3xl font-bold text-slate-700">{friend.days_since_contact}</p>
            <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Days Since Contact</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <p className="text-3xl font-bold text-slate-700">{friend.goal}</p>
            <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Goal (Days)</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <p className="text-sm md:text-2xl font-bold text-emerald-800">
              {new Date(friend.next_due_date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
            <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal Card */}
        <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
          <div>
            <h3 className="text-emerald-800 font-bold mb-1">Relationship Goal</h3>
            <p className="text-slate-500 text-sm">Connect every <span className="font-bold text-slate-800">{friend.goal} days</span></p>
          </div>
          <button className="px-4 py-1.5 bg-gray-50 text-slate-600 rounded-md text-sm font-bold border border-gray-100 hover:bg-gray-100">Edit</button>
        </div>

        {/* Quick Check-In Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-emerald-800 font-bold mb-6">Quick Check-In</h3>
          {/* check in buttons */}
          <CheckInButtons name={friend.name} />
        </div>
      </div>
    </div>
  );
}