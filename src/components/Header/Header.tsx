import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__left__container">
        <div className="header__logo__wrapper">
          <img src="/logo.svg" alt="logo" />
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
