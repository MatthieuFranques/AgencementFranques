
const SITE = {

  // --- Identité ---
  nom:      "Agencement Franques",
  slogan:   "Expert en Aménagement d'intérieur",
  baseline: "Spécialiste de l'agencement global, nous transformons vos espaces de vie grâce à une maîtrise complète des métiers du second œuvre et du sur-mesure.",
  copyright: "© 2026 Agencement Franques.",

  // --- Contact ---
  telephone:     "+33 6 00 00 00 00",
  telephoneHref: "tel:+33600000000",
  email:         "agencement.franques@gmail.com",
  emailHref:     "mailto:agencement.franques@gmail.com",
  adresse:       "Aveyron, France",

  // --- Réseaux sociaux ---
  instagram: "#",   // remplacer par le vrai lien

  // --- Section "À propos" ---
  apropos: {
    titre:    "Vision Globale &\u00a0Expertise d'Exécution",
    textes: [
      "Notre bureau d'études et nos artisans partenaires interviennent pour repenser intégralement vos volumes. De la redistribution des pièces à la pose de finitions haut de gamme, nous assurons une gestion de projet fluide.",
      "Nous allions la rigueur technique du bâtiment à l'élégance de l'ébénisterie pour créer des intérieurs cohérents, fonctionnels et durables."
    ],
  },

  // --- Expertises (carte compétences) ---
  expertises: [
    { categorie: "Habitat & Pièces d'Eau",  label: "Cuisine & Salle de Bain" },
    { categorie: "Second Œuvre",             label: "Rénovation Globale (Peinture, Placo, Plomberie)" },
    { categorie: "Extérieurs",               label: "Terrasse & Volets Roulants" },
    { categorie: "Conception",               label: "Mobilier Sur-Mesure" },
  ],

  // --- Portfolio ---
  projets: [
    {
      titre:       "Cuisine Contemporaine",
      description: "Agencement complet & Électroménager intégré",
      src: "assets/images/projet-cuisine.jpg",
      alt: "Cuisine moderne minimaliste avec îlot central, façades en bois et plan de travail en pierre sombre",
    },
    {
      titre:       "Rénovation d'Eau",
      description: "Optimisation d'espace & Finitions marbre",
      src: "assets/images/projet-sdb.jpg",
      alt: "Salle de bain rénovée avec carrelage texturé, douche à l'italienne et meuble vasque sur mesure",
    },
    {
      titre:       "Terrasse & Outdoor",
      description: "Bois exotique & Aménagement paysager",
      src: "assets/images/projet-terrasse.jpg",
      alt: "Grande terrasse en bois exotique entourant une piscine, avec éclairage encastré",
    },
  ],
  carte: {
  lat:    44.4547,
  lng:    2.6244,
  rayon:  50000,
  label:  "Bezonnes — Atelier"
  },
};
