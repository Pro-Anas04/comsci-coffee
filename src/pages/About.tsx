import { Mail, Phone, MapPin } from "lucide-react"; // สำหรับใช้ไอคอน

function About() {
  return (
    <div className="m-10 min-h-screen flex flex-col ">
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          {/* รูปโปรไฟล์ */}
          <div className="flex justify-center mb-4">
            <img
              src="./images/anas.png" 
              alt="profile"
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>
  
          {/* ชื่อ */}
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
            Anas Yusoh
          </h2>

          {/* อีเมล */}
          <div className="flex items-center justify-center mb-2">
            <Mail className="w-5 h-5 mr-2 text-gray-500" />
            <span className="text-gray-700">654234022@parichat.skru.ac.th</span>
          </div>

          {/* เบอร์โทรศัพท์ */}
          <div className="flex items-center justify-center mb-2">
            <Phone className="w-5 h-5 mr-2 text-gray-500" />
            <span className="text-gray-700">063-613-1495</span>
          </div>

          {/* ที่อยู่ */}
          <div className="flex items-center justify-center">
            <MapPin className="w-5 h-5 mr-2 text-gray-500" />
            <span className="text-gray-700">
              66/23 หมู่ที่ 1 ตำบล เขารูปช้าง อำเภอ เมือง จังหวัด นราธิวาส 90000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About