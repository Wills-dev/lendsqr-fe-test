import React, { useEffect, useState } from "react";

import { axiosInstance } from "../axiosInstance";
import { User } from "../types";

export const useGetAllUsers = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  const [filters, setFilters] = useState({
    username: "",
    phoneNumber: "",
    organization: "",
    email: "",
    date_joined: "",
    status: "",
  });

  const handlePageClick = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleFilter = () => {
    const filtered = allUsers.filter((user) => {
      return Object.keys(filters).every((key) => {
        const filterValue = filters[key as keyof typeof filters];
        if (!filterValue) return true;
        const userValue = user[key as keyof User];
        if (userValue !== null && userValue !== undefined) {
          return userValue
            .toString()
            .toLowerCase()
            .includes(filterValue.toLowerCase());
        }
        return false;
      });
    });
    setFilteredUsers(filtered);
    setPageCount(Math.ceil(filtered.length / itemsPerPage));
    setCurrentPage(0);
  };

  const handleReset = () => {
    setFilters({
      username: "",
      phoneNumber: "",
      organization: "",
      email: "",
      date_joined: "",
      status: "",
    });
    setFilteredUsers(allUsers);
    setPageCount(Math.ceil(allUsers.length / itemsPerPage));
    setCurrentPage(0);
  };

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(
        `/0d1b50ae-860a-446a-ad38-4e73b165c3b4`
      );
      setAllUsers(data);
      setFilteredUsers(data);
      setPageCount(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.log("error getting users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredUsers.slice(offset, offset + itemsPerPage);

  return {
    handlePageClick,
    offset,
    pageCount,
    currentItems,
    loading,
    handleInputChange,
    handleFilter,
    handleReset,
    filters,
    filteredUsers,
    allUsers,
    currentPage,
  };
};
