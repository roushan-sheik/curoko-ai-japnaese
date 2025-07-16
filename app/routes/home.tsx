import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Curoco AI" },
    { name: "description", content: "Welcome to Curoco AI" },
  ];
}

export default function Home() {
  return (
    <div>
      <h2>Welcome to Home</h2>
      <h3>Shadcn Setup</h3>
      <Button variant="default">Click Me</Button>
    </div>
  );
}
