import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  console.log(links)

  return <nav>{links.map((link) => (
    <a href={link} key={link}>{link}</a>
  ))}</nav>;
}

export default NavBar;
