import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main className="flex items-center justify-center min-h-screen">
        <ThemeToggle />
      </main>
    </ThemeProvider>
  );
}

export default App;
