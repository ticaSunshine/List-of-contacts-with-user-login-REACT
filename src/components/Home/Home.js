import React from "react";

export default function Home() {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleClick}>Logout</button>
    </>
  );
}
