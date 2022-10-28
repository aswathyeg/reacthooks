import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import CartPage from "./components/shoppingCart/CartPage";
//import Cart from "./components/shoppingCart/CartPage";
// import Ingredients from "./components/Ingredients/Ingredients";
// import { AuthContext } from "./context/auth-context";
// import Auth from "./components/Auth";
import Header from "./components/shopping-context-reducer/Header";
import Home from "./components/shopping-context-reducer/Home";
import Cart from "./components/shopping-context-reducer/Cart";
// const Home = React.lazy(() =>
//   import("./components/shopping-context-reducer/Home")
// );

function App() {
  // const authContext = useContext(AuthContext);
  // let content = <Auth />;
  // if (authContext.isAuth) {
  //   content = <Ingredients />;
  // }
  // return content;
  return (
    <BrowserRouter>
      <Header />

      <div>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        {/* </Suspense> */}
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
