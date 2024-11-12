import * as _ from "./styles";
import PrescriptionsArea from "@components/Dashboard/PrescriptionsArea";
import useDashboard from "hooks/useDashboard";
import { useEffect } from "react";
import Sidebar from "@components/UI/Sidebar";
import Header from "@components/UI/Header";
import Spinner from "@components/UI/Loaders/Spinner";

export default function Dashboard() {
  const dashboardHook = useDashboard();

  useEffect(() => {
    dashboardHook.loadPrescriptions();
  }, []);

  return (
    <_.Container>
      <Sidebar />
      <_.Content>
        <Header />
        {dashboardHook.prescriptions ? (
          <>
            <_.InnerContent>
              <_.RefreshButton onClick={dashboardHook.handleRefresh}>
                Recarregar
              </_.RefreshButton>
              <PrescriptionsArea prescriptions={dashboardHook.prescriptions} />
            </_.InnerContent>
          </>
        ) : (
          <Spinner />
        )}
      </_.Content>
    </_.Container>
  );
}
