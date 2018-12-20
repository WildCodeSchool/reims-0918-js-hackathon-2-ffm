export default [
  {
    name: "Memory",
    description:
      "Pour faciliter la lecture du programme, le Centre Saint-Ex a mis en place des pictogrammes qui illustreront le type d'activités proposés",
    pictogrammes: [
      { name: "bar éphémère", icon: "bar" },
      { name: "exposition", icon: "expo" },
      { name: "atelier hebdomadaire", icon: "atelier" },

      { name: "FabLab artfabrique", icon: "fablab" },
      { name: "goûter numérique", icon: "gouter" },
      { name: "vacances digitales", icon: "vacances" },
      {
        name: "expérimentation numérique",
        icon: "experimentation"
      }
    ],
    rules:
      "Sur la prochaine page, 14 cartes seront retournés. Le principe est de retrouver les paires de carte qui représente les icônes qui viennent d'être présentés",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
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
