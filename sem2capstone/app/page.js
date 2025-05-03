"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import DonationCard from "@/components/DonationCard";
import { Causes } from "@/components/Causes";
import {Benefits} from "@/components/Benefits";
import { Testimonial } from "@/components/UserTestimonials";
import { Footer } from "@/components/Footer";
export default function Page() {
  return (
    <div className="main-container bg-white min-h-screen">
      <NavBar />
      <SearchBar />
      <DonationCard />
      <h1 className="text-4xl font-bold text-center text-black !mt-30 ">
        Featured Causes
      </h1>
      <Causes />
      <Benefits />
      <Testimonial/>
      <Footer/>
      
    </div>
  );
}
