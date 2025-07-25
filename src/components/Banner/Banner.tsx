import styles from "./Banner.module.scss";
import backgroundLight from "../../assets/images/bg-mobile-light.jpg";
import backgroundDark from "../../assets/images/bg-mobile-dark.jpg";

type Props = {
  theme: "light" | "dark";
};

function Banner({ theme }: Props) {
  const backgroundImage = theme === "light" ? backgroundLight : backgroundDark;
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
}

export default Banner;
