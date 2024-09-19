import { FormSelectsType } from "@/types/customSelectsTypes";

export const formSelects: FormSelectsType = [
  {
    label: "Nombre de jours",
    name: "days",
    suffix: "jours",
    options: [
      { value: 1, text: 1 },
      { value: 2, text: 2 },
      { value: 3, text: 3 },
      { value: 4, text: 4 },
      { value: 5, text: 5 },
    ],
  },
  {
    label: "Objectif",
    name: "goal",
    options: [
      { value: "mass", text: "Prendre en masse" },
      { value: "strength", text: "Prendre en force" },
      { value: "shredded", text: "Perdre du gras" },
    ],
  },
  {
    label: "Niveau",
    name: "level",
    options: [
      { value: "beginner", text: "Débutant" },
      { value: "intermediate", text: "Intermédiaire" },
      { value: "advanced", text: "Avancé" },
    ],
  },
];
