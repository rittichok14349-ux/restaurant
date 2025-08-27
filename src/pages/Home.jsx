<section
  id="home"
  className="relative bg-center min-h-screen flex items-center justify-center"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }}
>
  {/* Overlay ทึบ */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* เนื้อหา */}
  <div className="relative text-center text-white px-4 max-w-4xl">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-xl">
      ค้นพบ <span className="text-orange-500">ร้านอาหารท้องถิ่น</span><br />ที่ดีที่สุด
    </h1>
    <p className="text-lg md:text-xl mb-8 drop-shadow-md">
      สำรวจรสชาติแท้ของอาหารไทยจากร้านอาหารท้องถิ่นที่ดีที่สุดทั่วประเทศไทย
    </p>

    {/* ปุ่ม */}
    <div className="flex flex-wrap justify-center gap-3 mb-6">
      <button className="bg-white text-black px-5 py-2 rounded-full shadow font-medium">📍</button>
      <button className="bg-white text-black px-5 py-2 rounded-full shadow font-medium">⭐</button>
      <button className="bg-white text-black px-5 py-2 rounded-full shadow font-medium">⏳</button>
    </div>

    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="#restaurants"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
      >
        เริ่มค้นหาร้านอาหาร
      </a>
      <a
        href="#latest-reviews"
        className="bg-white text-orange-500 hover:text-orange-600 border border-orange-400 px-6 py-3 rounded-lg font-semibold transition"
      >
        ดูรีวิวล่าสุด
      </a>
    </div>
  </div>
</section>
