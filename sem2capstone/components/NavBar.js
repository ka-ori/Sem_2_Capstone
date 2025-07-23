"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import SearchModal from './Search';
import { useAuth } from '@/context/AuthContext';
import { usePathname } from 'next/navigation'; 

export default function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility
  
  const { isAuthenticated, user, logout } = useAuth();
  const pathname = usePathname(); // Get the current URL path

  // This useEffect will close the mobile menu whenever the user navigates to a new page.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="!sticky !top-0 !z-50 !w-full !bg-white/80 !backdrop-blur-sm !border-b !border-gray-200">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8">
          <div className="!flex !items-center !justify-between !h-16">
            
            {/* Left Section: Logo and Desktop Nav Links */}
            <div className="!flex !items-center">
              <Link href={isAuthenticated ? "/dashboard" : "/"} className="!flex-shrink-0 !text-2xl !font-bold !text-violet-600">
                CharityCo
              </Link>
              {/* Desktop Navigation Links - hidden on small screens */}
              <div className="!hidden md:!block">
                <div className="!ml-10 !flex !items-baseline !space-x-4">
                  <Link href="/about" className="!text-gray-700 hover:!bg-gray-100 hover:!text-black !px-3 !py-2 !rounded-md !text-sm !font-medium">About Us</Link>
                  <Link href="/blog" className="!text-gray-700 hover:!bg-gray-100 hover:!text-black !px-3 !py-2 !rounded-md !text-sm !font-medium">Our Stories</Link>
                  <Link href="/donate" className="!text-gray-700 hover:!bg-gray-100 hover:!text-black !px-3 !py-2 !rounded-md !text-sm !font-medium">Ways to Give</Link>
                </div>
              </div>
            </div>

            {/* Right Section: Auth buttons, Search, and Hamburger Menu */}
            <div className="!flex !items-center">
              {/* Desktop Auth Buttons - hidden on small screens */}
              <div className="!hidden md:!flex !items-center !space-x-2 md:!space-x-4">
                {isAuthenticated ? (
                  <>
                    <span className="!hidden sm:!inline !text-sm !text-gray-700">Welcome, {user?.firstname}!</span>
                    <button 
                      onClick={logout} 
                      className="!bg-violet-600 !text-white hover:!bg-violet-700 !px-3 !py-2 !rounded-md !text-sm !font-medium"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="!text-gray-700 hover:!bg-gray-100 hover:!text-black !px-3 !py-2 !rounded-md !text-sm !font-medium">Log In</Link>
                    <Link href="/signUp" className="!bg-violet-600 !text-white hover:!bg-violet-700 !px-3 !py-2 !rounded-md !text-sm !font-medium">Sign Up</Link>
                  </>
                )}
              </div>
              
              {/* Search Button - always visible */}
              <button 
                onClick={() => setIsSearchOpen(true)} 
                className="!p-2 !rounded-full !text-gray-500 hover:!text-gray-800 hover:!bg-gray-100"
                aria-label="Open search"
              >
                <Search className="!h-6 !w-6" />
              </button>

              {/* Hamburger Menu Button - only visible on small screens (md and below) */}
              <div className="!flex md:!hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="!p-2 !rounded-full !text-gray-500 hover:!text-gray-800 hover:!bg-gray-100"
                >
                  {/* Show X icon if menu is open, otherwise show hamburger icon */}
                  {isMenuOpen ? <X className="!h-6 !w-6" /> : <Menu className="!h-6 !w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================= */}
        {/*              MOBILE MENU DROPDOWN             */}
        {/* ============================================= */}
        {/* This entire block is shown or hidden based on the isMenuOpen state. */}
        {isMenuOpen && (
          <div className="md:!hidden !bg-white !border-t !border-gray-200">
            <div className="!px-2 !pt-2 !pb-3 !space-y-1 sm:!px-3">
              {/* Mobile Navigation Links */}
              <Link href="/about" className="!block !text-gray-700 hover:!bg-gray-100 hover:!text-black !px-3 !py-2 !rounded-md !text-base !font-medium">About Us</Link>
              <Link href="/blog" className="!block !text-gray-700 hover:!bg-gray-100 hover:!text-black !px-3 !py-2 !rounded-md !text-base !font-medium">Our Stories</Link>
              <Link href="/donate" className="!block !text-gray-700 hover:!bg-gray-100 hover:!text-black !px-3 !py-2 !rounded-md !text-base !font-medium">Ways to Give</Link>
            </div>
            
            {/* Divider */}
            <div className="!border-t !border-gray-200"></div>

            {/* Mobile Authentication Section */}
            <div className="!px-2 !pt-2 !pb-3 !space-y-1 sm:!px-3">
              {isAuthenticated ? (
                <>
                  <div className="!px-3 !py-2">
                    <p className="!text-base !font-medium !text-gray-800">Welcome, {user?.firstname}!</p>
                    <p className="!text-sm !font-medium !text-gray-500">{user?.email}</p>
                  </div>
                  <button 
                    onClick={logout} 
                    className="!w-full !text-left !block !bg-red-50 !text-red-700 hover:!bg-red-100 !px-3 !py-2 !rounded-md !text-base !font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="!block !text-gray-700 hover:!bg-gray-100 hover:!text-black !px-3 !py-2 !rounded-md !text-base !font-medium">Log In</Link>
                  <Link href="/signUp" className="!block !bg-violet-50 !text-violet-700 hover:!bg-violet-100 !px-3 !py-2 !rounded-md !text-base !font-medium">Sign Up</Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
      {/* Search Modal - remains unchanged */}
      <SearchModal isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
    </>
  );
}