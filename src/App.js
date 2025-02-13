import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Menu from './Menu';
import OrderSummary from './OrderSummary';
import Footer from './Footer';
import './App.css';

// นำเข้ารูปภาพที่ใช้ใน Carousel
import foodImage1 from './img/100.jpg'; 
import foodImage2 from './img/500.jpg'; 
import foodImage3 from './img/5951.jpg'; 
import foodImage4 from './img/beerf1.jpg';

// Image imports
import soupImage from './img/1.jpg';
import porkBellyImage from './img/2.jpg';
import beefImage from './img/3.jpg';
import vegetableImage from './img/4.jpg';
import sodaImage from './img/5.png';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
      <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700&display=swap" rel="stylesheet"></link>
        <h1>
          <p >ร้านบุฟเฟ่ต์น้องเชียงใหม่</p>
        </h1>
      </header>
        <div className="content">
          <Navigation />
          <MainContent />
        </div>
      </div>

      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>เกี่ยวกับเรา</h4>
          <p >ร้านบุฟเฟ่ต์น้องเชียงใหม่ ให้บริการอาหารคุณภาพดีในราคาที่คุ้มค่า</p>
        </div>
        <div className="footer-section">
          <h4>ติดตามเรา</h4>
          <p>ติดตามเราในโซเชียลมีเดีย</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4 >ติดต่อเรา</h4>
          <p >โทรศัพท์: 0-999-9999</p>
          <p >อีเมล: stu66309010064@lannapoly.ac.th</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p >&copy; 2025 ร้านบุฟเฟ่ต์น้องเชียงใหม่ | ทุกสิทธิ์สงวนไว้</p>
      </div>
    </footer>
    </Router>
  );
}

// 🔹 เมนูนำทาง
function Navigation() {
  return (
    <div className="food-container">
    <div className="food-items">
      <Link to="/" className="custom-button ">Home</Link>
      <Link to="/menu" className="custom-button ">เมนูอาหาร</Link>
    </div>
  </div>  
  );
}

// 🔹 เนื้อหาหลัก
function MainContent() {
  const location = useLocation();
  const hideCarouselAndProducts = location.pathname === "/menu" || location.pathname === "/order-summary";

  return (
    <>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>

      <br />

      {/* 🎡 แสดง Carousel เฉพาะเมื่อไม่ใช่หน้าเมนูหรือ Order Summary */}
      {!hideCarouselAndProducts && <Carousel />}

      <br />

      {/* 🛒 แสดงสินค้าแนะนำเฉพาะเมื่อไม่ใช่หน้าเมนูหรือ Order Summary */}
      {!hideCarouselAndProducts && <RecommendedProducts />}
    </>
  );
}

// 🔹 ส่วน Carousel รูปภาพ
function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={foodImage1} className="d-block w-100" alt="Food Image 1" />
        </div>
        <div className="carousel-item">
          <img src={foodImage2} className="d-block w-100" alt="Food Image 2" />
        </div>
        <div className="carousel-item">
          <img src={foodImage3} className="d-block w-100" alt="Food Image 3" />
        </div>
        <div className="carousel-item">
          <img src={foodImage4} className="d-block w-100" alt="Food Image 4" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

// 🔹 ส่วนสินค้าแนะนำ
function RecommendedProducts() {
  return (
    <>
      <h2 className="card-container">สินค้าแนะนำ</h2>
      <div className="food-cards">
        <div className="card-container">
          <ProductCard img={soupImage} title="ซุป" desc="ซุปหอมๆ ร้อนๆ พร้อมเสิร์ฟ" />
          <ProductCard img={porkBellyImage} title="หมูย่าง" desc="หมูย่างกรอบนอกนุ่มใน" />
          <ProductCard img={beefImage} title="เนื้อวัว" desc="เนื้อวัวคุณภาพดี รสชาติเข้มข้น" />
          <ProductCard img={vegetableImage} title="ผักสด" desc="ผักสดใหม่ กรอบอร่อย" />
          <ProductCard img={sodaImage} title="น้ำอัดลม" desc="น้ำอัดลมเย็นๆ สดชื่น" />
        </div>
      </div>
    </>
  );
}

// 🔹 การ์ดสินค้าแต่ละตัว
function ProductCard({ img, title, desc }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <Link to="/menu">
          <button className="btn btn-primary">สั่งสินค้า</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
