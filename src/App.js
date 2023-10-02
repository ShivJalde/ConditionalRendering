import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import './App.css'
// import Randomuser from "./Components/RandomUser/Randomuser";

function App() {
  return (
    <>
      <div>
        <div className="Navbar-app-container">
          <Navbar />
        </div>
        {/* <Randomuser /> */}
        <div className="Product-app-container">
          <Products />
        </div>
      </div>
    </>
  );
}

export default App;
