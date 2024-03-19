import React from "react";
import Bar from "./Bar";

function Education() {
  return (
    <div className="mt-3">
      <h2 style={{ color: "navy" }}>ประวัติการศึกษา</h2>
      <Bar/>
      <div className="row mb-2">
        <div className="col-3">
          <div className="fw-bold">2563 - ปัจจุบัน</div>
        </div>
        <div className="col">
          <div className="fw-bold">มหาวิทยาลัยศิลปากร</div>
          <div>วิทยาศาสตร์บัณฑิต</div>
          <div>สาขาวิชาวิทยาการคอมพิวเตอร์</div>
          <div >GPA - 3.40  ( 7 ภาคการศึกษา )</div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="fw-bold">2561 - 2563</div>
        </div>
        <div className="col">
          <div className="fw-bold">โรงเรียนกาญจนาภิเษกวิทยาลัย สุพรรณบุรี</div>
          <div>มัธยมศึกษาตอนปลาย</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
