import React from 'react'
import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import DonationCard from '@/components/DonationCard'
import FeaturedCauses from '@/components/FeaturedCauses';


function Page() {
  return (
    <div className = "main-container">
    <NavBar/>
    <SearchBar/>
    <DonationCard/>
    <FeaturedCauses/>

    </div>
  )
}

export default Page