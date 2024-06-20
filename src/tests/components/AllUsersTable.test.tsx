import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AllUsersTable from "../../components/AllUsersTable/AllUsersTable";
import { User } from "../../types";
import { BrowserRouter } from "react-router-dom";

const mockUsers: User[] = [
  {
    id: 1,
    organization: "Org1",
    username: "user1",
    email: "user1@example.com",
    phoneNumber: "1234567890",
    date_joined: "2023-06-01",
    status: "Active",
  },
  {
    id: 2,
    organization: "Org2",
    username: "user2",
    email: "user2@example.com",
    phoneNumber: "0987654321",
    date_joined: "2023-06-15",
    status: "Inactive",
  },
];

const mockProps = {
  loading: false,
  allUsers: mockUsers,
  currentItems: mockUsers,
  filters: {
    organization: "",
    username: "",
    email: "",
    date_joined: "",
    phoneNumber: "",
    status: "",
  },
  handleInputChange: jest.fn(),
  handleReset: jest.fn(),
  handleFilter: jest.fn(),
  formatDate: (date: string) => date,
  offset: 0,
  filteredUsers: mockUsers,
  pageCount: 1,
  handlePageClick: jest.fn(),
};
