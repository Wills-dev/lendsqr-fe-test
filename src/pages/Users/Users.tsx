import "./Users.scss";

import { useGetAllUsers } from "@/hooks/useGetAllUsers";
import { formatDate } from "@/helpers";

import AllUsersTable from "@/components/AllUsersTable/AllUsersTable";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

const Users = () => {
  const {
    allUsers,
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
  } = useGetAllUsers();

  return (
    <DashboardLayout>
      <div className="main__wrapper">
        <h1 className="">Users</h1>
        <div className="overview__wrapper">
          <div className="overview__card">
            <div className="overview__card__wrapper">
              <img src="/assets/icons/icon (1).svg" alt="" />
              <h6>USERS</h6>
              <h4>2,432</h4>
            </div>
          </div>
          <div className="overview__card">
            <div className="overview__card__wrapper">
              <img src="/assets/icons/icon 2.svg" alt="" />
              <h6>Active Users</h6>
              <h4>2,432</h4>
            </div>
          </div>
          <div className="overview__card">
            <div className="overview__card__wrapper">
              <img src="/assets/icons/icon (2).svg" alt="" />
              <h6>Users with Loans</h6>
              <h4>12,453</h4>
            </div>
          </div>
          <div className="overview__card">
            <div className="overview__card__wrapper">
              <img src="/assets/icons/icon (3).svg" alt="" />
              <h6>Users with Savings</h6>
              <h4>102,453</h4>
            </div>
          </div>
        </div>
        <AllUsersTable
          loading={loading}
          allUsers={allUsers}
          currentItems={currentItems}
          filters={filters}
          handleInputChange={handleInputChange}
          handleReset={handleReset}
          handleFilter={handleFilter}
          formatDate={formatDate}
          offset={offset}
          filteredUsers={filteredUsers}
          pageCount={pageCount}
          handlePageClick={handlePageClick}
        />
      </div>
    </DashboardLayout>
  );
};

export default Users;
