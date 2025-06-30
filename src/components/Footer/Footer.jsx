import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear} Keeper App</p>
    </footer>
  );
}

export default Footer;
