import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailHome from "../pages/DetailHome";
import { Provider } from "react-redux";
import store from "../redux/config/configStore";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { useState } from "react";
import Layout from "../components/Layout";

const Router = () => {
  const [user, setUser] = useState(null);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route index element={<Home />} />
            <Route path="DetailHome/:id" element={<DetailHome />} />
          </Route>
          <Route path="/sign_in" element={<SignIn setUser={setUser} />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
