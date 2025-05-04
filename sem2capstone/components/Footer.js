
'use client'
import Image from "next/image"
import Link from "next/link"

export  function Footer(props) {
  const {
    companyName = "Your Company Name",
    contactPhone = "(555) 123-4567",
    contactEmail = "hello@kindconnect.com",
    year = new Date().getFullYear(),
  } = props || {}

  return (
    <footer className="w-full bg-[#5727e0] text-white !py-12 !mt-20">
      <div className="container mx-auto !px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 !gap-8">
          
          <div>
            <h3 className="text-xl font-bold !mb-4">Quick Links</h3>
            <ul className="!space-y-3">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

      
          <div>
            <h3 className="text-xl font-bold !mb-4">Contact</h3>
            <ul className="!space-y-3">
              <li>Phone: {contactPhone}</li>
              <li>Email: {contactEmail}</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-bold !mb-4">Follow Us</h3>
            <div className="flex !space-x-4">
              <Link
                href="#"
                className="bg-white text-[#5727e0] rounded-full !p-2 hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
              <Image
  src="/images/Facebook.svg"
  alt="Facebook"
  width={35}
  height={35}
  className="rounded-full object-cover fill-[#5727e0]"
/>

              </Link>
              <Link
                href="#"
                className="bg-white text-[#5727e0] rounded-full !p-2 hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <Image
  src="/images/Instagram.svg"
  alt="Instagram"
  width={35}
  height={35}
  className="rounded-full object-cover fill-[#5727e0]"
/>

                
              </Link>
              <Link
                href="#"
                className="bg-white text-[#5727e0] rounded-full !p-2 hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
               
               <Image
  src="/images/X.svg"
  alt="X"
  width={35}
  height={35}
  className="rounded-full object-cover fill-[#5727e0]"
/>

              </Link>
            </div>
          </div>
        </div>

       
        <div className="!mt-12 text-center">
          <p>
            © {year} {companyName}.
          </p>
        </div>
      </div>
    </footer>
  )
}