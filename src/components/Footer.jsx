import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="bg-[#bed3c3] text-[#222e53] pt-5 f">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="logo text-2xl font-bold mb-6">ArtConnect Maroc</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:underline">À propos nous</Link></li>
                <li><Link to="/home" className="hover:underline">A la lune</Link></li>
                <li><Link to="/home" className="hover:underline">Evenements</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Help</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
                <li><Link to="/help" className="hover:underline">Help</Link></li>
                <li><Link to="/terms" className="hover:underline">Terms</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Social Media</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaFacebook /> <a href="#" target="_blank" className="hover:underline">Facebook</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaTiktok /> <a href="#" target="_blank" className="hover:underline">Tiktok</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaInstagram /> <a href="#" target="_blank" className="hover:underline">Instagram</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <p>Sukasuk, Kota Tangerang, Banten 15111</p>
              <p>Phone: 0978446897</p>
              <p>Mail: adminmaroc@domain.com</p>
            </div>
          </div>

        
        </div>
          <div className="text-center mt-8 text-sm border-t border-gray-400 pt-4 bg-[#4b919e] w-full h-14">
            Copyright ©2025. All Rights Reserved
          </div>
      </footer>
    </>
  )
}

export default Footer
