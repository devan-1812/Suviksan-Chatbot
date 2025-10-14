import { ThemeProvider } from "../ThemeProvider";

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-8 bg-background text-foreground">
        <h3 className="text-xl font-bold">Theme Provider Example</h3>
        <p className="text-muted-foreground">This component manages light/dark theme.</p>
      </div>
    </ThemeProvider>
  );
}
