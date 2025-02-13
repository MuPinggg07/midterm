import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // ต้องติดตั้ง react-router-dom
import Menu from './manu';

// รูปภาพที่ต้องการใช้
import foodImage1 from './img/100.jpg'; 
import foodImage2 from './img/500.jpg'; 
import foodImage3 from './img/5951.jpg'; 
import foodImage4 from './img/beerf1.jpg';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1>ร้านบุฟเฟ่ต์น้องเชียงใหม่</h1>
      </header>
      <Router>
      <div>
      {/* Main Content Section */}
      <div className="food-container">  
        <div className="food-items">
          {/* ใช้ <a> tag สำหรับการลิ้งค์ไปยังหน้า Home */}
          <div className="food-box">
            <a href="/midterm">Home</a>
          </div>
          {/* ใช้ <a> tag สำหรับการลิ้งค์ไปยังหน้า Menu */}
          <div className="food-box">
            <a href="/menu">เมนูอาหาร</a>
          </div>
        </div>
      </div>

            {/* Define Routes */}
            <Routes>
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
    
      <br></br>
      {/* Carousel Section */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
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
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Footer Section */}
      <footer className="App-footer">
        <p>© 2025 ร้านบุฟเฟ่ต์น้องเชียงใหม่</p>
        <p>ติดต่อเรา: info@buffetnongs.com</p>
        <p>ที่อยู่: 123 ถนนเชียงใหม่, เชียงใหม่, ประเทศไทย</p>
      </footer>
    </div>
  );
}

export default App;
