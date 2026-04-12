import "./footer.css"

function Footer(){
    return(
      <footer className="main-footer">
  <div className="footer-container">
    <div className="footer-section about">
      <h2 className="footer-logo">MyBrand</h2>
      <p>Building digital experiences with modern code and clean design.</p>
    </div>

    <div className="footer-section links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </div>

    <div className="footer-section social">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="#">FB</a>
        <a href="#">TW</a>
        <a href="#">IG</a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2026 Testing | All Rights Reserved</p>
  </div>
</footer>
    )
}

export default Footer