import React from 'react'
import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import DonationCard from '@/components/DonationCard'
function page() {
  return (
    <div className = "container">
    <NavBar/>
    <SearchBar/>
    <DonationCard/>
    </div>
  )
}

export default page