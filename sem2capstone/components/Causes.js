'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

export function Causes() {
  const items = [
    {
      id: 1,
      title: "Support Our Mission",
      description: "Help us make a difference in the lives of those in need through your generous contribution.",
      image : "/images/Charity Hands Diversity Image.avif"

    },
    {
      id: 2,
      title: "Fund Clean Water",
      description: "Your donation provides clean water to communities facing severe shortages",
     image : "/images/Cause2.jpg"

    },
    {
      id: 3,
      title: "Education For All",
      description: "Support our initiative to bring quality education to underprivileged children around the world.",
      image : "/images/Scholarship Programs Image.jpeg"

    },
    {
      id: 4,
      title: "Wildlife Conservation",
      description: "Join our efforts to protect endangered species and preserve natural habitats.",
      image : "/images/Elephant Rescue Image.jpeg"

    },
    {
      id: 5,
      title: "Emergency Relief",
      description: "Provide immediate assistance to those affected by natural disasters and humanitarian crises.",
      image : "/images/Disaster Management.jpg"

    },
  ]

  return (
    <div className="  !w-full flex justify-center !mt-20">
      <Carousel className="w-full max-w-6xl px-4">
        <CarouselContent className="gap-4">
          {items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent className="!p-0">
                  <div className="flex flex-col">
                    <div className="!relative w-full h-48">
                      <Image
                        src={item.image}
                        alt={`Cause ${item.id}`}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="!p-6 !space-y-4">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Donate Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
