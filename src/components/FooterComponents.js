import React from "react";
import style from "./Footer.module.css";
function FooterComponents() {
  return (
    <div className={style.footer}>
      <div className={style.divZaTekst}>
        <h4>
          <strong>Kontakt: 061 11 123</strong>
        </h4>
        <h4>
          <strong>© Online pijaca</strong>
        </h4>
        <h4>
          <strong>email: jasmina.turku00@gmail.com</strong>
        </h4>
      </div>
    </div>
  );
}
export default FooterComponents;
