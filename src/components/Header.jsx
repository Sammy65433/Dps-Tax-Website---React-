function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <div className="logo-wrap">
          <img
            src="/DPS-LOGO1.png"
            alt="DPS Professional Tax Services logo"
            className="site-logo"
          />
          <div className="logo-text">
            DPS Professional Tax Services
            <span>Maplewood, NJ · IRS e-file Authorized</span>
          </div>
        </div>

        <nav className="links">
          <a href="#services">Services</a>
          <a href="#payment">Make a Payment</a>
          <a href="#contact">Contact</a>
          <a href="#hours">Office Hours</a>
          <a href="#realty">Real Estate Partner</a>
          <a href="#faq">FAQ</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#booking" className="nav-cta">Book Now</a>
          <a href="tel:+19735551234" className="nav-call">Call Now</a>

        </nav>


      </div>
    </header>
  );
}

export default Header;
