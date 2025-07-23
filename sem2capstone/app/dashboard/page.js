// File: /app/dashboard/page.js
"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const DashboardPage = () => {
  // Get all relevant values from the context
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // This effect now runs only when loading is complete
    // and the user is definitely not authenticated.
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);


  // ---- NEW PROTECTION LOGIC ----
  // 1. If the context is still loading, show a generic loading screen.
  // This handles the initial page load and the moments after login.
  if (loading) {
    return (
        <div className="!flex !h-screen !items-center !justify-center">
            <p>Loading session...</p>
        </div>
    );
  }

  // 2. If loading is finished and the user is still not authenticated,
  // this will be caught by the useEffect which redirects.
  // We can return null or a loading indicator here to prevent flashing content.
  if (!isAuthenticated) {
      return null;
  }
  // ---- END OF NEW LOGIC ----


  // 3. If loading is done and the user is authenticated, render the dashboard.
  return (
    <div className="!max-w-7xl !mx-auto !p-8">
      <h1 className="!text-3xl !font-bold !mb-4">Welcome to Your Dashboard, {user?.firstname}!</h1>
      <p className="!text-lg !text-zinc-700 dark:!text-zinc-300">This is a protected page. Only logged-in users can see this.</p>
      
      <div className="!mt-6 !grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-6">
        <div className="!bg-white dark:!bg-zinc-800 !p-6 !rounded-lg !shadow-md">
          <h2 className="!text-xl !font-semibold !mb-2">My Donations</h2>
          <p className="!text-3xl !font-bold !text-violet-500">$0.00</p>
          <p className="!text-zinc-500">Track your contributions.</p>
        </div>
        <div className="!bg-white dark:!bg-zinc-800 !p-6 !rounded-lg !shadow-md">
          <h2 className="!text-xl !font-semibold !mb-2">Campaigns Followed</h2>
          <p className="!text-3xl !font-bold !text-violet-500">0</p>
          <p className="!text-zinc-500">Stay updated with causes you care about.</p>
        </div>
        <div className="!bg-white dark:!bg-zinc-800 !p-6 !rounded-lg !shadow-md">
          <h2 className="!text-xl !font-semibold !mb-2">Account Details</h2>
          <p className="!text-zinc-500">Email: {user?.email}</p>
          <p className="!mt-4"><a href="#" className="!text-violet-500 hover:!underline">Edit Profile</a></p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;