import { CssBaseline, ThemeProvider } from "@mui/material";
import { MyProSidebarProvider } from "./context/sidebar/sidebarContext";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./components/topbar/TopBar";
import Dashboard from "./page/dashboard/Dashboard";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <Topbar />
            <Dashboard />
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
