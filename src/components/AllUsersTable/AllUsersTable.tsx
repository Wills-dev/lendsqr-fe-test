import React, { useEffect, useRef, useState } from "react";

import { Spin } from "antd";
import { AllUsersTableProps, User } from "@/types";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const AllUsersTable = ({
  loading,
  allUsers,
  currentItems,
  filters,
  handleInputChange,
  handleReset,
  handleFilter,
  formatDate,
  offset,
  filteredUsers,
  pageCount,
  handlePageClick,
}: AllUsersTableProps) => {
  const [showUserAction, setShowUserAction] = useState<null | number>(null);
  const [showFilter, setshowFilter] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowUserAction(null);
        setshowFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <div className="spin__">
          {" "}
          <Spin size="large" />
        </div>
      ) : (
        <>
          {allUsers.length > 0 ? (
            <div className="table__container">
              {allUsers.length > 0 && currentItems.length > 0 ? (
                <>
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <div className="table__header">
                              <h6> Organization </h6>
                              <div className="filter__ctn">
                                <img
                                  src="/assets/icons/filter-results-button.svg"
                                  alt="filter"
                                  onClick={() => setshowFilter((prev) => !prev)}
                                />
                                {showFilter && (
                                  <div
                                    className="filter__wrapper"
                                    ref={dropdownRef}
                                  >
                                    <div className="filter__section">
                                      <label htmlFor="organization">
                                        Organization
                                      </label>
                                      <select
                                        name="organization"
                                        value={filters.organization}
                                        onChange={handleInputChange}
                                        id="organization"
                                      >
                                        {" "}
                                        <option defaultValue="select">
                                          Select
                                        </option>
                                      </select>
                                    </div>
                                    <div className="filter__section">
                                      <label htmlFor="User">User</label>
                                      <input
                                        type="text"
                                        name="username"
                                        value={filters.username}
                                        onChange={handleInputChange}
                                        id="User"
                                        placeholder="User"
                                      />
                                    </div>
                                    <div className="filter__section">
                                      <label htmlFor="Email">Email</label>
                                      <input
                                        type="email"
                                        name="email"
                                        value={filters.email}
                                        onChange={handleInputChange}
                                        id="Email"
                                        placeholder="Email"
                                      />
                                    </div>
                                    <div className="filter__section">
                                      <label htmlFor="Date">Date</label>
                                      <input
                                        type="date"
                                        name="date_joined"
                                        value={filters.date_joined}
                                        onChange={handleInputChange}
                                        id="Date"
                                        placeholder="Date"
                                      />
                                    </div>
                                    <div className="filter__section">
                                      <label htmlFor="PhoneNumber">
                                        Phone Number
                                      </label>
                                      <input
                                        type="number"
                                        name="phoneNumber"
                                        value={filters.phoneNumber}
                                        onChange={handleInputChange}
                                        id="PhoneNumber"
                                        placeholder="Phone Number"
                                      />
                                    </div>
                                    <div className="filter__section">
                                      <label htmlFor="status">Status</label>
                                      <select
                                        name="status"
                                        value={filters.status}
                                        onChange={handleInputChange}
                                        id="status"
                                      >
                                        <option defaultValue="select">
                                          Select
                                        </option>
                                        <option value="Inactive">
                                          Inactive
                                        </option>
                                        <option value="Active">Active</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Blacklisted">
                                          Blacklisted
                                        </option>
                                      </select>
                                    </div>
                                    <div className="filter__btn__ctn">
                                      <button
                                        className="reset__btn"
                                        onClick={() => {
                                          handleReset();
                                          setshowFilter(false);
                                        }}
                                      >
                                        Reset
                                      </button>
                                      <button
                                        className="filter__btn"
                                        onClick={() => {
                                          handleFilter();
                                          setshowFilter(false);
                                        }}
                                      >
                                        Filter
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </th>
                          <th>
                            {" "}
                            <div className="table__header">
                              <h6> Username </h6>
                              <button>
                                <img
                                  src="/assets/icons/filter-results-button.svg"
                                  alt="filter"
                                  onClick={() => setshowFilter((prev) => !prev)}
                                />
                              </button>
                            </div>
                          </th>
                          <th>
                            <div className="table__header">
                              <h6> Email</h6>
                              <button>
                                <img
                                  src="/assets/icons/filter-results-button.svg"
                                  alt="filter"
                                  onClick={() => setshowFilter((prev) => !prev)}
                                />
                              </button>
                            </div>
                          </th>
                          <th>
                            <div className="table__header">
                              <h6> Phone Number </h6>
                              <button>
                                <img
                                  src="/assets/icons/filter-results-button.svg"
                                  alt="filter"
                                  onClick={() => setshowFilter((prev) => !prev)}
                                />
                              </button>
                            </div>
                          </th>
                          <th>
                            <div className="table__header">
                              <h6> Date Joined</h6>
                              <button>
                                <img
                                  src="/assets/icons/filter-results-button.svg"
                                  alt="filter"
                                  onClick={() => setshowFilter((prev) => !prev)}
                                />
                              </button>
                            </div>
                          </th>
                          <th>
                            <div className="table__header">
                              <h6> Status</h6>
                              <button>
                                <img
                                  src="/assets/icons/filter-results-button.svg"
                                  alt="filter"
                                  onClick={() => setshowFilter((prev) => !prev)}
                                />
                              </button>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentItems?.map((item: User, index: number) => (
                          <tr key={index}>
                            <td>{item?.organization}</td>
                            <td>{item?.username}</td>
                            <td>{item?.email}</td>
                            <td>{item?.phoneNumber}</td>
                            <td>
                              {formatDate(
                                item?.date_joined.replace(/\.SSS/g, "")
                              )}
                            </td>
                            <td>
                              <span
                                className={`status ${item?.status.toLowerCase()}`}
                              >
                                {item.status}
                              </span>
                            </td>
                            <td>
                              <div className="">
                                <div className="table__action__ctn">
                                  <div className="">
                                    <img
                                      onClick={() =>
                                        setShowUserAction((prev) =>
                                          prev === item.id ? null : item.id
                                        )
                                      }
                                      src="/assets/icons/ic-more-vert-18px.svg"
                                      alt="action menu"
                                    />
                                  </div>

                                  {showUserAction === item.id && (
                                    <div
                                      className="table__action__wrapper"
                                      ref={dropdownRef}
                                    >
                                      <Link
                                        to="/dashboard/users/user-info/793bffe4-8ec8-4b5c-b43a-f3f95b26fc70"
                                        className="table__action__content"
                                      >
                                        {" "}
                                        <img
                                          src="/assets/icons/np_view_1214519_000000 1.svg"
                                          alt=""
                                        />{" "}
                                        <p>View Details</p>
                                      </Link>
                                      <Link
                                        to="/"
                                        className="table__action__content"
                                      >
                                        {" "}
                                        <img
                                          src="/assets/icons/np_delete-friend_3248001_000000 1.svg"
                                          alt=""
                                        />{" "}
                                        <p>Blacklist User</p>
                                      </Link>
                                      <Link
                                        to="/"
                                        className="table__action__content"
                                      >
                                        {" "}
                                        <img
                                          src="/assets/icons/np_user_2995993_000000 1.svg"
                                          alt=""
                                        />{" "}
                                        <p>Activate User</p>
                                      </Link>
                                    </div>
                                  )}
                                </div>
                              </div>
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
                        {offset + 1} to {offset + currentItems?.length}
                      </div>{" "}
                      out of {filteredUsers?.length}
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
                </>
              ) : (
                <p>No user matched. Try to filter using something else.</p>
              )}
            </div>
          ) : (
            <p>No users found</p>
          )}
        </>
      )}
    </>
  );
};

export default AllUsersTable;
