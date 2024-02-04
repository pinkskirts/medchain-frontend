import MainHeader from "@/components/main-header/main-header";
import { useState } from "react";

function UserDashboard() {
  const [userName, setUserName] = useState("Gustavo");

  return (
    <div>
      <MainHeader showHome />
      <h1>{userName}'s Dashboard</h1>
    </div>
  );
}

export default UserDashboard;
