import CreatedBy from "./CreatedBy";
import Weather from "./Weather";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Footer = () => {

  return( 
  <footer className="footer">
    <CreatedBy/>
    <Weather/>
    <ThemeToggleBtn/>
  </footer>
  )
};

export default Footer;
