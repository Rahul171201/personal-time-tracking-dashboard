import { useEffect } from "react";
import styles from "./CardComponent.module.css";

const CardComponent = (props) => {
  useEffect(() => {
    const wrapper = document.getElementById("card-wrapper" + props.id);
    wrapper.style.backgroundColor = props.color;
  }, []);

  return (
    <div className={styles.cardWrapper} id={"card-wrapper" + props.id}>
      ok
    </div>
  );
};

export default CardComponent;
