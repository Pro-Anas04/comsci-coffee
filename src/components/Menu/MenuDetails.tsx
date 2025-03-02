import { useState } from "react";
import { ShoppingBasket } from "lucide-react";
import Menu from "../../types/Menu";

interface MenuDatailProps {
  menu: Menu;
  addToCart: (menu: Menu) => void;
}

function MenuDetails({ menu, addToCart }: MenuDatailProps) {
  // สถานะสำหรับเก็บระดับความหวาน
  const [sweetness, setSweetness] = useState<number>(100); // ค่าเริ่มต้นเป็น 100%

  const handleSweetnessChange = (level: number) => {
    setSweetness(level);
  };

  const handleAddToCart = () => {
    const menuWithSweetness = {
      ...menu, // คัดลอกข้อมูลทั้งหมดของเมนู
      sweetness: sweetness // เพิ่มฟิลด์ระดับความหวาน
    };
  
    addToCart(menuWithSweetness); // ส่ง object ที่สร้างใหม่ไปยังฟังก์ชัน addToCart
  };

  return (
    <div className="transform transition-transform hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden bg-white p-6 shadow-lg flex flex-col items-center">
      {/* ภาพเมนู */}
      <img
        src={menu.menuImageUrl}
        alt={menu.title}
        className="h-40 w-40 object-cover mb-4 rounded-lg"
      />
      
      {/* ชื่อเมนู */}
      <h2 className="text-xl font-semibold mb-2 text-center text-blue-600">
        {menu.title}
      </h2>

      {/* คำอธิบาย */}
      <p className="text-gray-500 text-sm text-center mb-4">{menu.description}</p>
      
      {/* ราคากาแฟ */}
      <div className="text-blue-600 font-semibold text-lg mb-4">
        <span>฿{menu.price}.00</span>
      </div>

      {/* ระดับความหวาน */}
      <div className="mt-1 text-center">
        <span className="text-gray-700 font-medium mb-2">ระดับความหวาน</span>
        <div className="flex justify-center gap-1 mt-2">
          {[0, 50, 100, 150].map((level) => (
            <button
              key={level}
              onClick={() => handleSweetnessChange(level)}
              className={`px-2 py-2 rounded-2xl transition-all duration-200 ${
                sweetness === level
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              } hover:bg-blue-500 hover:text-white`}
            >
              {level}%
            </button>
          ))}
        </div>
      </div>

      {/* ปุ่มเพิ่มลงตะกร้า */}
      <button
        onClick={handleAddToCart}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <ShoppingBasket size={20} />
        เพิ่มลงตะกร้า
      </button>
    </div>
  );
}

export default MenuDetails;
