'use client'
import DonationBanner from '@/components/DonationBanner'
import NavBar from '@/components/NavBar'
import React from 'react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { Footer } from '@/components/Footer'

function Blog() {
  const [activeButton, setActiveButton] = useState("All")

  const categories = ["All", "Impact", "Education", "Health", "Environment"]
  const items = [
    {
      title: "Clean Water for Rural Communities",
      description: "How your donations are helping build sustainable water systems in areas with limited access.",
      image: "/images/Cause2.jpg",
      badge: "Impact",
      progress: { current: 12500, total: 50000 },
    },
    {
      title: "Building Schools in Underserved Areas",
      description: "Our initiative to construct safe learning environments for children in developing regions.",
      image: "/images/Cause2.jpg",
      badge: "Education",
      progress: { current: 18750, total: 25000 },
    },
    {
      title: "Mobile Health Clinics",
      description: "Bringing essential medical care to remote communities through our fleet of mobile clinics.",
      image: "/images/Cause2.jpg",
      badge: "Health",
      progress: { current: 7500, total: 30000 },
    },
    {
      title: "Reforestation Project",
      description: "Planting trees to combat climate change and restore ecosystems in deforested areas.",
      image: "/images/Cause2.jpg",
      badge: "Environment",
      progress: { current: 45000, total: 60000 },
    },
    {
      title: "Scholarship Program",
      description: "Supporting bright students from low-income families to access quality education.",
      image: "/images/Cause2.jpg",
      badge: "Education",
      progress: { current: 22000, total: 40000 },
    },
    {
      title: "Nutrition for Children",
      description: "Providing daily meals and nutritional supplements to malnourished children.",
      image: "/images/Cause2.jpg",
      badge: "Health",
      progress: { current: 15000, total: 35000 },
    },
    {
      title: "Community Impact Report 2023",
      description: "See how your contributions have transformed lives across all our programs this year.",
      image: "/images/Cause2.jpg",
      badge: "Impact",
      progress: { current: 32000, total: 50000 },
    },
    {
      title: "Ocean Cleanup Initiative",
      description: "Removing plastic waste from our oceans and coastal areas to protect marine life.",
      image: "/images/Cause2.jpg",
      badge: "Environment",
      progress: { current: 28000, total: 75000 },
    },
    {
      title: "Disaster Relief Efforts",
      description: "Our rapid response to natural disasters providing emergency aid to affected communities.",
      image: "/images/Cause2.jpg",
      badge: "Impact",
      progress: { current: 42000, total: 60000 },
    },
    {
      title: "Adult Literacy Program",
      description: "Empowering adults with basic reading and writing skills to improve their livelihoods.",
      image: "/images/Cause2.jpg",
      badge: "Education",
      progress: { current: 18000, total: 30000 },
    }
  ]
  
  return (
    <div className="!min-h-screen !flex !flex-col">
      <NavBar/>
      <DonationBanner/>
      <div className="!flex !flex-col md:!flex-row !justify-center !items-center !gap-4 md:!gap-30 !mt-30 !px-4">
        <div className='!flex !flex-col !items-center !w-full md:!w-65 !p-4 !shadow-lg !rounded-md'>
          <h1 className="!text-violet-500 !text-3xl md:!text-4xl !font-bold">$1,547,892</h1>
          <p className="!mt-2">Total Donations</p>
        </div>
        <div className='!flex !flex-col !items-center !w-full md:!w-65 !p-4 !shadow-lg !rounded-md'>
          <h1 className="!text-violet-500 !text-3xl md:!text-4xl !font-bold">50,432</h1>
          <p className="!mt-2">Lives Impacted</p>
        </div>
        <div className='!flex !flex-col !items-center !w-full md:!w-65 !p-4 !shadow-lg !rounded-md'>
          <h1 className="!text-violet-500 !text-3xl md:!text-4xl !font-bold">127</h1>
          <p className="!mt-2">Active Projects</p>
        </div>
        <div className='!flex !flex-col !items-center !w-full md:!w-65 !p-4 !shadow-lg !rounded-md'>
          <h1 className="!text-violet-500 !text-3xl md:!text-4xl !font-bold">3,421</h1>
          <p className="!mt-2">Volunteers</p>
        </div>
      </div>

      <div className="!flex !flex-wrap !justify-center !gap-4 !mt-8 !px-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            onClick={() => setActiveButton(category)}
            className={
              activeButton === category
                ? "!bg-violet-500 !text-white !border-violet-500 !w-24 md:!w-29 !h-10 !rounded-3xl"
                : "!w-24 md:!w-29 !h-10 !rounded-3xl"
            }
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="!flex-1 !flex !justify-center !w-full !py-8 !px-4">
        <BentoGrid className="!w-full !max-w-4xl">
          {items
            .filter(item => activeButton === "All" || item.badge === activeButton)
            .map((item, i) => (
              <BentoGridItem
                key={i}
                image={item.image}
                badge={item.badge}
                title={item.title}
                description={item.description}
                progress={item.progress}
                className={i === 3 || i === 6 ? "md:!col-span-2" : ""}
              />
            ))}
        </BentoGrid>
      </div>
      <Footer/>
    </div>
  )
}

export default Blog