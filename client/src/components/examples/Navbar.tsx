import Navbar from "../Navbar";
import { ThemeProvider } from "../ThemeProvider";

export default function NavbarExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 p-8">
          <p className="text-muted-foreground">Navbar component with theme toggle and navigation links</p>
        </div>
      </div>
    </ThemeProvider>
  );
}
