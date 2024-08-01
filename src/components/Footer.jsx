import React from 'react'
import '../components/css/footer.css'

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h5>Company</h5>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Get Help</h5>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Online Shop</h5>
          <ul>
            <li><a href="#">Shop All Products</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Follow Us</h5>
          <ul className='lg:w-1/3 grid grid-cols-2 grid-rows-2 gap-y-10 justify-center mt-7'>
            <li><a href="#" className="social-facebook"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#" className="social-twitter"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#" className="social-instagram"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#" className="social-youtube"><i className="fa fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
      <p className="copyright">&copy; Deep Blue, Team Techno. All rights reserved.</p>
    </div>
  )
}

export default Footer
