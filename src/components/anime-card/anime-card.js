import styles from "./anime-card.module.scss";
import {Link} from "react-router-dom";
import {getRefineDate} from "../../utils/anime-card";

export default function AnimeCard({item}) {
  const {mal_id, images, title, years, season, aired, synopsis, genres} = item;
  const {jpg} = images;
  const dateFrom = getRefineDate(aired.from);


  return (
    <article className={styles.animeCard}>
      <Link className={styles.imageWrapper} to={`/film/${mal_id}`}>
        <img className={styles.animeCard__image} src={jpg.large_image_url} alt={item.title_english}/>
      </Link>
      <div className={styles.animeCard__info}>
        <div className={styles.info__wrapper}>
          <h2 className={styles.animeCard__name}>{title}</h2>
          <span className={styles.animeCard__date}>{dateFrom}</span>
          <p className={styles.animeCard__description}>{synopsis}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.animeCard__genres}>
            {genres.map((item) => (
            <span key={item.name} className={styles.animeCard__genre}>{item.name}</span>
          ))}
          </div>
        </div>
      </div>
    </article>
  );
}

