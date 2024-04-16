import React from 'react'

const CardFooter = () => {
  return (
    <div className='bg bg-success'>
    <div className="border border-dark">
        <footer className="mainfooter" role="contentinfo" >
  <div className="footer-middle">
  <div className="container"> 
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <div className="footer-pad">
          <h4>About Us</h4>
          <ul className="list-unstyled">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Values</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="footer-pad">
          <h4>Services</h4>
          <ul className="list-unstyled">
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Graphic Design</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">SEO</a></li>
            <li><a href="#">Content Creation</a></li>
            <li><a href="#">Consulting</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</footer>
    </div>
    </div>
  );
};

export default CardFooter