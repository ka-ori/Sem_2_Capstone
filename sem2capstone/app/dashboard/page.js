
"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const DashboardPage = () => {
  
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    
    
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);


  
  
  
  if (loading) {
    return (
        <div className="!flex !h-screen !items-center !justify-center">
            <p>Loading session...</p>
        </div>
    );
  }

  
  
  
  if (!isAuthenticated) {
      return null;
  }
  


  
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
