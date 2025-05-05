import { cn } from "@/lib/utils"
import Image from "next/image"

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn("!grid !grid-cols-1 !gap-4 md:!auto-rows-[24rem] md:!grid-cols-3", className)}>
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
  const progressPercentage = progress ? (progress.current / progress.total) * 100 : 0

  return (
    <div
      className={cn(
        "!group/bento !shadow-input !row-span-1 !flex !flex-col !overflow-hidden !rounded-xl !border !border-neutral-200 !bg-white !transition !duration-200 hover:!shadow-xl dark:!border-white/[0.2] dark:!bg-black dark:!shadow-none",
        className
      )}
    >
      <div className="!relative !h-48 !w-full">
        {image && (
          <Image
            src={image || "/placeholder.svg"}
            alt={typeof title === "string" ? title : "Card image"}
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </div>

      <div className="!flex !flex-col !flex-1 !p-4">
        {badge && (
          <div className="!mb-3">
            <span className="!inline-block !px-4 !py-1 !rounded-full !text-sm !font-medium !text-white !bg-purple-600">
              {badge}
            </span>
          </div>
        )}

        <div className="!transition !duration-200 !group-hover/bento:!translate-x-2">
          <div className="!mb-2 !font-sans !font-bold !text-neutral-800 dark:!text-neutral-200">{title}</div>
          <div className="!font-sans !text-sm !font-normal !text-neutral-600 dark:!text-neutral-300 !mb-4">{description}</div>
        </div>

        {progress && (
          <div className="!mt-auto">
            <div className="!flex !justify-between !text-sm !mb-1">
              <span className="!text-neutral-600 dark:!text-neutral-300">Progress</span>
              <span className="!text-purple-600 !font-medium">
                {progress.current.toLocaleString()} of {progress.total.toLocaleString()}
              </span>
            </div>
            <div className="!w-full !h-2 !bg-neutral-200 dark:!bg-neutral-700 !rounded-full !overflow-hidden">
              <div className="!h-full !bg-purple-600 !rounded-full" style={{ width: `${progressPercentage}%` }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
