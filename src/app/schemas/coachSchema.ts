import { object, string } from "yup";

export const coachSchema = object().shape({
  days: string().required("Le nombre de jours est requis"),
  goal: string().required("L'objectif est requis"),
  level: string().required("Le niveau est requis"),
});
