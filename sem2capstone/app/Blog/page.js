'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Loader2 } from 'lucide-react'
import NavBar from "@/components/NavBar";
import DonationBanner from '@/components/DonationBanner';




const generateMoreItems = (startIndex, count) => {
  const categories = ["Impact", "Education", "Health", "Environment"]
  const titles = [
    "Clean Water Initiative", "School Building Project", "Mobile Health Clinic", "Tree Planting Drive",
    "Scholarship Program", "Community Garden", "Medical Equipment Fund", "Solar Panel Installation",
    "Literacy Campaign", "Food Distribution", "Wildlife Protection", "Disaster Relief Fund",
    "Youth Mentorship", "Senior Care Program", "Environmental Cleanup", "Emergency Shelter"
  ]
  
  const descriptions = [
    "Making a lasting impact in communities through sustainable solutions.",
    "Empowering future generations with access to quality education and resources.",
    "Providing essential healthcare services to underserved populations.",
    "Protecting our planet for future generations through environmental action.",
    "Creating opportunities for growth and development in local communities.",
    "Building stronger, more resilient communities through collaborative efforts."
  ]

  const images = [
    "https://images.unsplash.com/photo-1541919329513-35f7af297129?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=250&fit=crop"
  ]

  return Array.from({ length: count }, (_, i) => {
    const index = startIndex + i
    return {
      title: `${titles[index % titles.length]} ${Math.floor(index / titles.length) + 1}`,
      description: descriptions[index % descriptions.length],
      image: images[index % images.length],
      badge: categories[index % categories.length],
      progress: { 
        current: Math.floor(Math.random() * 40000) + 5000, 
        total: Math.floor(Math.random() * 20000) + 50000 
      },
    }
  })
}

function Blog() {
  const [activeButton, setActiveButton] = useState("All")
  const [displayedItems, setDisplayedItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalItemsLoaded, setTotalItemsLoaded] = useState(0)
  const observer = useRef()

  const categories = ["All", "Impact", "Education", "Health", "Environment"]
  const ITEMS_PER_PAGE = 6


  const generateItemsForCategory = useCallback((category, startIndex, count) => {
    const items = generateMoreItems(startIndex, count * 3) // Generate more to have enough for filtering
    
    if (category === "All") {
      return items.slice(0, count)
    }
    
    const filteredItems = items.filter(item => item.badge === category)

    if (filteredItems.length < count) {
      const additionalItems = generateMoreItems(startIndex + items.length, count * 2)
      const moreFiltered = additionalItems.filter(item => item.badge === category)
      return [...filteredItems, ...moreFiltered].slice(0, count)
    }
    
    return filteredItems.slice(0, count)
  }, [])


  const loadMoreItems = useCallback(() => {
    if (loading) return

    setLoading(true)
    

    setTimeout(() => {
      const newItems = generateItemsForCategory(activeButton, totalItemsLoaded, ITEMS_PER_PAGE)
      
      setDisplayedItems(prev => [...prev, ...newItems])
      setTotalItemsLoaded(prev => prev + newItems.length)
      setLoading(false)
    }, 300)
  }, [loading, activeButton, totalItemsLoaded, generateItemsForCategory])


  useEffect(() => {
    setDisplayedItems([])
    setTotalItemsLoaded(0)
    setLoading(true)
    
   
    setTimeout(() => {
      const initialItems = generateItemsForCategory(activeButton, 0, ITEMS_PER_PAGE)
      setDisplayedItems(initialItems)
      setTotalItemsLoaded(initialItems.length)
      setLoading(false)
    }, 200)
  }, [activeButton, generateItemsForCategory])


  const lastItemRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadMoreItems()
      }
    }, {
      threshold: 0.1,
      rootMargin: '100px'
    })
    if (node) observer.current.observe(node)
  }, [loading, loadMoreItems])

  return (
    <div className="!min-h-screen !flex !flex-col !bg-gray-50">
      <NavBar />
      <DonationBanner/>
     
      <div className="!flex !flex-col md:!flex-row !justify-center !items-center !gap-4 md:!gap-8 !mt-8 !px-4">
        <div className='!flex !flex-col !items-center !w-full md:!w-64 !p-6 !bg-white !shadow-lg !rounded-lg hover:!shadow-xl !transition-shadow'>
          <h1 className="!text-violet-500 !text-3xl md:!text-4xl !font-bold">$1,547,892</h1>
          <p className="!mt-2 !text-gray-600">Total Donations</p>
        </div>
        <div className='!flex !flex-col !items-center !w-full md:!w-64 !p-6 !bg-white !shadow-lg !rounded-lg hover:!shadow-xl !transition-shadow'>
          <h1 className="!text-violet-500 !text-3xl md:!text-4xl !font-bold">50,432</h1>
          <p className="!mt-2 !text-gray-600">Lives Impacted</p>
        </div>
        <div className='!flex !flex-col !items-center !w-full md:!w-64 !p-6 !bg-white !shadow-lg !rounded-lg hover:!shadow-xl !transition-shadow'>
          <h1 className="!text-violet-500 !text-3xl md:!text-4xl !font-bold">127</h1>
          <p className="!mt-2 !text-gray-600">Active Projects</p>
        </div>
        <div className='!flex !flex-col !items-center !w-full md:!w-64 !p-6 !bg-white !shadow-lg !rounded-lg hover:!shadow-xl !transition-shadow'>
          <h1 className="!text-violet-500 !text-3xl md:!text-4xl !font-bold">3,421</h1>
          <p className="!mt-2 !text-gray-600">Volunteers</p>
        </div>
      </div>

      
      <div className="!flex !flex-wrap !justify-center !gap-4 !mt-12 !px-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            onClick={() => setActiveButton(category)}
            className={cn(
              "!px-6 !py-2 !rounded-full !transition-all !duration-200 hover:!scale-105",
              activeButton === category
                ? "!bg-violet-500 !text-white !border-violet-500 !shadow-lg"
                : "!bg-white hover:!bg-violet-50 !border-gray-300"
            )}
          >
            {category}
          </Button>
        ))}
      </div>
      
   
      <div className="!flex-1 !flex !justify-center !w-full !py-12 !px-4">
        <div className="!w-full !max-w-6xl">
          <BentoGrid className="!w-full">
            {displayedItems.map((item, i) => {
              const isLastItem = i === displayedItems.length - 1
              return (
                <div
                  key={`${item.title}-${i}`}
                  ref={isLastItem ? lastItemRef : null}
                  className={cn(
                    "!transition-all !duration-300 hover:!scale-[1.02]",
                    i % 7 === 3 || i % 7 === 6 ? "md:!col-span-2" : ""
                  )}
                >
                  <BentoGridItem
                    image={item.image}
                    badge={item.badge}
                    title={item.title}
                    description={item.description}
                    progress={item.progress}
                  />
                </div>
              )
            })}
          </BentoGrid>
          
          
          {loading && (
            <div className="!flex !justify-center !items-center !py-12">
              <div className="!flex !items-center !space-x-3">
                <Loader2 className="!h-6 !w-6 !animate-spin !text-violet-500" />
                <span className="!text-gray-600 !font-medium">Loading more stories...</span>
              </div>
            </div>
          )}
          
   
          {!loading && displayedItems.length === 0 && (
            <div className="!text-center !py-16">
              <div className="!inline-flex !items-center !justify-center !w-20 !h-20 !bg-gray-100 !rounded-full !mb-6">
                <span className="!text-gray-400 !text-3xl">🔍</span>
              </div>
              <h3 className="!text-xl !font-semibold !text-gray-800 !mb-2">No stories found</h3>
              <p className="!text-gray-600">Try selecting a different category to see more content.</p>
            </div>
          )}
        </div>
      </div>
      

    </div>
  )
}

export default Blog
