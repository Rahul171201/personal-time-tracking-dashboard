import { useEffect } from "react";
import styles from "./CardComponent.module.css";
import Image from "next/image";

const CardComponent = (props) => {
  useEffect(() => {
    const wrapper = document.getElementById("card-wrapper" + props.id);
    wrapper.style.backgroundColor = props.color;
  }, []);

  return (
    <div className={styles.cardWrapper} id={"card-wrapper" + props.id}>
      <div className={styles.iconWrapper}>
        <Image
          className={styles.icon}
          src={props.src}
          width={100}
          height={100}
        ></Image>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.topSection}>
          <div>{props.title}</div>
          <div>
            <Image
              src="icon-ellipsis.svg"
              alt="ellipses"
              width={35}
              height={10}
            ></Image>
          </div>
        </div>
        <div className={styles.middleSection}>{props.currentHours + "hrs"}</div>
        <div className={styles.bottomSection}>
          Last week - {props.previousHours + "hrs"}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
