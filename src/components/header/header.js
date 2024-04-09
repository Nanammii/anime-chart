import {Link} from "react-router-dom";
import styles from "./header.module.scss";
import classNames from "classnames";
import {SortingLanguage} from "../../const";
import Sorting from "../sorting/sorting";
import {useState} from "react";
import {useSelector} from "react-redux";
import {getSeasons} from "../../store/seasons/selectors";

export default function Header() {
  const [selectedSorting, setSelectedSorting] = useState(SortingLanguage.English);

  const currentSeason = useSelector(getSeasons);
  const {year, seasons} = currentSeason;
  console.log(currentSeason)

  return (
    <header className="header">
      <div className="container">
        <div className={styles.wrapper}>
          <Link className={styles.link} to={"/"}>
            <img className={styles.image} src="../img/logo.svg" alt="Logo site" />
          </Link>
          <nav className={classNames(styles.navigation, styles.userNav)}>
            <ul className={classNames(styles.navigation__list, styles.navigation__list__menu)}>
              <li>
                <Link className={styles.navigation__link} to={"/"}>Home</Link>
              </li>
              <li>
                <Link className={styles.navigation__link} to={"/series"}>Series</Link>
              </li>
              <li>
                <Link className={styles.navigation__link} to={"/movies"}>Movies</Link>
              </li>
              <li>
                <Link className={styles.navigation__link} to={"/top"}>Top</Link>
              </li>
            </ul>
            <ul className={classNames(styles.navigation__list, styles.navigation__list__seasons)}>
              {seasons.map((item) => (
                <li key={item}>
                  <Link className={styles.navigation__link} to={"/"}>
                    <span className={styles.seasonName}>{item}</span>
                    <span className={styles.seasonYear}>{year}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={classNames(styles.navigation__list, styles.navigation__list__user)}>
              <li>
                <Sorting selectedSorting={selectedSorting} onTypeClick={(sort) => setSelectedSorting(sort)} />
              </li>
              <li>
                <svg className={styles.navigation__searchIcon} width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_213_999)">
                    <path d="M18.125 18.625L13.125 13.625M8.125 16.125C7.14009 16.125 6.16482 15.931 5.25487 15.5541C4.34493 15.1772 3.51814 14.6247 2.8217 13.9283C2.12526 13.2319 1.57281 12.4051 1.1959 11.4951C0.818993 10.5852 0.625 9.60991 0.625 8.625C0.625 7.64009 0.818993 6.66482 1.1959 5.75487C1.57281 4.84493 2.12526 4.01814 2.8217 3.3217C3.51814 2.62526 4.34493 2.07281 5.25487 1.6959C6.16482 1.31899 7.14009 1.125 8.125 1.125C10.1141 1.125 12.0218 1.91518 13.4283 3.3217C14.8348 4.72822 15.625 6.63588 15.625 8.625C15.625 10.6141 14.8348 12.5218 13.4283 13.9283C12.0218 15.3348 10.1141 16.125 8.125 16.125Z" stroke="#DDDDDD" strokeWidth="1.25"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_213_999">
                      <rect width="18.75" height="18.75" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
                <input className={styles.navigation__input} type="text"/>
              </li>
              <li>
                <Link className={styles.navigation__button} to={"/login"}>
                  <span>Sign in</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
