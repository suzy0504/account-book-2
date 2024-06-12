import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailHome from "../pages/DetailHome";
import { Provider } from "react-redux";
import store from "../redux/config/configStore";

const Router = () => {
  // const [expenses, setExpenses] = useState(dummyData);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="DetailHome/:id" element={<DetailHome />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
