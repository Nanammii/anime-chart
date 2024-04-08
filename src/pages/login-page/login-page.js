import stylesMain from "../main-page.module.scss";
import styles from "./login-page.module.scss";
import Header from "../../components/header/header";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import classNames from "classnames";

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]+$/;
function LoginPage() {
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();

  const [isActiveInput, setIsActiveInput] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  // if (authorizationStatus === AuthorizationStatus.Auth) {
  //   return (<Navigate to={AppRoute.Root} />);
  // }

  const handlePasswordChange = () => {
    setIsActiveInput(true);
    setIsPasswordValid(PASSWORD_REGEX.test(passwordRef.current?.value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();


  };

  return (
    <div className={stylesMain.page}>
      <Header />
      <main className={stylesMain.page__login}>
        <div className={classNames(styles.wrapper, "container")}>
          <section className={classNames(styles.login)}>
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onInput={handlePasswordChange}
                  required
                />
                {isActiveInput && !isPasswordValid &&
                  <p>Password is incorrect, it must consist of the one letter and a number.</p>}
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={!isPasswordValid}
              >
                Sign in
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
