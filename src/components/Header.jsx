import React from 'react';

const Header = () => {
  return (
    <header className="bg-white bg-opacity-90 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/h3.jpg" // ใส่ path โลโก้ที่คุณใช้
            alt="Thai Local Food Logo"
            className="w-8 h-8 rounded-md"
          />
          <span className="text-lg font-bold text-gray-800">Thai Local Food</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-orange-500">หน้าแรก</a>
          <a href="#search" className="hover:text-orange-500">ค้นหาร้าน</a>
          <a href="#about" className="hover:text-orange-500">ติดต่อ</a>
        </nav>

        {/* สมัครสมาชิก */}

      </div>
    </header>
  );
};

export default Header;
