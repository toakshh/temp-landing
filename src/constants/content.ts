import { BrainCircuit, Code, LucideWebhook, PencilIcon } from "lucide-react";
import { APP_URL } from "./constant";

export const navLinks = [
    { title: "Solution", href: "/" },
    { title: "Use Case", href: "/" },
    { title: "Pricing", href: `${APP_URL}/Pricing` },
    { title: "Documentation", href: `${APP_URL}/Documentation` },
];

export const useCases = [
  { title: "Generate Your Avatar", icon: PencilIcon , id: "useCase1"},
  { title: "Use with Web SDK", icon: LucideWebhook , id: "useCase2"},
  { title: "Integrate Seamlessly", icon: Code , id: "useCase3"},
  { title: "Align with Your Brand", icon: BrainCircuit , id: "useCase4"},
];