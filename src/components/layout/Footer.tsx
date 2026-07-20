export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer id="contact">
      <div className="footer-bottom">
        <div className="footer-copy">© {year} Vpuraina Media. All rights reserved.</div>
      </div>
    </footer>
  );
}