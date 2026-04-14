import FriendsContainer from "@/Components/FriendsContainer";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      {/* first section */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Friends to keep close in your life</h1>
        <p className="text-lg text-gray-600 mb-6">Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.</p>
        <button className="flex items-center bg-teal-700 text-white rounded-sm px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>Add a Friend
        </button>
      </div>

      {/* four cards */}
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5  rounded-xl">
        <div class="bg-white p-5 rounded-xl border border-gray-100 shadow-sm transition-hover hover:shadow-md">
          <div class="flex flex-col items-center">
            <span class="text-3xl font-bold text-gray-900">10</span>
            <span class="text-sm font-medium text-gray-500 mt-1">Total Friends</span>
          </div>
        </div>

        <div class="bg-white p-5 rounded-xl border border-gray-100 shadow-sm transition-hover hover:shadow-md">
          <div class="flex flex-col items-center">
            <div class="flex items-center gap-2">
              <span class="text-3xl font-bold text-green-600">3</span>
              <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <span class="text-sm font-medium text-gray-500 mt-1">On Track</span>
          </div>
        </div>

        <div class="bg-white p-5 rounded-xl border border-gray-100 shadow-sm transition-hover hover:shadow-md">
          <div class="flex flex-col items-center">
            <div class="flex items-center gap-2">
              <span class="text-3xl font-bold text-amber-500">6</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <span class="text-sm font-medium text-gray-500 mt-1">Need Attention</span>
          </div>
        </div>

        <div class="bg-white p-5 rounded-xl border border-gray-100 shadow-sm transition-hover hover:shadow-md">
          <div class="flex flex-col items-center">
            <span class="text-3xl font-bold text-indigo-600">12</span>
            <span class="text-sm font-medium text-gray-500 mt-1">Interactions This Month</span>
          </div>
        </div>
      </div>

      <p className="text-2xl font-bold mt-5">Your Friends:</p>
      {/* frnds container */}
      <FriendsContainer />

    </div>
  );
}
