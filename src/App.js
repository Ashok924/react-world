import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/* Old Way to create React Elements */
// const headElement1 = React.createElement("h2", { id: "title1", key: "1" }, "Welcome To");
// const headElement2 = React.createElement("h1", { id: "title2", key: "2"  }, "React World");
// const divElement = React.createElement("div", { id: "container" }, [
//   headElement1,
//   headElement2,
// ]);

/* New Way to create react elements */

// React Element
const title3 = (
  <h3 id="title3" key="2">
    Game Starts ...
  </h3>
);

// React Components
/* Composing Components */
const Title1 = () => (
  <h2 id="title1" key="1">
    Welcome To
  </h2>
);
const Title2 = () => (
  <h1 id="title2" key="2">
    React World
  </h1>
);

const App = () => {
  return (
    <div id="container">
      {Title1()}
      <Title2 />
      {title3}
    </div>
  );
};

const AppLayout = () => {

  /**
   * App IDEA (Food App)
   * Header
   *  --logo
   *  --Nav items
   *  --Cart
   * Body
   *  --Search Bar
   *  --Restarent List
   *  --Restorent Card
   *    --Image
   *    --Name
   *    --Rating
   *    --
   * Footer
   *  --Links
   *  --Copy Right
   */
  
  return(
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
