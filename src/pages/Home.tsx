import { useMemo, useState } from "react";
import MenuDetails from "../components/Menu/MenuDetails";
import CartDetail from "../components/Menu/CartDetail";
import { menus } from "../data/MenuData";
import Menu from "../types/Menu";
import CartItem from "../types/CartItem";

function Home() {
  // สถานะสำหรับเก็บรายการสินค้าในตะกร้า
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (menu: Menu) => {
    const existingItem = cart.find(
      (item) => item.id === menu.id && item.sweetness === menu.sweetness
    );
    if (existingItem) {
      // ถ้าสินค้าอยู่ในตะกร้าแล้ว เพิ่มจำนวนสินค้า
      setCart(
        cart.map((item) =>
          item.id === menu.id && item.sweetness === menu.sweetness
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // ถ้าไม่มีสินค้าในตะกร้า เพิ่มสินค้าใหม่ลงตะกร้า
      setCart([...cart, { ...menu, quantity: 1 }]);
    }
  };

  // ฟังก์ชันสำหรับอัปเดตจำนวนสินค้า
  const updateQuantity = (id: number, sweetness: number, change: number) => {
    setCart(
      cart.map((item) => {
        if (item.id === id && item.sweetness === sweetness) {
          const newQuantity = item.quantity + change;
          // หากจำนวนลดลงเหลือ 0 หรือน้อยกว่า ให้ตั้งค่าเป็น 1 แทนที่จะลบออก
          return newQuantity < 1 ? { ...item, quantity: 1 } : { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // ฟังก์ชันสำหรับลบสินค้าออกจากตะกร้า
  const removeFromCart = (id: number, sweetness: number) => {
    setCart(cart.filter((item) => item.id !== id || item.sweetness !== sweetness));
  };

  // คำนวณราคารวมในตะกร้า
  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <div className="flex m-8 flex-col sm:flex-row">
      {/* แสดงตะกร้าสินค้า */}
        <div className=" sm:w-1/4 mb-4 p-4 bg-white shadow-lg rounded-lg">
        <div className="grid sm:grid-cols-1">
          <h2 className="text-2xl font-semibold mb-4">ตะกร้าของคุณ</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">ตะกร้าของคุณว่างเปล่า</p>
          ) : (
            <div className="flex flex-col space-y-4">
              {cart.map((cartItem) => (
                <CartDetail
                  key={`${cartItem.id}-${cartItem.sweetness}`}
                  cartItem={cartItem}
                  updateQuantity={(menuId, sweetness, change) => updateQuantity(menuId, sweetness, change)}
                  removeFromCart={(menuId, sweetness) => removeFromCart(menuId, sweetness)}
                />
              ))}
            </div>

          )}

          {/* แสดงราคารวม */}
          <div className="mt-4 text-right">
            <h3 className="text-lg font-semibold">ราคารวม: ฿{totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      </div>
      {/* แสดงเมนูกาแฟ */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {menus.map((menu) => (
          <MenuDetails key={menu.id} menu={menu} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;
