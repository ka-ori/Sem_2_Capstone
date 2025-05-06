"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function Testimonial() {
  const testimonials = [
    {
      image: "/images/Sarah Hyland.webp",
      quote: "As a foundation partner, we've seen firsthand how effectively they distribute funds.",
      name: "Sarah Mitchell",
      role: "Regular Donor",
    },
    {
      image: "/images/Michael Lee.jpg",
      quote: "As a foundation partner, we've seen firsthand how effectively they distribute funds.",
      name: "Michael Chen",
      role: "Monthly Supporter",
    },
    {
      image: "/images/Emma Watson 2013.jpgg",
      quote: "As a foundation partner, we've seen firsthand how effectively they distribute funds.",
      name: "Emma Thompson",
      role: "Foundation Partner",
    },
    {
        image: "/images/Trump Image.jpeg",
        quote: "As a foundation partner, we've seen firsthand how effectively they distribute funds.",
        name: "Emma Thompson",
        role: "Foundation Partner",
      }
    
  ]

  return (
    <div className="flex justify-center">
    <div className="py-16 px-4 max-w-6xl mx-auto !mt-30 text-center">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">What Our Users Say</h2>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full !mt-20"
      >
        <CarouselContent className="">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="!md:basis-1/1 lg:basis-1/3 !pl-4 !pr-4 ">
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center justify-center !p-6 text-center">
                  <Avatar className="w-24 h-24 mb-6">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <p className="text-gray-700 !mb-6 leading-relaxed">{testimonial.quote}</p>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center !mt-8">
          <CarouselPrevious className="relative static !mr-2 translate-y-0" />
          <CarouselNext className="relative static !ml-2 translate-y-0" />
        </div>
      </Carousel>
    </div>
    </div>
  )
}
