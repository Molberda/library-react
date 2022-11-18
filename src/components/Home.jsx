import React from "react";
import Discounted from "./Discounted";
import Explore from "./Explore";
import Featured from "./Featured";
import Footer from "./Footer";
import Highlights from "./Highlights";
import Landing from "./Landing";

const Home = () => {
  return (
    <div>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
};

export default Home;
