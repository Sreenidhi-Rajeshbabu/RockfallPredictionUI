import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center justify-between px-4">
            <div className="flex items-center space-x-4">
              <SidebarTrigger className="text-foreground hover:text-primary" />
              <div className="hidden md:block">
                <h2 className="text-sm font-medium text-foreground">Mine Site Alpha - Active Monitoring</h2>
                <p className="text-xs text-muted-foreground">Last updated: 2 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Status Indicator */}
              <div className="hidden sm:flex items-center space-x-2">
                <div className="h-2 w-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">System Online</span>
              </div>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-xs"
                >
                  3
                </Badge>
              </Button>

              {/* User Menu */}
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline ml-2">Safety Officer</span>
              </Button>
            </div>
          </div>
        </header>

        <div className="flex w-full">
          <AppSidebar />
          <main className="flex-1 overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}