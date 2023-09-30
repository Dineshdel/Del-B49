import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./Home";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import Cart from "./Cart";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/cart" component={<Cart />} />
            <Route path="/not-found" component={<NotFound />} />
            <Route path="/" exact component={<Home />} />
            {/* <Redirect to="/not-found" /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
