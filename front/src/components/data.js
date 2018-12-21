export default [
  {
    name: "Memory",
    description:
      "Pour faciliter la lecture du programme, le Centre Saint-Ex a mis en place des pictogrammes qui illustrent le type d'activités proposés.",
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
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 300,
    link: "jeu-memory"
  },
  {
    name: "PumpItUp",
    description:
      "Au centre Saint-Ex vous pourrez trouver un dispositif où il vous faudra à l'aide d'une pompe à vélo, gonfler un ballon le plus vite que vous le pourrez.",
    rules:
      "Ce jeu est basé sur le même principe, cliquez le plus rapidement possible sur le bouton pour gonfler le ballon sans qu'il retombe à son était initial.",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 300,
    link: "jeu-pump-it-up"
  },
  {
    name: "Smile",
    description:
      "A Saint-Ex vous pourrez immortaliser votre venue en vous prenant en photo avec un dispositif Raspberry Pi. Immortalisez à votre tour votre visite sur notre site :)",

    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 300,
    link: "jeu-webcam"
  },
  {
    name: "TheEscape",
    description: "Jeu d'arcade inspiré de la borne d'arcade du Labo Machine.",
    rules:
      "Mémorisez bien le parcours. Lorsque vous cliquez sur démarrer, la lumière s'éteint et vous devez vous diriger vers la sortie. Pour ce faire utilisez les boutons ou les flêches de votre clavier",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 300,
    link: "jeu-arcade"
  }
];
