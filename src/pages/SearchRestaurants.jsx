import React, { useState } from "react";

const restaurants = [
  {
    id: 1,
    name: "Ongtong Khaosoi x Ari",
    rating: 4.8,
    reviews: 247,
    categories: ["อาหารไทยภาคเหนือ", "ข้าวซอย"],
    img: "/img/h4.jpg",
    location: "อาหารเหนือจากเชียงใหม่",
    tags: ["ข้าวซอย", "น้ำพริกหนุ่ม", "ขนมจีนน้ำเงี้ยว"],
  },
  {
    id: 2,
    name: "ส้มตำเด้อ (ทองหล่อ)",
    rating: 4.6,
    reviews: 189,
    categories: ["อาหารภาคอีสาน"],
    img: "/img/h5.jpg",
    location: "ปากซอยทองหล่อ 17",
    tags: ["ตำปลาดุกฟู", "ตำซั่วสกลนคร", "หมูปิ้งกะทิสด"],
  },
  {
    id: 3,
    name: "Phed Phed Cafe",
    rating: 4.9,
    reviews: 312,
    categories: ["อาหารภาคอีสาน"],
    img: "/img/h6.jpg",
    location: "เซ็นทรัลลาดพร้าว",
    tags: ["ตำปลาร้ากุ้งสด กุ้งลวก", "ตำข้าวโพดไข่เค็ม", "ยำขนมจีนหมูยอปลาทู"],
  },
  {
    id: 4,
    name: "จันทรโภชนา",
    rating: 4.5,
    reviews: 156,
    categories: ["อาหารตะวันออก"],
    img: "/img/h7.jpg",
    location: "จันทบุรี",
    tags: ["ยำมังคุด รสเด็ด", "ปลาต้มระกำใส่กระวาน"],
  },
  {
    id: 5,
    name: "Din Din Thai Cuisine",
    rating: 4.4,
    reviews: 198,
    categories: ["อาหารใต้"],
    img: "/img/h8.jpg",
    location: "ปากเกร็ด นนทบุรี",
    tags: ["ตับกระเทียม", "ใบเหลียงต้มกะทิ"],
  },
  {
    id: 6,
    name: "กรุงเก่า เตี๋ยวเรือ ริมคลองมะขามเรียง",
    rating: 4.7,
    reviews: 203,
    categories: ["อาหารภาคกลาง"],
    img: "/img/h9.jpg",
    location: "พระนครศรีอยุธย",
    tags: ["น่องไก่ทอด กรุงเก่า", "สะโพกไก่ทอด กรุงเก่า ", "ปีกไก่ทอด กรุงเก่า "],
  },
];

export default function SearchRestaurants() {
  const [selected, setSelected] = useState(null);

  if (selected) {
    // ✅ หน้ารายละเอียด
    return (
      <div className="container mx-auto py-10">
        <button
          onClick={() => setSelected(null)}
          className="mb-6 bg-gray-200 px-4 py-2 rounded-xl hover:bg-gray-300 transition"
        >
          ⬅ กลับไปหน้ารวมร้าน
        </button>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <img
            src={selected.img}
            alt={selected.name}
            className="w-full h-64 object-cover rounded-xl"
          />
          <h2 className="text-3xl font-bold mt-4">{selected.name}</h2>
          <p className="text-gray-500">{selected.location}</p>
          <p className="mt-2">⭐ {selected.rating} ({selected.reviews} รีวิว)</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {selected.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ✅ หน้ารวมร้านอาหาร
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-center text-3xl font-bold mb-2">
        ร้านอาหาร <span className="text-green-600">แนะนำ</span>
      </h2>
      <p className="text-center text-gray-500 mb-8">
        พบกับ {restaurants.length} ร้านอาหารท้องถิ่นที่ดีที่สุด
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={r.img}
              alt={r.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{r.name}</h3>
              <p className="text-sm text-gray-500">{r.location}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {r.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelected(r)}
                className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition"
              >
                ดูรายละเอียด
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
