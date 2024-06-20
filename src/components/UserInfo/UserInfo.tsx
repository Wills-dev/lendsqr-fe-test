import { useState } from "react";

import { Spin } from "antd";

import { UserData } from "../../types";
import { userNavLink } from "../../constants";

interface Props {
  userInfo: UserData;
}

const UserInfo = ({ userInfo }: Props) => {
  const [currentLink, setCurrentLink] = useState("General Details");
  return (
    <>
      <div className="user__upper__section">
        <div className="user__summary">
          <img src="/public/assets/icons/avatar.svg" alt="" />
          <div className="user__name__ctn">
            <h6>{userInfo?.full_name}</h6>
            <p>LSQF{userInfo?.id}</p>
          </div>
          <div className="user__rating__ctn">
            <p>User’s Tier</p>
            <div className="user__rating">
              <img
                src="/public/assets/icons/np_star_1208084_000000 1.svg"
                alt="star"
              />
              <img
                src="/public/assets/icons//np_star_1171151_000000 1.svg"
                alt="star"
              />
              <img
                src="/public/assets/icons//np_star_1171151_000000 1.svg"
                alt="star"
              />
            </div>
          </div>
          <div className="account__details__ctn">
            <h6>{userInfo?.amount}</h6>
            <p>
              {userInfo?.bank_details?.account_number}/
              {userInfo?.bank_details?.bank_name} Bank
            </p>
          </div>
        </div>
        <div className="user__navlink__ctn">
          {userNavLink.map((link, index) => (
            <h5
              className={`${link === currentLink && "active"}`}
              key={index}
              onClick={() => setCurrentLink(link)}
            >
              {link}
            </h5>
          ))}
        </div>
      </div>
      <div className="user__lower__section">
        <div className="user__section__ctn">
          <h5>Personal Information</h5>
          <div className="user__section__wrapper">
            <div className="user__section">
              <div className="user__section__content">
                <h6>full Name</h6>
                <p>{userInfo?.full_name}</p>
              </div>
              <div className="user__section__content">
                <h6>Marital status</h6>
                <p>{userInfo?.marital_status}</p>
              </div>
            </div>
            <div className="user__section">
              <div className="user__section__content">
                <h6>Phone Number </h6>
                <p>{userInfo?.phone_number}</p>
              </div>
              <div className="user__section__content">
                <h6>Children</h6>
                <p>{userInfo?.children}</p>
              </div>
            </div>
            <div className="user__section">
              {" "}
              <div className="user__section__content">
                <h6>Email Address</h6>
                <p>{userInfo?.email}</p>
              </div>
              <div className="user__section__content">
                <h6>Type of residence</h6>
                <p>{userInfo?.type_of_resident}</p>
              </div>
            </div>

            <div className="user__section__content">
              <h6>Bvn</h6>
              <p>{userInfo?.bvn}</p>
            </div>
            <div className="user__section__content">
              <h6>Gender</h6>
              <p>{userInfo?.gender}</p>
            </div>
          </div>
        </div>
        <div className="user__section__ctn">
          <h5>Education and Employment</h5>
          <div className="user__section__wrapper">
            <div className="user__section">
              <div className="user__section__content">
                <h6>level of education</h6>
                <p>{userInfo?.level_of_education}</p>
              </div>
              <div className="user__section__content">
                <h6>office email</h6>
                <p>{userInfo?.office_email}</p>
              </div>
            </div>
            <div className="user__section">
              <div className="user__section__content">
                <h6>employment status</h6>
                <p>{userInfo?.employment_status}</p>
              </div>
              <div className="user__section__content">
                <h6>Monthly income</h6>
                <p>{userInfo?.income}</p>
              </div>
            </div>
            <div className="user__section">
              <div className="user__section__content">
                <h6>sector of employment</h6>
                <p>{userInfo?.sector_of_employment}</p>
              </div>
              <div className="user__section__content">
                <h6>loan repayment</h6>
                <p>{userInfo?.loan_repayment_balance}</p>
              </div>
            </div>
            <div className="user__section__content">
              <h6>Duration of employment</h6>
              <p>{userInfo?.duration_of_employment}</p>
            </div>
          </div>
        </div>
        <div className="user__section__ctn">
          <h5>Socials</h5>
          <div className="user__section__wrapper">
            <div className="user__section__content">
              <h6>Twitter</h6>
              <p>{userInfo?.social_media?.twitter_name}</p>
            </div>
            <div className="user__section__content">
              <h6>Facebook</h6>
              <p>{userInfo?.social_media?.facebook_name}</p>
            </div>
            <div className="user__section__content">
              <h6>Instagram</h6>
              <p>{userInfo?.social_media?.instagram_name}</p>
            </div>
          </div>
        </div>
        <div className="user__section__ctn">
          <h5>Guarantor</h5>
          <div className="user__section__wrapper">
            <div className="user__section__content">
              <h6>full Name</h6>
              <p>{userInfo?.guarantors[0]?.name}</p>
            </div>
            <div className="user__section__content">
              <h6>Phone Number </h6>
              <p>{userInfo?.guarantors[0]?.phone_number}</p>
            </div>
            <div className="user__section__content">
              <h6>Email Address</h6>
              <p>{userInfo?.guarantors[0]?.email}</p>
            </div>
            <div className="user__section__content">
              <h6>Relationship</h6>
              <p>{userInfo?.guarantors[0]?.relationship}</p>
            </div>
          </div>
        </div>
        <div className="user__section__ctn last__">
          <div className="user__section__wrapper">
            <div className="user__section__content">
              <h6>full Name</h6>
              <p>{userInfo?.guarantors[1]?.name}</p>
            </div>
            <div className="user__section__content">
              <h6>Phone Number </h6>
              <p>{userInfo?.guarantors[1]?.phone_number}</p>
            </div>
            <div className="user__section__content">
              <h6>Email Address</h6>
              <p>{userInfo?.guarantors[1]?.email}</p>
            </div>
            <div className="user__section__content">
              <h6>Relationship</h6>
              <p>{userInfo?.guarantors[1]?.relationship}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
