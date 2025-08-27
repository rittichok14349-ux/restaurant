import React from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetail = () => {
  const { id } = useParams(); // รับ id จาก URL เช่น /restaurant/1

  // ข้อมูลตัวอย่าง สามารถเปลี่ยนเป็น fetch API ได้
  const restaurant = {
    id,
    name: 'จันทร์โภชนา',
    province: 'จันทบุรี',
    image: '/images/janrestaurant.jpg', // ใส่ path รูปจริง
    description: 'ร้านอาหารพื้นเมืองจันทบุรี รสชาติจัดจ้าน วัตถุดิบสดใหม่',
    tags: ['ยำหมูดุด รสเด็ด', 'ปลาต้มระกำใส่กระวาน'],
    address: '123 ถนนสุขเกษม จันทบุรี',
    openHours: '10:00 - 20:00 น.',
    contact: '089-123-4567'
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-6">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{restaurant.name}</h1>
      <p className="text-gray-600 mb-2">{restaurant.province}</p>
      <p className="mb-4">{restaurant.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {restaurant.tags.map((tag, index) => (
          <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="border-t pt-4 text-sm text-gray-700 space-y-2">
        <p><strong>ที่อยู่:</strong> {restaurant.address}</p>
        <p><strong>เวลาเปิด:</strong> {restaurant.openHours}</p>
        <p><strong>ติดต่อ:</strong> {restaurant.contact}</p>
      </div>
    </div>
  );
};

export default RestaurantDetail;
