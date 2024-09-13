export interface Navigation {
  title: string;
  route: string;
}

export const navigation: Navigation[] = [
  {
    title: "Home",
    route: "/home"
  },
  {
    title: "Séries",
    route: "/series"
  },
  {
    title: "Filmes",
    route: "/movies"
  },
]