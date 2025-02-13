import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Image imports
import soupImage from './img/1.jpg';
import porkBellyImage from './img/2.jpg';
import beefImage from './img/3.jpg';
import vegetableImage from './img/4.jpg';
import sodaImage from './img/5.png';

function Menu() {
  const navigate = useNavigate();

  const [quantities, setQuantities] = useState({
    soup: 0,
    pork_belly: 0,
    beef: 0,
    vegetable: 0,
    soda: 0,
  });

  const prices = {
    soup: 30,
    pork_belly: 50,
    beef: 70,
    vegetable: 40,
    soda: 20,
  };

  const handleChange = (name, value) => {
    setQuantities({
      ...quantities,
      [name]: Math.max(0, value), // ป้องกันค่าติดลบ
    });
  };

  const calculateTotal = () => {
    let total = 0;
    let itemCount = 0;
    let billDetails = [];

    Object.keys(quantities).forEach((key) => {
      const itemTotal = prices[key] * quantities[key];
      if (quantities[key] > 0) {
        billDetails.push({
          name: key.replace('_', ' '),
          quantity: quantities[key],
          price: itemTotal,
        });
        itemCount += quantities[key];
      }
      total += itemTotal;
    });

    let discount = 0;
    if (itemCount >= 5) {
      discount = total * 0.1;
      total -= discount;
    }

    return { total, discount, billDetails };
  };

  const placeOrder = () => {
    const { total, discount, billDetails } = calculateTotal();

    if (billDetails.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'ยังไม่ได้เลือกสินค้า!',
        text: 'กรุณาเลือกสินค้าก่อนทำการสั่งซื้อ',
      });
      return;
    }

    Swal.fire({
      title: 'สั่งซื้อสำเร็จ!',
      text: 'ขอบคุณที่ใช้บริการ ร้านบุฟเฟ่ต์น้องเชียงใหม่',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      navigate('/order-summary', { state: { billDetails, discount, total } });
    });
  };

  const { total, discount, billDetails } = calculateTotal();

  return (
    <div className="container" style={{ marginTop: '20px', paddingBottom: '40px' }}>
      <header className="text-center mb-4">
        <h1 className="fw-bold f">เมนูอาหาร ร้านบุฟเฟ่ต์น้องเชียงใหม่</h1>
      </header>

      <div className="row justify-content-center">
        {['soup', 'pork_belly', 'beef', 'vegetable', 'soda'].map((item, idx) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={idx}>
            <div className="card shadow-sm h-100">
              <img 
                src={
                  item === 'soup' ? soupImage :
                  item === 'pork_belly' ? porkBellyImage :
                  item === 'beef' ? beefImage :
                  item === 'vegetable' ? vegetableImage :
                  sodaImage
                }
                className="card-img-top"
                alt={item}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.replace('_', ' ').charAt(0).toUpperCase() + item.replace('_', ' ').slice(1)}</h5>
                <p className="card-text ">ราคา: {prices[item]} บาท</p>

                {/* ช่องกรอกจำนวน */}
                <input
                  type="number"
                  name={item}
                  min="0"
                  value={quantities[item]}
                  onChange={(e) => handleChange(item, parseInt(e.target.value) || 0)}
                  className="form-control mx-auto mb-2"
                  style={{ width: '80px', textAlign: 'center' }}
                />

                {/* ปุ่มเพิ่มและลบ */}
                <div className="d-flex justify-content-between">
                  <button 
                    className="btn btn-primary mx-1 w-50"
                    onClick={() => handleChange(item, quantities[item] + 1)}
                  >
                    เพิ่ม
                  </button>
                  <button 
                    className="btn btn-danger mx-1 w-50"
                    onClick={() => handleChange(item, quantities[item] - 1)}
                    disabled={quantities[item] === 0} // ป้องกันค่าติดลบ
                  >
                    ลบ
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ส่วนเช็คบิล */}
      <div className="text-center mt-4 p-4 border rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
        <h3>เช็คบิล</h3>
        <ul className="list-unstyled">
          {billDetails.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity} = {item.price} บาท
            </li>
          ))}
        </ul>
        {discount > 0 && <p className="text-danger">ส่วนลด 10%: -{discount} บาท</p>}
        <p className="fw-bold">ยอดรวมทั้งหมด: {total} บาท</p>
        <button 
          onClick={placeOrder} 
          className="btn btn-success mt-2"
        >
          ยืนยันการสั่งอาหาร
        </button>
      </div>

    </div>
  );
}

export default Menu;
