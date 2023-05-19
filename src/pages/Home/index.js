import React, { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState(0);
  return <div>Home Page: {balance}</div>;
}
