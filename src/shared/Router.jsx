import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailHome from "../pages/DetailHome";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { useState } from "react";
import Layout from "../components/Layout";
import Profile from "../pages/Profile";

const Router = () => {
  const [user, setUser] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          <Route
            index
            element={<Home user={user} setSelectedMonth={setSelectedMonth} />}
          />
          <Route
            path="DetailHome/:id"
            element={<DetailHome selectedMonth={selectedMonth} />}
          />
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
        </Route>
        <Route path="/sign_in" element={<SignIn setUser={setUser} />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
