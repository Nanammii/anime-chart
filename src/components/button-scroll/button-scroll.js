import classNames from "classnames";
import styles from "./button-scroll.module.scss"

export default function ButtonScroll({classNameBlock, blockName, onButtonClick}) {
  return (
    <button
      className={classNames(
        styles.button,
        classNameBlock === 'prev' ? styles.button__prev : styles.button__next,
        blockName === 'filters' ? styles.button__filters : ''
        )}
      type="button"
      onClick={onButtonClick}
    />
  );
}
