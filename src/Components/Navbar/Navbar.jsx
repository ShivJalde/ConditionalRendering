import React from "react";
import "./Navbar.css";
import Logo from "../NavbarData/Logo/Logo";
import Address from "../NavbarData/Address/Address";
import SinginAccountlist from "../NavbarData/SingIn&AccountList/Singin&Accountlist";
import ReturnOrder from "../NavbarData/Return&Orders/Return&Order";
import CartLogo from "../NavbarData/CartLogo/CartLogo";
import SearchBar from "../NavbarData/SearchBar/SearchBar";

function Navbar() {
  return (
    <div className="ecom-navbar">
      <div className="ecom-navbar-firstarea">
        <Logo />
        <Address />
        <SearchBar />
      </div>
      <div className="ecom-navbar-secondarea">
        <SinginAccountlist />
        <ReturnOrder />
        <CartLogo />
      </div>
    </div>
  );
}

export default Navbar;
