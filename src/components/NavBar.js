import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const Link = links.map(link => <a key={link} href={link}>{link}</a>)

  return <nav>{Link}</nav>;
}

export default NavBar;
