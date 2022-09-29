import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import MainPage from "./Pages/mainPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainPage></MainPage>
      <Footer />
    </div>
  );
}

export default App;
