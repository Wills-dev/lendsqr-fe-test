import { useContext } from "react";
import "./Header.scss";
import { UserContext } from "@/context/UserState";

const Header = () => {
  const { isSideBarActive, setIsSideBarActive } = useContext(UserContext);
  return (
    <div className="header__container">
      <div className="header__left__container">
        <div className="header__logo__wrapper">
          <img src="/logo.svg" alt="logo" />
          {!isSideBarActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=""
              onClick={() => setIsSideBarActive(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=""
              onClick={() => setIsSideBarActive(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <form className="header__search__wrapper">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for anything"
          />
          <button type="submit">
            <img src="/public/assets/search.svg" alt="search" />
          </button>
        </form>
      </div>
      <div className="header__right__container">
        <a href="/" target="_blank" rel="noopener noreferrer">
          Docs
        </a>
        <img src="/public/assets/bell.svg" alt="bell" className="bell" />
        <div className="header__profile__wrapper">
          <img src="/assets/avatar.svg" alt="avatar" className="profile__pic" />
          <p>lorem</p>
          <img
            src="/assets/dropdown.svg"
            alt="bell"
            className="profile__dropdown__icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
