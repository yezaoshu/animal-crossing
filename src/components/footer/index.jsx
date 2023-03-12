import FooterGreenery from "../../assests/img/footer-greenery.png";
import FooterGrass from "../../assests/img/footer-grass.png";
import "./index.css";

const Footer = () => {
  return (
    <div className="flex-box justify-between fixed bottom w-full">
      <div>
        <img src={FooterGreenery} alt="footer-tree" className="footer-tree" />
        <img src={FooterGrass} alt="footer-tree" className="footer-grass" />
      </div>
      <span>右边</span>
    </div>
  );
};

export default Footer;
