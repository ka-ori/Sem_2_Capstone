import React from 'react'
import { cn } from "@/lib/utils"

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-4 !max-w-7xl !mx-auto",
        className,
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  badge,
  progress,
}) => {
  const progressPercentage = (progress.current / progress.total) * 100

  return (
    <div
      className={cn(
        "!row-span-1 !rounded-xl !group/bento !hover:shadow-xl !transition !duration-200 !shadow-input !dark:shadow-none !p-4 !dark:bg-black !dark:border-white/[0.2] !bg-white !border !border-transparent !justify-between !flex !flex-col !space-y-4",
        className
      )}
    >
      <div className="!relative !overflow-hidden !rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="!w-full !h-48 !object-cover !transition-transform !duration-300 group-hover/bento:!scale-105"
        />
        <div className="!absolute !top-3 !left-3">
          <span className="!inline-flex !items-center !px-2.5 !py-0.5 !rounded-full !text-xs !font-medium !bg-violet-100 !text-violet-800">
            {badge}
          </span>
        </div>
      </div>

      <div className="!space-y-3">
        <div className="!font-sans !font-bold !text-neutral-600 !dark:text-neutral-200 !text-lg">
          {title}
        </div>
        <div className="!font-sans !font-normal !text-neutral-600 !text-sm !dark:text-neutral-300">
          {description}
        </div>
        
        {progress && (
          <div className="!space-y-2">
            <div className="!flex !justify-between !text-sm">
              <span className="!text-gray-600">Progress</span>
              <span className="!font-medium !text-violet-600">
                ${progress.current.toLocaleString()} / ${progress.total.toLocaleString()}
              </span>
            </div>
            <div className="!w-full !bg-gray-200 !rounded-full !h-2">
              <div 
                className="!bg-violet-500 !h-2 !rounded-full !transition-all !duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="!text-xs !text-gray-500">
              {Math.round(progressPercentage)}% funded
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
