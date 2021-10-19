import AppRoutes from "Routes/AppRoutes";

import { GlobalContext } from "Hooks/GlobalContext";

export default function App() {
  return (
    <GlobalContext>
      <AppRoutes />
    </GlobalContext>
  );
}
