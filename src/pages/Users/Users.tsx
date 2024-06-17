import { Link, useNavigate } from "react-router-dom";

import "./Users.scss";

import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Users = () => {
  const navigate = useNavigate();

  const handleNavigate = (url: any) => {
    navigate(url);
  };

  const data = [
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dateJoined: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      organization: "Irorun",
      username: "Debby Ogana",
      email: "debby2@irorun.com",
      phoneNumber: "08160780928",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Pending",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "07003309226",
      dateJoined: "Apr 10, 2020 10:00 AM",
      status: "Pending",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Active",
    },
    {
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "08060780900",
      dateJoined: "Apr 10, 2020 10:00 AM",
      status: "Active",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "08060780900",
      dateJoined: "Apr 10, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },

    // Add more data as needed
  ];

  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const currentItems = data.slice(offset, offset + itemsPerPage);

  return (
    <div className="container">
      <Header />

      <main className="main__container">
        <Sidebar />
        <div className="main__wrapper">
          <h1 className="">Users</h1>
          <div className="overview__wrapper">
            <div className="overview__card">
              <div className="overview__card__wrapper">
                <img src="/public/assets/icons/icon (1).svg" alt="" />
                <h6>USERS</h6>
                <h4>2,432</h4>
              </div>
            </div>
            <div className="overview__card">
              <div className="overview__card__wrapper">
                <img src="/public/assets/icons/icon 2.svg" alt="" />
                <h6>Active Users</h6>
                <h4>2,432</h4>
              </div>
            </div>
            <div className="overview__card">
              <div className="overview__card__wrapper">
                <img src="/public/assets/icons/icon (2).svg" alt="" />
                <h6>Users with Loans</h6>
                <h4>12,453</h4>
              </div>
            </div>
            <div className="overview__card">
              <div className="overview__card__wrapper">
                <img src="/public/assets/icons/icon (3).svg" alt="" />
                <h6>Users with Savings</h6>
                <h4>102,453</h4>
              </div>
            </div>
          </div>
          <div className="table__container">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>
                      <div className="table__header">
                        <h6> Organization </h6>
                        <button>
                          <img
                            src="/public/assets/icons/filter-results-button.svg"
                            alt="filter"
                          />
                        </button>
                      </div>
                    </th>
                    <th>
                      {" "}
                      <div className="table__header">
                        <h6> Username </h6>
                        <button>
                          <img
                            src="/public/assets/icons/filter-results-button.svg"
                            alt="filter"
                          />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="table__header">
                        <h6> Email</h6>
                        <button>
                          <img
                            src="/public/assets/icons/filter-results-button.svg"
                            alt="filter"
                          />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="table__header">
                        <h6> Phone Number </h6>
                        <button>
                          <img
                            src="/public/assets/icons/filter-results-button.svg"
                            alt="filter"
                          />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="table__header">
                        <h6> Date Joined</h6>
                        <button>
                          <img
                            src="/public/assets/icons/filter-results-button.svg"
                            alt="filter"
                          />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="table__header">
                        <h6> Status</h6>
                        <button>
                          <img
                            src="/public/assets/icons/filter-results-button.svg"
                            alt="filter"
                          />
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr
                      key={index}
                      onClick={() =>
                        handleNavigate(
                          "/dashboard/users/user-info/24c0d8d5-1a7b-4e18-9540-6a3d46ca3299"
                        )
                      }
                    >
                      <td>{item.organization}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.dateJoined}</td>
                      <td>
                        <span className={`status ${item.status.toLowerCase()}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <img
                          src="/public/assets/icons/ic-more-vert-18px.svg"
                          alt=""
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pagination-ctn">
              <div className="page-info">
                Showing{" "}
                <div className="page">
                  {offset + 1} to {offset + currentItems.length}
                </div>{" "}
                out of {data.length}
              </div>
              <div className="page-controls">
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Users;
