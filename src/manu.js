import React, { useState } from 'react';
import './App.css';

// Image imports
import soupImage from './img/1.PNG';
import wagyuImage from './img/2.PNG';
import salmonSushiImage from './img/3.PNG';
import vegetableImage from './img/4.PNG';
import drinkImage from './img/5.PNG';

function Manu() {
  // State to hold quantities
  const [quantities, setQuantities] = useState({
    soup: 0,
    wagyu: 0,
    salmon_sushi: 0,
    vegetable: 0,
    drink: 0
  });

  const prices = {
    soup: 50,
    wagyu: 250,
    salmon_sushi: 80,
    vegetable: 40,
    drink: 30
  };

  // Function to handle quantity change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuantities({
      ...quantities,
      [name]: parseInt(value) || 0
    });
  };

  // Function to calculate total and discount
  const calculateTotal = () => {
    let total = 0;
    let itemCount = 0;
    let billDetails = "";

    Object.keys(quantities).forEach((key) => {
      const itemTotal = prices[key] * quantities[key];
      if (quantities[key] > 0) {
        billDetails += `${key} x ${quantities[key]} = ${itemTotal} บาท<br>`;
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

  // Function to place order and navigate
  const placeOrder = () => {
    const { total, discount, billDetails } = calculateTotal();
    localStorage.setItem("orderDetails", billDetails);
    localStorage.setItem("discountText", discount > 0 ? `ส่วนลด 10%: -${discount} บาท` : "");
    localStorage.setItem("totalText", `ยอดรวมทั้งหมด: ${total} บาท`);

    // Navigate to order-summary page
    window.location.href = "order-summary.html";
  };

  const { total, discount, billDetails } = calculateTotal();

  return (
    <div className="App">
      <header className="App-header">
        <h1>เมนูอาหาร ร้านบุฟเฟ่ต์น้องเชียงใหม่</h1>
      </header>

      <div className="menu-container">
        {['soup', 'wagyu', 'salmon_sushi', 'vegetable', 'drink'].map((item, idx) => (
          <div className="menu-item" key={idx}>
            <img src={require(`./img/${item}.jpg`)} alt={item} />
            <label>{item} - {prices[item]} บาท</label>
            <input
              type="number"
              name={item}
              min="0"
              value={quantities[item]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      <div className="bill-container">
        <h3>เช็คบิล</h3>
        <div dangerouslySetInnerHTML={{ __html: billDetails }} />
        <p style={{ color: 'red' }}>{discount > 0 ? `ส่วนลด 10%: -${discount} บาท` : ''}</p>
        <p><b>ยอดรวมทั้งหมด: {total} บาท</b></p>
        <button onClick={placeOrder}>สั่งอาหาร</button>
      </div>

      <footer className="App-footer">
        <p>© 2025 ร้านบุฟเฟ่ต์น้องเชียงใหม่</p>
        <p>ติดต่อเรา: info@buffetnongs.com</p>
        <p>ที่อยู่: 123 ถนนเชียงใหม่, เชียงใหม่, ประเทศไทย</p>
      </footer>
    </div>
  );
}

export default Manu;
