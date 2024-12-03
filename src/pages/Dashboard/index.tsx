import * as _ from "./styles";
import PrescriptionsArea from "@components/Dashboard/PrescriptionsArea";
import useDashboard from "hooks/useDashboard";
import { useContext, useEffect } from "react";
import Spinner from "@components/UI/Loaders/Spinner";
import { UserRoleContext } from "context/UserRoleContext";

/**
 * Página padrão dos usuários da plataforma, pós fluxo de Login.
 * Nela, é possível encontrar a funcionalidade de ver as receitas
 * disponíveis, na qual é uma função comum a todos os três tipos de
 * atores do sistema - Médico, Paciente e Farmacêutico.
 */
export default function Dashboard() {
  const dashboardHook = useDashboard();
  const userRole = useContext(UserRoleContext).userSelectedRole;

  useEffect(() => {
    dashboardHook.loadPrescriptions();
  }, []);

  return (
    <_.Container>
      {dashboardHook.isLoading ? (
        <Spinner />
      ) : (
        <_.Content>
          {dashboardHook.prescriptions ? (
            <>
              <_.RefreshButton onClick={dashboardHook.handleRefresh}>
                Recarregar
              </_.RefreshButton>
              <PrescriptionsArea
                prescriptions={dashboardHook.prescriptions}
                userRole={userRole}
              />
            </>
          ) : (
            <>
              <_.RefreshButton onClick={dashboardHook.handleRefresh}>
                Tentar novamente
              </_.RefreshButton>
              Não foi possivel resgatar as receitas médicas.
            </>
          )}
        </_.Content>
      )}
    </_.Container>
  );
}
