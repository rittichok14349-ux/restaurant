import React from 'react';

const Header = () => {
  return (
    <header className="bg-orange-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* โลโก้ / ชื่อเว็บ */}
        <h1 className="text-2xl font-bold tracking-wide">
          🍜 แนะนำร้านอาหารท้องถิ่น
        </h1>

        {/* เมนูนำทาง */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-yellow-200">หน้าแรก</a>
          <a href="#restaurants" className="hover:text-yellow-200">ร้านอาหาร</a>
          <a href="#favorites" className="hover:text-yellow-200">ร้านโปรด</a>
          <a href="#contact" className="hover:text-yellow-200">ติดต่อ</a>
        </nav>

        {/* ปุ่มเมนูมือถือ (ถ้าอยากเพิ่ม later ทำ dropdown ได้) */}
        <button className="md:hidden p-2 rounded hover:bg-orange-600">
          <span className="sr-only">เมนู</span>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
