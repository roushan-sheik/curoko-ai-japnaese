import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Curoco AI" },
    { name: "description", content: "Welcome to Curoco AI" },
  ];
}

export default function Home() {
  return <div>Welcome to Home</div>;
}
