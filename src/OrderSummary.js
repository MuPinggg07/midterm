import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const { billDetails, discount, total } = location.state || { billDetails: [], discount: 0, total: 0 };

  return (
    <div className="container text-center mt-5" style={{ fontFamily: 'Kanit, sans-serif' }}>
      <div className="card shadow-lg p-4 border-0" style={{ backgroundColor: '#fff5e6' }}>
        <h2 className="fw-bold text-success">สรุปคำสั่งซื้อ</h2>
        <hr />
        <div className="text-start mx-auto" style={{ maxWidth: '400px' }}>
          {billDetails.length > 0 ? (
            billDetails.map((item, index) => (
              <p key={index} className="mb-1">
                <strong>{item.name}</strong> x {item.quantity} = {item.price} บาท
              </p>
            ))
          ) : (
            <p className="text-danger">ไม่มีรายการอาหาร</p>
          )}
        </div>
        {discount > 0 && <p className="text-danger fw-bold">ส่วนลด 10%: -{discount} บาท</p>}
        <h4 className="fw-bold mt-3">ยอดรวมทั้งหมด: {total} บาท</h4>
        <div className="mt-4">
        <button onClick={() => window.location.href = "/"} className="btn btn-primary me-2">
            กลับไปที่เมนู
        </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
