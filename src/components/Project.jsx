import React from "react";
import Bar from "./Bar";

function Project() {
  return (
    <div className="mt-3">
      <h2 style={{ color: "navy" }}>โปรเจค</h2>
      <Bar />
      <div className="row">
        <div className="col-2">
          <div className="fw-bold">2565</div>
        </div>
        <div className="col">
          <div className="fw-bold">แอพเลือกเมนูอาหาร</div>
          <div>โปรเจครายวิชาการพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่</div>
          <ul>
            <li>
              พัฒนาและออกแบบแอพพลิเคชันมือถือเกี่ยวกับการเลือกเมนูอาหารด้วย
              Flutter
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="fw-bold">2565</div>
        </div>
        <div className="col">
          <div className="fw-bold">โปรแกรมรับ - ส่งไฟล์แบบ Zero/Copy และ Multi-Thread</div>
          <div>โปรเจครายวิชาระบบปฏิบัติการ</div>
          <ul>
            <li>จัดการการส่งข้อมูลแบบ Zero-Copy ด้วยไลบรารี่ NIO</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="fw-bold">2564</div>
        </div>
        <div className="col">
          <div className="fw-bold">เว็บเพื่อจัดการฐานข้อมูลร้านหนังสือ</div>
          <div>โปรเจครายวิชาระบบฐานข้อมูล</div>
          <ul>
            <li>พัฒนาและออกแบบเว็บเพื่อจัดการฐานข้อมูล MySQL ด้วยภาษา PHP</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="fw-bold">2564</div>
        </div>
        <div className="col">
          <div className="fw-bold">โปรแกรมวาดกราฟและหา Minimum Spanning Tree</div>
          <div>โปรเจครายวิชาโครงสร้างเชิงการคำนวณแบบไม่ต่อเนื่อง</div>
          <ul>
            <li>พัฒนาและออกแบบโปรแกรมวาดกราฟด้วยไลบรารี่ BGI ในภาษา C++</li>
            <li>คำนวณหา Minimum Spanning Tree ด้วยอัลกอริทึมของพริม</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
