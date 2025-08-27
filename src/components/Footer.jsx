import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Thai Food Finder. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="mailto:Rittichok14349@gmail.comm" className="hover:underline text-green-400">
            Rittichok14349@gmail.com
          </a>
          <a href="https://www.facebook.com/rittichok.somon" className="hover:underline text-green-400">
            Facebook
          </a>
          <a href="https://www.instagram.com/s_ohto?igsh=Z3h3cW40cXZ4ajBn&utm_source=qr" className="hover:underline text-green-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
