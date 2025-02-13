// Footer.js
import React from 'react';
import './Footer.css';  // นำเข้าไฟล์ CSS สำหรับ footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>เกี่ยวกับเรา</h4>
          <p>ร้านบุฟเฟ่ต์น้องเชียงใหม่ ให้บริการอาหารคุณภาพดีในราคาที่คุ้มค่า</p>
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
          <h4>ติดต่อเรา</h4>
          <p>โทรศัพท์: 012-345-6789</p>
          <p>อีเมล: info@buffet.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ร้านบุฟเฟ่ต์น้องเชียงใหม่ | ทุกสิทธิ์สงวนไว้</p>
      </div>
    </footer>
  );
}

export default Footer;
