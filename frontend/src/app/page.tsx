"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [refreshCounter, setRefreshCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshCounter((prevCounter) => (prevCounter + 1) % 2);
    }, 5000); // 5 seconds for testing purposes

    return () => clearInterval(interval);
  }, []);

  //! สร้าง refresh counter เพื่อทำ cache buster(สร้างการแก้ไขแคช หลอกเบราว์เซอร์ให้คิดว่าเป็นทรัพยากรใหม่)
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Image
        src={`http://172.23.3.18/Andon/Rotor_Assy_Line2.png?refresh=${refreshCounter}`}
        alt={`Description of the image`}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
