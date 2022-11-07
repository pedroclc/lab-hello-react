import footerCss from "./footer.module.css";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";

function Footer() {
  return (
    <div>
      <div className={footerCss.footer}>
        <div>
          <img src={icon1} alt="icon1" />
          <h2 className={footerCss.titles}>Declarative</h2>
          <p>React makes ir painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} alt="icon2" />
          <h2 className={footerCss.titles}>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt="icon3" />
          <h2 className={footerCss.titles}>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div>
          <img src={icon4} alt="icon4" />
          <h2 className={footerCss.titles}>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
