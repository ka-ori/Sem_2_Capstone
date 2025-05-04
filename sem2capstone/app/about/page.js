"use client"
import DonationBanner from "@/components/DonationBanner";
import NavBar from "@/components/NavBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="main-container bg-white min-h-screen">
      <NavBar />
      <DonationBanner />
      <div className="space-y-8">
        <div className="mb-8">
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[600px] w-full rounded-lg border !mt-30"
          >
            <ResizablePanel defaultSize={40} minSize={30}>
              <div className="flex h-full flex-col justify-center !p-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  Our Mission
                </h2>
                <p className="!mt-6 text-muted-foreground">
                  We believe in the power of collective giving to transform
                  lives and communities. Our platform makes it easy for donors
                  to find and support verified causes that align with their
                  values.
                </p>
                <p className="!mt-4 text-muted-foreground">
                  Through transparency, efficiency, and innovation, we're
                  building a world where giving has maximum impact.
                </p>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={60}>
              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  src="/images/Cause2.jpg"
                  alt="Person using a mobile device for donations"
                  fill
                  className="object-cover rounded-r-lg"
                />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        <div>
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[600px] w-full rounded-lg border !mt-30"
          >
            <ResizablePanel defaultSize={60}>
              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  src="/images/Cause2.jpg"
                  alt="Person using a mobile device for donations"
                  fill
                  className="object-cover rounded-l-lg"
                />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={40} minSize={30}>
              <div className="flex h-full flex-col justify-center !p-6">
                <h2 className="text-3xl font-bold tracking-tight ">
                  Our Impact
                </h2>
                <p className="!mt-6 text-muted-foreground">
                  Since our founding, we've facilitated millions in donations to
                  verified charities worldwide. Our platform has connected
                  thousands of donors with causes they care about.
                </p>
                <div>
                  <div className="grid grid-cols-2 !gap-4 !mt-6">
                    <div className="bg-gray-100 !p-6 rounded-xl shadow-sm">
                      <p className="text-2xl font-bold text-violet-700">
                        $10M+
                      </p>
                      <p className="text-gray-600">Donations Facilitated</p>
                    </div>
                    <div className="bg-gray-100 !p-6 rounded-xl shadow-sm">
                      <p className="text-2xl font-bold text-violet-700">
                        1000+
                      </p>
                      <p className="text-gray-600">Verified Charities</p>
                    </div>
                    <div className="bg-gray-100 !p-6 rounded-xl shadow-sm">
                      <p className="text-2xl font-bold text-violet-700">50K+</p>
                      <p className="text-gray-600">Active Donors</p>
                    </div>
                    <div className="bg-gray-100 !p-6 rounded-xl shadow-sm">
                      <p className="text-2xl font-bold text-violet-700">100+</p>
                      <p className="text-gray-600">Countries Reached</p>
                    </div>
                  </div>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>

        </div>
      </div>
      <div>
        
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center text-black !mt-30">Our Values</h1>
        <div className="flex justify-center gap-20">
        <div className="max-w-sm !p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 !mt-20 h-75">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-500 dark:text-gray-400 !mb-3 stroke-violet-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>


        <h5 className="!mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white !mt-18">Compassion</h5>

    <p className="!mb-3 font-normal text-gray-500 dark:text-gray-400">We believe in the power of empathy and understanding to drive meaningful change in communities worldwide.</p>
    
</div>
<div className="max-w-sm !p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 !mt-20">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-500 dark:text-gray-400 !mb-3 stroke-violet-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>


        <h5 className="!mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white !mt-18">Transparency</h5>

    <p className="!mb-3 font-normal text-gray-500 dark:text-gray-400">We maintain complete openness about our operations, ensuring donors know exactly how their contributions make an impact.</p>
    
</div>
<div className="max-w-sm !p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 !mt-20">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-500 dark:text-gray-400 !mb-3 stroke-violet-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>


        <h5 className="!mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white !mt-18">Integrity</h5>

    <p className="!mb-3 font-normal text-gray-500 dark:text-gray-400">We uphold the highest ethical standards in all our operations, building trust through consistent, honest practices.</p>
    
</div>
</div>

      </div>
    </div>
  );
}

export default page;
