import Link from 'next/link';

async function getFriends() {
    // In Next.js, local public files are accessed via absolute path from root
    // We use a full URL for the fetch to work during the build process/server-side
    const baseUrl = 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/data.json`, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error('Failed to fetch friends data');
    }

    return res.json();
}

export default async function FriendsContainer() {
    const friends = await getFriends();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-1">
            {friends.map((friend) => (
                <Link
                    key={friend.id}
                    href={`/friends/${friend.id}`}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 overflow-hidden flex flex-col"
                >
                    {/* Status Badge */}


                    <div className="p-6 pt-2">
                        <div className="flex items-center flex-col gap-4 mb-4">
                            <img
                                src={friend.picture}
                                alt={friend.name}
                                className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-50"
                            />
                            <div className='text-center'>
                                <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                    {friend.name}
                                </h3>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase font-semibold">Last Contact</p>
                                    <p className="text-sm font-medium text-gray-900">{friend.days_since_contact} days ago</p>
                                </div>
                            </div>
                        </div>



                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-1 items-center justify-center">
                            {friend.tags.map((tag) => (
                                <span key={tag} className="text-xs bg-teal-200 text-black-600 px-2 py-1 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="px-4 pt-4 flex justify-center">
                            <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full ${friend.status === 'overdue' ? 'bg-red-50 text-red-600' : friend.status === 'almost due' ? 'bg-amber-50 text-amber-600' : 'bg-green-50 text-green-600'
                                }`}>
                                {friend.status}
                            </span>
                        </div>
                    </div>

                </Link>
            ))}
        </div>
    );
}