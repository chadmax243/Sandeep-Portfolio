import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <a href="#home">
            Sandeep<span>.</span>
          </a>

          <p>
            Computer Science Student & Developer
          </p>
        </div>


        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Sandeep B Naik. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;