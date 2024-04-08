import styles from "./spinner.module.scss";

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <span className={styles.text}>Loading</span>
    </div>
  );
}
