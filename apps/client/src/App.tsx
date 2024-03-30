import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PostifyGray01, PostifyGray02 } from "./constants";
import PageLayout from "./Components/PageLayout/PageLayout";
import Home from "./Pages/Home/Home";
import { routePaths } from "./Routes/Routes";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Contact from "./Pages/Contact/Contact";
import Quotation from "./Pages/Quotation/Quotation";
import Tracking from "./Pages/Tracking/Tracking";
import Deliveries from "./Pages/Deliveries/Deliveries";
import Order from "./Pages/Order/Order";
import DeliveryItem from "./Pages/Deliveries/DeliveryItem/delivery-item";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: PostifyGray01,
      },
      secondary: {
        main: PostifyGray02,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Routes>
          <Route path={routePaths.home} element={<Home />} />
          <Route path={routePaths.login} element={<Login />} />
          <Route path={routePaths.signUp} element={<Signup />} />
          <Route path={routePaths.contact} element={<Contact />} />
          <Route path={routePaths.quotation} element={<Quotation />} />
          <Route path={routePaths.package} element={<Tracking />} />
          <Route path={routePaths.order} element={<Order />} />
          <Route path={routePaths.deliveries} element={<Deliveries />} />
          <Route path={routePaths.deliveryItem} element={<DeliveryItem/>} />
        </Routes>
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
