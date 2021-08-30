import React from "react";

function showCurrentYear() {
  return new Date().getFullYear()
}
function Footer() {
  return(
    
      <footer>
        <p>Coppyright ⓒ  {showCurrentYear()} Made by Tara Larsen</p>
      </footer>
    
  )
}

export default Footer