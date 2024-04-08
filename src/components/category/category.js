import styles from "./category.module.scss";
import {useSelector} from "react-redux";
import {getAnime} from "../../store/selectors";
import AnimeCard from "../anime-card/anime-card";

export default function Category({items}) {

  return (
    <div className={styles.category}>
      <h2 className={styles.category__title}>TV</h2>
      <div className={styles.category__films}>
        <div className={styles.films__list}>
          {items.map((item) => (
            <AnimeCard item={item} key={item.mal_id} />
          ))}
        </div>
      </div>
    </div>
  );
}
