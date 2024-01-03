const projects = [
  {
    images: [
      "images/projets/booki-1.webp",
      "images/projets/booki-2.webp",
      "images/projets/booki-3.webp",
    ],
    title: "Booki",
    description: "Site de location de vacances",
    github_link: "https://github.com/avieville/booki",
    details:
      "Ce site permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix. J'ai intégré la maquette du site.",
    competences: ["HTML", "CSS"],
  },
  {
    images: [
      "images/projets/sophie-bluel-1.webp",
      "images/projets/sophie-bluel-2.webp",
      "images/projets/sophie-bluel-3.webp",
    ],
    title: "Portfolio",
    description: "Portfolio de Sophie Bluel",
    github_link: "https://github.com/avieville/portfolio-sophie-bluel",
    details:
      "Ce site permet à Sophie Bluel de se connecter pour gérer l'ajout et la suppression de ses travaux. J'ai réalisé l'intégration de la maquette (modal, formulaire), ajouté la validation côté frontend et mis en place des requêtes fetch pour interagir avec une API.",
    competences: ["HTML", "CSS", "JS"],
  },
  {
    images: [
      "images/projets/kasa-1.webp",
      "images/projets/kasa-2.webp",
      "images/projets/kasa-3.webp",
    ],
    title: "Kasa",
    description: "Site de location d'appartements",
    github_link: "https://github.com/avieville/kasa",
    details:
      "Kasa est un site de location d’appartements entre particuliers, j'ai intégré les différentes page du site en utilisant la bibliothèque React et le préprocesseur sass.",
    competences: ["HTML", "SASS", "REACT"],
  },
  {
    images: [
      "images/projets/mon-vieux-grimoire-1.webp",
      "images/projets/mon-vieux-grimoire-2.webp",
    ],
    title: "Mon vieux grimoire",
    description: "Site de référencement de livres",
    github_link: "https://github.com/avieville/mon-vieux-grimoire",
    details:
      "Mon vieux grimoire est une plateforme de référencement de livres. J'ai développé une API REST avec Express.js. Le site offre la possibilité de s'inscrire et de se connecter, ainsi que d'ajouter, de modifier ou de supprimer des livres, en plus de la fonctionnalité de notation des ouvrages.",
    competences: ["NODE JS", "EXPRESS JS", "API REST", "MONGODB"],
  },
];

export default projects;
