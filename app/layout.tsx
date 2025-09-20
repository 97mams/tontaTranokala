import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="treu"
          enableSystem={true}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
