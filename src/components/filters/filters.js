import styles from "./filters.module.scss";
import {Link} from "react-router-dom";
import {FilterTabs} from "../../const";
import classNames from "classnames";
import {useState} from "react";
import ButtonScroll from "../button-scroll/button-scroll";
export default function Filters() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabPrev = () => {};

  const handleTabNext = () => {};

  return (
    <div className={styles.filters__container}>
      <ul className={styles.filters__list}>

          {FilterTabs.map((tab) =>(
            <li className={styles.filters__item} key={tab}>
              <Link className={styles.filters__link} to={"/"}>
                <span>{tab}</span>
              </Link>
            </li>
          ))}

      </ul>
      <ButtonScroll blockName={'filters'} classNameBlock={'prev'} onButtonClick={handleTabPrev} />
      <ButtonScroll blockName={'filters'} classNameBlock={'next'} onButtonClick={handleTabNext} />
    </div>
  );
}
