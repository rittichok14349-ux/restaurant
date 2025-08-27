import React, { useState } from 'react';
import '../components/Findstore.css'; // นำเข้าคลาส CSS

const provinces = ['ทั้งหมด', 'กรุงเทพฯ', 'เชียงใหม่', 'ภูเก็ต']; // ตัวอย่างจังหวัด
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
    
    <div className="findstore-container">
              <h1 className="text-3xl font-semibold text-center text-orange-600 mb-6">
        🔎 หาร้านที่ใช่ 
      </h1>
      <h2>🔍 ค้นหา & กรองข้อมูล</h2>
      <input
        type="text"
        placeholder="ค้นหาชื่อร้าน, เมนู, หรือที่อยู่..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="filters">
        <select
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
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
        >
          {prices.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <button onClick={clearFilters}>ล้างตัวกรอง</button>
      </div>

      <div className="food-types">
        {foodTypes.map((type) => (
          <button
            key={type}
            className={selectedFoodTypes.includes(type) ? 'active' : ''}
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
