import Header from "../components/header/header";
import styles from "./main-page.module.scss";
import Slider from "../components/slider/slider";
import {useDispatch, useSelector} from "react-redux";
import {getAnime, getIsLoadingAnime} from "../store/selectors";
import Filters from "../components/filters/filters";
import classNames from "classnames";
import Category from "../components/category/category";
import {useEffect} from "react";
import {fetchAnimeBySeasons, fetchAnimeSeasonsAll} from "../store/actions";
import {getSeasons} from "../store/seasons/selectors";
import {getAnimeBySeasons} from "../store/anime-by-seasons/selectors";
import {getChangeSeason} from "../store/change-season/selectors";

function MainPage() {
  const dispatch = useDispatch();
  const anime = useSelector(getAnime);
  const seasons = useSelector(getSeasons);
  const animeBySeasons = useSelector(getAnimeBySeasons)

  const currentSeason = useSelector(getChangeSeason)
  console.log(anime, seasons, animeBySeasons, currentSeason)

  const animeList = !animeBySeasons ? anime : animeBySeasons
  console.log(animeList)

  useEffect(() => {

    dispatch(fetchAnimeBySeasons(currentSeason));
  }, [currentSeason])

  return (
    <div className={styles.page}>
      <Header currentSeasons={seasons} />

      {animeList.length &&
        <main className={styles.page__index}>
          <div className={styles.page__slider}>
            <Slider items={animeList} />
          </div>
          <div className={classNames("content", "container")}>
            <div className={styles.content__container}>
              <Filters />
              <Category items={animeList} />
            </div>

          </div>
        </main>
      }

    </div>
  );
}

export default MainPage;
