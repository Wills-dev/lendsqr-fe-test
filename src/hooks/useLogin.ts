import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LoginDetails } from "../types";
import { axiosInstance } from "../axiosInstance";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = loginDetails;

    if (!email || !password) {
      toast.error("Please fill all fields.", {
        duration: 4000,
        style: {
          background: "#282828",
          color: "#fff",
        },
      });
      return;
    }

    setLoading(true);

    try {
      const { data } = await axiosInstance.get(
        "/62ae12da-f06b-4831-8eea-1e98e94ac6b5"
      );
      localStorage.setItem("lendsqrCurrentUser", JSON.stringify(data));
      toast.success("Login successful!", {
        duration: 4000,
        style: {
          background: "#282828",
          color: "#fff",
        },
      });
      setLoginDetails({
        password: "",
        email: "",
      });
      setTimeout(() => {
        navigate("/dashboard/users");
      }, 2000);
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error. Please try again later.", {
        duration: 4000,
        style: {
          background: "#282828",
          color: "#fff",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    handleChange,
    handleSubmit,
    loading,
    loginDetails,
  };
};
