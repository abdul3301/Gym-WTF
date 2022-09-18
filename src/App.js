import { getGyms } from "./functions/methods";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import Header from "./components/Header";
import TopBackground from "./components/FirstPart";
import FirstPart from "./components/FirstPart";
import SecondPart from "./components/SecondPart";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { GymDetails } from "./components/GymDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/gyms"
            element={
              <>
                <FirstPart />
                <SecondPart />
                <Banner />
              </>
            }
          />
          <Route path="/gym" element={<GymDetails />} />
        </Routes>
        <Footer />

        {/* <GymDetails /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
