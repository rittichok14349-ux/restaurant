import React from "react";
import { Link } from 'react-router-dom';
const Home = ({ onFindStoreClick }) => {
  // ✅ เพิ่ม props ตรงนี้
  return (
    <>
      <section
        id="home"
        className="relative bg-cover bg-center h-screen flex items-center justify-center "
        style={{
          backgroundImage: 'url("/img/h2.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ชั้นมืดครอบพื้นหลัง */}
        <div className="absolute inset-0 bg-opacity-60"></div>

        {/* เนื้อหาตรงกลาง */}
        <div className="relative text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            ค้นพบ <span className="text-orange-500">ร้านอาหารท้องถิ่น</span>{" "}
            ที่ดีที่สุด
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            สำรวจรสชาติแท้ของอาหารไทยจากร้านอาหารท้องถิ่นที่ดีที่สุดทั่วประเทศไทย
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onFindStoreClick} // ✅ ใช้ props ที่รับเข้ามา
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              เริ่มค้นหาร้านอาหาร
            </button>
            <a
              href="#latest-reviews"
              className="bg-white text-orange-500 hover:text-orange-600 border border-orange-400 px-6 py-3 rounded-lg font-semibold transition"
            >
              ดูรีวิวล่าสุด
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
