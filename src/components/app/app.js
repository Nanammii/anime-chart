import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../../pages/main-page";
import LoginPage from "../../pages/login-page/login-page";
import {useSelector} from "react-redux";
import {getIsLoadingAnime} from "../../store/selectors";
import Spinner from "../spinner/spinner";
import FilmPage from "../../pages/film-page/film-page";
import {getLoadingSeasons} from "../../store/seasons/selectors";

function App() {
  const isAnimeDataLoading = useSelector(getIsLoadingAnime);
  const isLoadingSeasons = useSelector(getLoadingSeasons);
  console.log(isAnimeDataLoading)

  if (isAnimeDataLoading && isLoadingSeasons) {
    return (
      <Spinner />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={`/anime/:animeId`} element={<FilmPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
