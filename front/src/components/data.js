export default [
  {
    name: "Memory",
    description:
      "Pour faciliter la lecture du programme, le Centre Saint-Ex a mis en place des pictogrammes qui illustreront le type d'activités proposés",
    pictogrammes: [
      { name: "bar", subName: "éphémère", icon: "bar" },
      { subName: "atelier hebdomadaire", icon: "atelier" },
      { name: "goûter", subName: "numérique", icon: "gouter" },
      { name: "vacances", subName: "digitales", icon: "vacances" },
      {
        subName: "expérimentation numérique & virtuelle labomachine",
        icon: "experimentation"
      },
      { name: "FabLab", subName: "artfabrique", icon: "fablab" },
      { subName: "exposition", icon: "expo" }
    ],
    css: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
    height: 400,
    link: "/"
  },
  {
    name: "Pump it up",
    description: "Le jeu de la pompe en digital",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
    link: "jeu-pump-it-up"
  }
];
