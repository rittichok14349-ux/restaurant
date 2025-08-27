import React, { useState } from 'react';
import '../components/Findstore.css'; // ถ้ามี CSS เพิ่มเติม

const provinces = ['ทั้งหมด', 'กรุงเทพฯ', 'เชียงใหม่', 'ภูเก็ต'];
const prices = ['ทั้งหมด', '฿', '฿฿', '฿฿฿'];
const foodTypes = [
  'อาหารไทยภาคกลาง',
  'อาหารไทยภาคเหนือ',
  'อาหารไทยภาคใต้',
  'อาหารไทยภาคอีสาน',
  'อาหารทะเล',
  'ข้าวผัด-ผัดไทย',
  'ก๋วยเตี๋ยว',
  'ขนมหวาน',
  'เครื่องดื่ม',
];

const Findstore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('ทั้งหมด');
  const [selectedPrice, setSelectedPrice] = useState('ทั้งหมด');
  const [selectedFoodTypes, setSelectedFoodTypes] = useState([]);

  const toggleFoodType = (type) => {
    setSelectedFoodTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedProvince('ทั้งหมด');
    setSelectedPrice('ทั้งหมด');
    setSelectedFoodTypes([]);
  };

  return (
    <div className="findstore-container py-10 px-4 max-w-4xl mx-auto">
      {/* 🔥 เพิ่มหัวเรื่องใหม่ใต้รูป */}
      <h1 className="text-3xl font-semibold text-center text-orange-600 mb-6">
        🔎 หาร้านที่ใช่ 
      </h1>

      <h2 className="text-xl font-bold mb-4 text-gray-800">ค้นหา & กรองข้อมูล</h2>

      <input
        type="text"
        placeholder="ค้นหาชื่อร้าน, เมนู, หรือที่อยู่..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
      />

      <div className="filters flex flex-wrap gap-4 mb-4">
        <select
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          {provinces.map((prov) => (
            <option key={prov} value={prov}>
              {prov}
            </option>
          ))}
        </select>

        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          {prices.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <button
          onClick={clearFilters}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
        >
          ล้างตัวกรอง
        </button>
      </div>

      <div className="food-types flex flex-wrap gap-2">
        {foodTypes.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full border ${
              selectedFoodTypes.includes(type)
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700'
            }`}
            onClick={() => toggleFoodType(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Findstore;
