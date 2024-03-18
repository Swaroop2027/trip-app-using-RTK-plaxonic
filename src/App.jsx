import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import Filter from "./pages/Filter";
import Hotels from "./pages/Hotels";
import Homestays from "./pages/Homestays";
import Holidays from "./pages/Holidays";
import Signup from "./pages/Signup";

const App = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState("");

  // console.log(user, "in app user");

  return (
    <div className="overflow-x-hidden h-screen w-full bg-[#f2f2f2]">
      <Navbar user={user} />
      <div className="mt-8 pt-[50px]">
        <Routes>
          <Route
            path="/"
            element={<Home setList={setList} setUser={setUser} />}
          />
          <Route path="/book" element={<Booking />} />
          <Route path="/confirmed" element={<Confirmation />} />
          <Route path="/filter" element={<Filter list={list} />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/homestays" element={<Homestays />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
