import styles from "./Banner.module.scss";
import backgroundLightMobile from "../../assets/images/bg-mobile-light.jpg";
import backgroundDarkMobile from "../../assets/images/bg-mobile-dark.jpg";
import backgroundLightTablet from "../../assets/images/bg-desktop-light.jpg";
import backgroundDarkTablet from "../../assets/images/bg-desktop-dark.jpg";
import { useEffect, useState } from "react";

type Props = {
  theme: "light" | "dark";
};

function Banner({ theme }: Props) {
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);

  useEffect(() => {
    function handleResize() {
      setIsTablet(window.innerWidth >= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let backgroundImage = backgroundLightMobile;
  if (theme === "light") {
    backgroundImage = isTablet ? backgroundLightTablet : backgroundLightMobile;
  } else {
    backgroundImage = isTablet ? backgroundDarkTablet : backgroundDarkMobile;
  }

  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
}

export default Banner;
