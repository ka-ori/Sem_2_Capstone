"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import DonationCard from "@/components/DonationCard";
import { Causes } from "@/components/Causes";
export default function Page() {
  return (
    <div className="main-container bg-white min-h-screen">
      <NavBar />
      <SearchBar />
      <DonationCard />
      <h1 className="text-4xl font-bold text-center text-black !mt-12 !mb-10">
        Featured Causes
      </h1>
      <Causes />
    </div>
  );
}
