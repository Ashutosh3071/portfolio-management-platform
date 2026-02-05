export type Skill = {
  id: number;
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  level: number;
  icon?: string;
};
