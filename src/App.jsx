import React from "react";
import Hero from "./components/Hero/Hero";
import MenuContext from "./context/MenuContext";
import Services from "./components/Services/Services";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";
import AppBanner from "./components/AppBanner/AppBanner";
import Footer from "./components/Footer/Footer";

const App = () => {

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  return (
    <MenuContext.Provider value={{ isDropdownOpen, setIsDropdownOpen }}>
    <div className="font-mono overflow-x-hidden">
      <Hero />
      <Services/>
      <WhereToBuy/>
      <AppBanner/>
      <Footer/>
    </div>

    </MenuContext.Provider>
  );
};

export default App;
