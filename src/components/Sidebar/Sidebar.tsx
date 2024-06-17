import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { dashboardSectionContent } from "@/constants";
import { UserContext } from "@/context/UserState";
import { useContext } from "react";

const Sidebar = () => {
  const { isSideBarActive, setIsSideBarActive } = useContext(UserContext);
  return (
    <div className={`side__container  ${isSideBarActive && "activateMenu"}`}>
      <div className="inner__container">
        <div className="header__logo__wrapper">
          <img src="/logo.svg" alt="logo" />
          {isSideBarActive && (
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
        <div className="dashboard__organization__content">
          <img src="/assets/icons/briefcase 1.svg" alt="brief-case" />
          <h6>Switch Organization</h6>
          <img src="/assets/icons/arrowdown.svg" alt="" />
        </div>
        <div className="dashboard__heading">
          <img src="/assets/icons/home 1.svg" alt="brief-case" />
          <h6>Dashboard</h6>
        </div>
        {dashboardSectionContent?.map((section, index) => (
          <div className="dashboard__section__wrapper" key={index}>
            <h5>{section?.sectionName}</h5>
            <div className="dashboard__section">
              {section?.linkContainer?.map((link, index) => (
                <NavLink
                  to={link?.link}
                  className="dashboard__link__wrapper"
                  key={index}
                  onClick={() => setIsSideBarActive(false)}
                >
                  <img src={link?.iconUrl} alt="brief-case" />
                  <h6>{link?.title}</h6>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
