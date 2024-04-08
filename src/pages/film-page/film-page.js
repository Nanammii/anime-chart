import {useParams} from "react-router-dom";
import Header from "../../components/header/header";

function FilmPage() {
  const {filmId} = useParams();

  return (
    <div>
      <Header />
      <main>Film</main>
    </div>
  );
}

export default FilmPage;
