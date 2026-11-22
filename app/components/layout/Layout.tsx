import { HeaderActionsProvider } from "@agent-native/toolkit/app-shell";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <HeaderActionsProvider>
      <div className="min-h-screen w-full bg-background text-foreground">
        <main className="agent-native-app-main min-w-0 w-full">
          {children}
        </main>
      </div>
    </HeaderActionsProvider>
  );
}
