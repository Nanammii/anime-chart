import Header from "../components/header/header";
import styles from "./main-page.module.scss";
import Slider from "../components/slider/slider";
import {useDispatch, useSelector} from "react-redux";
import {getAnime, getIsLoadingAnime} from "../store/selectors";
import Filters from "../components/filters/filters";
import classNames from "classnames";
import Category from "../components/category/category";
import {useEffect} from "react";
import {fetchAnimeSeasonsAll} from "../store/actions";
import {getSeasons} from "../store/seasons/selectors";

function MainPage() {
  const dispatch = useDispatch();
  const anime = useSelector(getAnime);
  console.log(anime);


  useEffect(() => {
    dispatch(fetchAnimeSeasonsAll());
  }, [dispatch])

  return (
    <div className={styles.page}>
      <Header />

      {anime.length &&
        <main className={styles.page__index}>
          <div className={styles.page__slider}>
            <Slider items={anime} />
          </div>
          <div className={classNames("content", "container")}>
            <div className={styles.content__container}>
              <Filters />
              <Category items={anime} />
            </div>

          </div>
        </main>
      }

    </div>
  );
}

export default MainPage;
