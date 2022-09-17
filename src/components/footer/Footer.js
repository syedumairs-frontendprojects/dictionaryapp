import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https:github.com/syedumaircodes" target="__blank">
          Syed Umair Ali
        </a>
      </span>
    </footer>
  );
};

export default Footer;
