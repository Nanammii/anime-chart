import styles from "./slider.module.scss";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {getAnime} from "../../store/selectors";
import React, {useState} from "react";
import ButtonScroll from "../button-scroll/button-scroll";

export default function Slider({items}) {

  const [currentIndex, setCurrentIndex] = useState(2);
  console.log(currentIndex)

  const handleButtonPrev = () => {
    let box = document.querySelector(`.${styles.slider__list}`);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    box.scrollLeft = box.scrollLeft - 350
  }

  const handleButtonNext = () => {
    let box = document.querySelector(`.${styles.slider__list}`);
    box.scrollLeft = box.scrollLeft + 350
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  }

  return (
    <section className={styles.slider}>
      <ul className={styles.slider__list}>
        {items.map((item, index) => (
          <li className={styles.slider__item} key={index}>
            <img
              key={index}
              className={classNames(styles.slider__image, {[styles.slider__image__large]: index === currentIndex})}
              src={item.images.jpg.large_image_url}
              alt={item.title_english}
            />
          </li>
        ))}
      </ul>
      <ButtonScroll classNameBlock={'prev'} onButtonClick={handleButtonPrev} />
      <ButtonScroll classNameBlock={'next'} onButtonClick={handleButtonNext} />
    </section>
  );
}
