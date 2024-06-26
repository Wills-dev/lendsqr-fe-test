import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/LoginPage";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import UserState from "./context/UserState";

function App() {
  return (
    <>
      <UserState>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard/users" element={<Users />} />
          <Route
            path="/dashboard/users/user-info/:userId"
            element={<UserDetails />}
          />
        </Routes>
      </UserState>
    </>
  );
}

export default App;
