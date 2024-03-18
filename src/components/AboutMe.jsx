import React from "react";
import Profile from "../assets/picture.jpg";

function AboutMe() {
  return (
    <div className="mt-3">
      <center className="mb-4">
        <img
          src={Profile}
          style={{ borderRadius: "50%", width: "80%", top: "-150px" }}
        />
      </center>
      <h1 className="fw-bold" style={{ color: "navy", fontSize: "40px"}}>
        สราวลี
      </h1>
      <h1 className="fw-bold" style={{ color: "navy", fontSize: "40px"}}>
        ตั้งจิตต์ธรรม
      </h1>
      <p>
        กำลังมองหาประสบการในการออกแบบและพัฒนาซอฟต์แวร์
        รวมถึงการปฏิบัติงานเป็นทีมและมีความพร้อมที่จะศึกษาหาความรู้ใหม่ ๆ
        ที่เกิดขึ้นในด้านไอทีและนำไปปรับใช้ในการทำงานต่อไป
      </p>
    </div>
  );
}

export default AboutMe;
