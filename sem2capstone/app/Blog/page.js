
'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Loader2 } from 'lucide-react'
import DonationBanner from '@/components/DonationBanner'
import { generateMoreItems } from '@/lib/blogData' // Import from the new file

function Blog() {
  const [activeButton, setActiveButton] = useState("All")
  const [displayedItems, setDisplayedItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalItemsLoaded, setTotalItemsLoaded] = useState(0)
  const observer = useRef()
  const router = useRouter()

  const categories = ["All", "Impact", "Education", "Health", "Environment"]
  const ITEMS_PER_PAGE = 6

  const handleItemClick = (item) => {
    router.push(`/blog/${item.id}`)
  }

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
                  key={`${item.id}-${i}`}
                  ref={isLastItem ? lastItemRef : null}
                  className={cn(
                    "!transition-all !duration-300 hover:!scale-[1.02] !cursor-pointer",
                    i % 7 === 3 || i % 7 === 6 ? "md:!col-span-2" : ""
                  )}
                  onClick={() => handleItemClick(item)}
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