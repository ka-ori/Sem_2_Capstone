'use client'
import React from 'react'
import NavBar from "@/components/NavBar";
import DonationBanner from '@/components/DonationBanner';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Footer } from '@/components/Footer';
  
function page() {
    const items = [
        {
          id: 1,
          title: "Monthly Giving Program",
          description: "Make a lasting impact with recurring monthly donations",
          image: "/images/Giving Stock Image.jpg"
        },
        {
          id: 2,
          title: "Corporate Partnerships",
          description: "Partner with us to make a difference",
          image: "/images/Corporate Startup Collaboration.webp"
        },
        {
          id: 3,
          title: "Legacy Giving",
          description: "Leave a lasting legacy of positive change",
          image: "/images/Legacy Giving Image.jpeg"
        },
        {
          id: 4,
          title: "Wildlife Conservation",
          description: "Join our efforts to protect endangered species and preserve natural habitats.",
          image: "/images/Elephant Rescue Image.jpeg"
        },
        {
          id: 5,
          title: "Emergency Relief",
          description: "Provide immediate assistance to those affected by natural disasters and humanitarian crises.",
          image: "/images/Disaster Management.jpg"
        },
    ]
    
    return (
        <div>
            <NavBar/>
            <DonationBanner/>
            <div className="!w-full flex justify-center !mt-20">
                <Carousel className="w-full max-w-6xl px-4">
                    <CarouselContent className="gap-4">
                        {items.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Card className="h-full"> 
                                    <CardContent className="!p-0 flex flex-col h-full"> 
                                        <div className="flex flex-col h-full"> 
                                            <div className="!relative w-full h-48"> 
                                                <Image
                                                    src={item.image}
                                                    alt={`Cause ${item.id}`}
                                                    fill
                                                    className="object-cover rounded-t-lg"
                                                />
                                            </div>
                                            <div className="!p-6 !space-y-4 flex flex-col flex-grow"> 
                                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                                <p className="text-sm text-muted-foreground flex-grow"> 
                                                    {item.description}
                                                </p>
                                                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 mt-auto"> 
                                                    Learn More
                                                </Button>
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
            <h1 className="text-4xl font-bold text-center text-black !mt-30">Frequently Asked Questions</h1>
            <div className="flex flex-col items-center !mt-30 w-full">
                <Accordion type="single" collapsible className="w-6/8 !mb-8 border-b border-gray-200 !pb-4">
                    <AccordionItem value="item-1" >
                        <AccordionTrigger className="text-2xl text-center text-black">How do I start a monthly donation?</AccordionTrigger>
                        <AccordionContent className="!mt-4">
                            You can start a monthly donation by visiting our Donation page and selecting the "Monthly" option. The process takes less than 2 minutes and you can cancel anytime.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="w-6/8 !mb-8  border-b border-gray-200 !pb-4">
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-2xl text-center text-black">Can I change my donation amount?</AccordionTrigger>
                        <AccordionContent className="!mt-4">
                            Yes, you can modify your donation amount at any time through your account settings or by contacting our support team.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="w-6/8 !mb-8  border-b border-gray-200 !pb-4">
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-2xl text-center text-black">Is my donation tax-deductible?</AccordionTrigger>
                        <AccordionContent className="!mt-4">
                            All donations to our organization are tax-deductible to the fullest extent allowed by law. You'll receive a receipt for your records.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="w-6/8 !mb-8 border-b border-gray-200 !pb-4">
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-2xl text-center text-black">How do I cancel my recurring donation?</AccordionTrigger>
                        <AccordionContent className="!mt-4">
                            You can cancel your recurring donation anytime by logging into your account or contacting our support team. There are no cancellation fees.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <Footer/>
        </div>
    )
}

export default page