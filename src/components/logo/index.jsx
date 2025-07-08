import classes from "./logo.module.css";

const Logo = ({ variant = "dark" }) => {
  return (
    <a
      href="/"
      className={`${classes["logo"]} ${
        variant === "dark" ? classes["dark"] : classes["light"]
      }`}
    >
      <span className={classes["name"]}>Dr. Bhabananda</span>
      <span className={classes["name"]}>Das</span>
    </a>
  );
};

export default Logo;