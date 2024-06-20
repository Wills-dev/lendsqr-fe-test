import { useState } from "react";

import { axiosInstance } from "../axiosInstance";
import { UserData } from "../types";

export const useGetUserInfo = () => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserData>({
    id: 0,
    full_name: "",
    phone_number: "",
    bvn: 0,
    email: "",
    gender: "other",
    type_of_resident: "other",
    marital_status: "single",
    children: 0,
    user_rating: 0,
    amount: "$0.00",
    bank_details: {
      bank_name: "",
      account_number: 0,
    },
    level_of_education: "other",
    employment_status: "unemployed",
    sector_of_employment: "",
    duration_of_employment: "",
    office_email: "",
    loan_repayment_balance: "$0.00",
    income: "$0.00",
    social_media: {
      twitter_name: "",
      facebook_name: "",
      instagram_name: "",
    },
    guarantors: [],
  });

  const getUserInfo = async (userId: string | undefined) => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(`/${userId}`);
      setUserInfo(data);
    } catch (error) {
      console.log("error getting user details", error);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    userInfo,
    getUserInfo,
  };
};
