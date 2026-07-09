import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react";

export function Header({ children }: { children: React.ReactNode }) {
   return(
    <div className="w-full h-15 flex items-center gap-4 justify-end px-4">
        {children}
        <Button>
            <LogOut className="ml-2 h-4 w-4" />
            Logout
        </Button>
    </div>
   ); 
}