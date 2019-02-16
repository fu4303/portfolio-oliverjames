import React from "react";
import profilePic from "../../assets/profile-pic.jpg";
import sprite from "./profile-sprite.png";
import styles from "./Example.module.css";

export default function Demo({ final, steps }) {
  return (
    <div className={`${styles.stage}  ${final && styles.stageFinal}`}>
      <img
        className={`${styles.image} ${steps && styles.steps} ${final &&
          styles.final}`}
        src={final ? sprite : profilePic}
        alt=""
      />
    </div>
  );
}
