import { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./UserDetails.scss";
import "../Users/Users.scss";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import UserInfo from "../../components/UserInfo/UserInfo";

import { goBack } from "../../helpers";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { Spin } from "antd";

const UserDetails = () => {
  const { userId } = useParams();
  const { error, loading, userInfo, getUserInfo } = useGetUserInfo();

  useEffect(() => {
    getUserInfo(userId);
  }, [userId]);

  return (
    <DashboardLayout>
      <div className="main__wrapper">
        <button className="bac__btn" onClick={goBack}>
          <img src="/assets/icons/Vector.svg" alt="back" />
          Back to Users
        </button>
        <div className="title__ctn">
          <h1>User Details</h1>
          <div className="action__btn__wrapper">
            <button className="blaclist">Blacklist User</button>
            <button className="activate">Activate User</button>
          </div>
        </div>{" "}
        {loading ? (
          <div data-testid="loading-spinner" className="spin__">
            <Spin size="large" />
          </div>
        ) : (
          <>
            {!error ? (
              <div data-testid="user-data">
                <UserInfo userInfo={userInfo} />
              </div>
            ) : (
              <div data-testid="error">
                <p>Error fetching user info...</p>
              </div>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default UserDetails;
