"use client"
import DonationBanner from "@/components/DonationBanner";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from "next/image";
import React from "react";
import { Footer } from "@/components/Footer";

function page() {
  const names = [{key:1,image:"/images/Michael Lee.jpg",name:"Michael Lee",position:"Founder and CEO"},{key:2,image:"/images/Sarah Hyland.webp",name:"Sarah Hyland",position:"Vice President"}, {key:3,image:"/images/Emma Watson 2013.jpg",name:"Emma Watt",position:"CTO"}, {key:4,image:"/images/Trump Image.jpeg",name:"Donald Trump",position:"CFO"}]
  
  return (
    <div className="main-container bg-white min-h-screen">

      <DonationBanner />
      
      <div className="space-y-8 px-4 sm:px-6 lg:px-8">
        <div id="mission" className="mb-8 !scroll-mt-24">
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] w-full rounded-lg border mt-8 sm:mt-12 lg:!mt-30"
          >
            <ResizablePanel defaultSize={40} minSize={30}>
              <div className="flex h-full flex-col justify-center p-4 sm:!p-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Our Mission
                </h2>
                <p className="mt-4 sm:!mt-6 text-muted-foreground">
                  We believe in the power of collective giving to transform
                  lives and communities. Our platform makes it easy for donors
                  to find and support verified causes that align with their
                  values.
                </p>
                <p className="mt-3 sm:!mt-4 text-muted-foreground">
                  Through transparency, efficiency, and innovation, we're
                  building a world where giving has maximum impact.
                </p>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={60}>
              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  src="/images/Laughing Kids Photo.jpeg"
                  alt="Person using a mobile device for donations"
                  fill
                  className="object-cover rounded-r-lg"
                />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

        <div id="impact" className="!scroll-mt-24">
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] w-full rounded-lg border !mt-8 sm:!mt-12 lg:!mt-30"
          >
            <ResizablePanel defaultSize={60}>
              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  src="/images/Europe in a Suitcase UK.jpg"
                  alt="Person using a mobile device for donations"
                  fill
                  className="object-cover rounded-l-lg"
                />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={40} minSize={30}>
              <div className="flex h-full flex-col justify-center p-4 sm:!p-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Our Impact
                </h2>
                <p className="mt-4 sm:!mt-6 text-muted-foreground">
                  Since our founding, we've facilitated millions in donations to
                  verified charities worldwide. Our platform has connected
                  thousands of donors with causes they care about.
                </p>
                <div className="mt-4 sm:!mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:!gap-4">
                    <div className="bg-gray-100 p-4 sm:!p-6 rounded-xl shadow-sm">
                      <p className="text-xl sm:text-2xl font-bold text-violet-700">
                        $10M+
                      </p>
                      <p className="text-gray-600">Donations Facilitated</p>
                    </div>
                    <div className="bg-gray-100 p-4 sm:!p-6 rounded-xl shadow-sm">
                      <p className="text-xl sm:text-2xl font-bold text-violet-700">
                        1000+
                      </p>
                      <p className="text-gray-600">Verified Charities</p>
                    </div>
                    <div className="bg-gray-100 p-4 sm:!p-6 rounded-xl shadow-sm">
                      <p className="text-xl sm:text-2xl font-bold text-violet-700">50K+</p>
                      <p className="text-gray-600">Active Donors</p>
                    </div>
                    <div className="bg-gray-100 p-4 sm:!p-6 rounded-xl shadow-sm">
                      <p className="text-xl sm:text-2xl font-bold text-violet-700">100+</p>
                      <p className="text-gray-600">Countries Reached</p>
                    </div>
                  </div>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>

      <div id="values" className="px-4 sm:px-6 lg:px-8 !scroll-mt-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-black !mt-12 sm:!mt-30">Our Values</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-20 !mt-8 sm:mt-12 lg:!mt-20">
          <div className="max-w-sm w-full sm:w-auto !p-4 sm:!p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500 dark:text-gray-400 mb-3 stroke-violet-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <h5 className="!mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white !mt-3">Compassion</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              We believe in the power of empathy and understanding to drive meaningful change in communities worldwide.
            </p>
          </div>
          
          <div className="max-w-sm w-full sm:w-auto !p-4 sm:!p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500 dark:text-gray-400 mb-3 stroke-violet-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <h5 className="!mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white !mt-3">Transparency</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              We maintain complete openness about our operations, ensuring donors know exactly how their contributions make an impact.
            </p>
          </div>
          
          <div className="max-w-sm w-full sm:w-auto p-4 sm:!p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500 dark:text-gray-400 mb-3 stroke-violet-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            <h5 className="!mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white !mt-3">Integrity</h5>
            <p className="!mb-3 font-normal text-gray-500 dark:text-gray-400">
              We uphold the highest ethical standards in all our operations, building trust through consistent, honest practices.
            </p>
          </div>
        </div>
      </div>

      <div id="leadership" className="flex flex-col items-center !px-4 sm:px-6 lg:px-8 !mt-12 sm:!mt-30 !scroll-mt-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-black">Our Leadership Team</h1>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-25 !mt-8 sm:!mt-12 w-full">
            {names.map((item) => (
            <div key={item.key} className="flex flex-col items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
                <div className="!w-50 !h-50 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                    src={item.image}
                    alt={item.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                />
                </div>
                <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold">{item.name}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{item.position}</p>
                </div>
            </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
