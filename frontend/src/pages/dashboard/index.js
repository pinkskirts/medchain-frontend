import ReadPrescriptions from "@/components/dashboard/read-prescriptions";
import WritePrescriptionsForms from "@/components/dashboard/write-prescriptions-form";
import MainHeader from "@/components/main-header/main-header";
import { useState } from "react";

function UserDashboard() {
  const [userName, setUserName] = useState("Gustavo");

  return (
    <div>
      <MainHeader showHome />
      <h1>{userName}'s Dashboard</h1>
      <WritePrescriptionsForms />
      <ReadPrescriptions />
    </div>
  );
}

export default UserDashboard;
