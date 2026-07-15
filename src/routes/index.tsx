import { createFileRoute } from "@tanstack/react-router";
import { SignIn } from "../SignIn";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return <div>
    <SignIn />
  </div>;
}
