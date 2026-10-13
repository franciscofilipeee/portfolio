import TerminalController from "~/components/terminal";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Portfólio - Francisco Filipe" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="w-full h-full">
      <TerminalController />
    </div>
  )
}
