'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, User, Share2, Heart } from 'lucide-react'
import NavBar from "@/components/NavBar"
import DonationBanner from '@/components/DonationBanner'

const BlogDetail = ({ 
  id,
  title, 
  description, 
  image, 
  badge, 
  progress, 
  fullContent, 
  author, 
  date, 
  readTime 
}) => {
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  const handleDonate = () => {
    console.log('Donate clicked for project:', id)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const progressPercentage = Math.round((progress.current / progress.total) * 100)

  return (
    <div className="!min-h-screen !bg-gray-50">
      <NavBar />
      <DonationBanner />
      
      {/* Hero Section */}
      <div className="!relative !w-full !h-96 md:!h-[500px] !overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="!w-full !h-full !object-cover"
        />
        <div className="!absolute !inset-0 !bg-black !bg-opacity-40 !flex !items-end">
          <div className="!container !mx-auto !px-4 !pb-12">
            <Button
              onClick={handleBackClick}
              variant="outline"
              className="!mb-6 !bg-white !bg-opacity-90 hover:!bg-opacity-100 !border-none"
            >
              <ArrowLeft className="!w-4 !h-4 !mr-2" />
              Back to Projects
            </Button>
            <div className="!flex !items-center !mb-4">
              <span className={`!px-3 !py-1 !text-sm !font-medium !rounded-full !text-white ${
                badge === 'Impact' ? '!bg-blue-500' :
                badge === 'Education' ? '!bg-green-500' :
                badge === 'Health' ? '!bg-red-500' :
                '!bg-purple-500'
              }`}>
                {badge}
              </span>
            </div>
            <h1 className="!text-3xl md:!text-5xl !font-bold !text-white !mb-4 !leading-tight">
              {title}
            </h1>
            <p className="!text-xl !text-white !text-opacity-90 !max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="!container !mx-auto !px-4 !py-12">
        <div className="!grid !grid-cols-1 lg:!grid-cols-3 !gap-12">
          {/* Main Content */}
          <div className="lg:!col-span-2">
            {/* Article Meta */}
            <div className="!flex !flex-wrap !items-center !gap-6 !text-gray-600 !mb-8 !pb-6 !border-b">
              <div className="!flex !items-center">
                <User className="!w-4 !h-4 !mr-2" />
                <span>{author}</span>
              </div>
              <div className="!flex !items-center">
                <Clock className="!w-4 !h-4 !mr-2" />
                <span>{readTime} min read</span>
              </div>
              <div className="!flex !items-center">
                <span>{formatDate(date)}</span>
              </div>
              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="!ml-auto"
              >
                <Share2 className="!w-4 !h-4 !mr-2" />
                Share
              </Button>
            </div>

            {/* Article Content */}
            <article className="!prose !prose-lg !max-w-none">
              <div className="!text-xl !text-gray-700 !leading-relaxed !mb-8">
                {fullContent.intro}
              </div>

              {fullContent.sections.map((section, index) => (
                <div key={index} className="!mb-8">
                  <h2 className="!text-2xl !font-bold !text-gray-900 !mb-4">
                    {section.heading}
                  </h2>
                  <p className="!text-lg !text-gray-700 !leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Call to Action */}
              <div className="!bg-violet-50 !rounded-lg !p-8 !mt-12">
                <h3 className="!text-2xl !font-bold !text-violet-900 !mb-4">
                  Ready to Make a Difference?
                </h3>
                <p className="!text-violet-700 !mb-6">
                  Your contribution can help us reach our goal and create lasting impact in communities that need it most.
                </p>
                <Button 
                  onClick={handleDonate}
                  className="!bg-violet-500 hover:!bg-violet-600 !text-white !px-8 !py-3 !text-lg"
                >
                  <Heart className="!w-5 !h-5 !mr-2" />
                  Donate Now
                </Button>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:!col-span-1">
            <div className="!sticky !top-8">
              {/* Progress Card */}
              <div className="!bg-white !rounded-lg !shadow-lg !p-6 !mb-6">
                <h3 className="!text-xl !font-bold !text-gray-900 !mb-4">
                  Funding Progress
                </h3>
                <div className="!mb-4">
                  <div className="!flex !justify-between !text-sm !text-gray-600 !mb-2">
                    <span>Raised</span>
                    <span>{progressPercentage}%</span>
                  </div>
                  <div className="!w-full !bg-gray-200 !rounded-full !h-3">
                    <div 
                      className="!bg-violet-500 !h-3 !rounded-full !transition-all !duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="!flex !justify-between !items-center !mb-6">
                  <div>
                    <div className="!text-2xl !font-bold !text-violet-500">
                      ${progress.current.toLocaleString()}
                    </div>
                    <div className="!text-sm !text-gray-600">
                      of ${progress.total.toLocaleString()} goal
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={handleDonate}
                  className="!w-full !bg-violet-500 hover:!bg-violet-600 !text-white !py-3"
                >
                  Support This Project
                </Button>
              </div>

              {/* Impact Stats */}
              <div className="!bg-white !rounded-lg !shadow-lg !p-6">
                <h3 className="!text-xl !font-bold !text-gray-900 !mb-4">
                  Project Impact
                </h3>
                <div className="!space-y-4">
                  <div className="!flex !justify-between">
                    <span className="!text-gray-600">Lives Impacted</span>
                    <span className="!font-semibold">{Math.floor(Math.random() * 5000) + 500}</span>
                  </div>
                  <div className="!flex !justify-between">
                    <span className="!text-gray-600">Communities Served</span>
                    <span className="!font-semibold">{Math.floor(Math.random() * 50) + 10}</span>
                  </div>
                  <div className="!flex !justify-between">
                    <span className="!text-gray-600">Project Duration</span>
                    <span className="!font-semibold">{Math.floor(Math.random() * 24) + 6} months</span>
                  </div>
                  <div className="!flex !justify-between">
                    <span className="!text-gray-600">Volunteers Involved</span>
                    <span className="!font-semibold">{Math.floor(Math.random() * 200) + 50}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail