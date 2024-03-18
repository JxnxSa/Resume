import React from "react";
import Bar from "./Bar";

function Experience() {
  return (
    <div className="mt-3">
      <h2 style={{ color: "navy" }}>ประสบการณ์</h2>
      <Bar />
      <div className="row mb-2">
        <div className="col-3">
          <div className="fw-bold">2565-2566</div>
        </div>
        <div className="col">
          <div className="fw-bold">ผู้ช่วยแลป</div>
          <div>ผู้ช่วยแลปรายวิชาทักษะการเขียนโประแกรมคอมพิวเตอร์ 1</div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="fw-bold">2566</div>
        </div>
        <div className="col">
          <div className="fw-bold">อบรมชิงทุนการศึกษาจากบริษัท Prior Solution</div>
          <div>
            อบรมเกี่ยวกับการพัฒนา API แบบ Hexagonal Architecture ด้วยภาษา Go
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
