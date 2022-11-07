import bodyCss from "./body.module.css";
import ironhackLogo from "../../images/ironhack-logo-xs.png";
import menuTop from "../../images/menu-top-xs.png";

function Body() {
  return (
    <div className={bodyCss.body}>
      <div className={bodyCss.superior}>
        <img src={ironhackLogo} alt="ironhackLogo" />
        <img src={menuTop} alt="menuTop" />
      </div>

      <div className={bodyCss.text}>
        <h1 className={bodyCss.title}>Say Hello to ReactJS</h1>
        <p className={bodyCss.paragrafo}>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
      </div>

      <button className={bodyCss.btn}>Awesome!</button>
    </div>
  );
}

export default Body;
