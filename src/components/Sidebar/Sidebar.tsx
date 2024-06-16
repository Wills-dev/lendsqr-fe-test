import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { dashboardSectionContent } from "@/constants";

const Sidebar = () => {
  return (
    <div className="side__container">
      <div className="inner__container">
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
