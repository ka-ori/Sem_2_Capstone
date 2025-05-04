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
    </div>
  );
}

export default page;
