import React from 'react';

const restaurants = [
  {
    id: 1,
    name: 'ร้านส้มตำป้าสมใจ',
    rating: 4.8,
    reviews: 247,
    location: 'ปั๊บ, เชียงใหม่',
    foodCategory: ['อาหารไทยภาคตะวันออกเฉียงเหนือ', 'ส้มตำ'],
    menuRecommend: ['ส้มตำ', 'ลาบหมู', 'ไก่ย่าง'],
    imageUrl: '/images/restaurant1.jpg',
    isOpen: true,
    isPopular: true,
    phone: '0123456789',
  },
  {
    id: 2,
    name: 'เรือนข้าวแกงคุณยาย',
    rating: 4.6,
    reviews: 189,
    location: 'ราชเทวี, กรุงเทพมหานคร',
    foodCategory: ['อาหารไทยภาคกลาง'],
    menuRecommend: ['แกงส้มชะอมไข่', 'ผัดไทยกุ้งสด', 'ต้มยำกุ้ง'],
    imageUrl: '/images/restaurant2.jpg',
    isOpen: true,
    isPopular: false,
    phone: '0987654321',
  },
  // เพิ่มร้านอื่นๆ ตามต้องการ...
];

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <div className="relative">
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="rounded-lg w-full h-48 object-cover"
        />
        {restaurant.isPopular && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 rounded-full text-xs font-bold">
            B
          </span>
        )}
        {restaurant.isOpen && (
          <span className="absolute top-2 right-2 bg-green-500 text-white px-2 rounded-full text-xs font-bold">
            เปิด
          </span>
        )}
      </div>
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg">{restaurant.name}</h3>
        <div className="flex items-center text-sm text-yellow-500 mt-1">
          <span>⭐ {restaurant.rating.toFixed(1)}</span>
          <span className="ml-2 text-gray-600">({restaurant.reviews})</span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{restaurant.location}</p>

        <div className="mt-2 flex flex-wrap gap-1 text-xs">
          {restaurant.foodCategory.map((cat) => (
            <span
              key={cat}
              className="bg-gray-200 text-gray-800 rounded-full px-2 py-0.5"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-1 text-xs">
          {restaurant.menuRecommend.map((menu) => (
            <span
              key={menu}
              className="bg-orange-200 text-orange-700 rounded-full px-2 py-0.5"
            >
              {menu}
            </span>
          ))}
        </div>

        <div className="mt-auto flex space-x-2 pt-3">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
            ดูรายละเอียด
          </button>
          <button
            onClick={() => window.open(`tel:${restaurant.phone}`, '_self')}
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            โทร
          </button>
        </div>
      </div>
    </div>
  );
};

const RecommendedRestaurants = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-2">
        ร้านอาหาร<span className="text-green-600">แนะนำ</span>
      </h2>
      <p className="text-gray-700 mb-6">พบกับ 6 ร้านอาหารท้องถิ่นที่ดีที่สุด</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedRestaurants;
