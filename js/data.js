
const SITE = {
  logo: "assets/images/logo.png",
  // --- Identité ---
  nom:      "Agencement Franques",
  slogan:   "Expert en Aménagement d'intérieur",
  baseline: "Spécialiste de l'agencement global, je transforme vos espaces de vie grâce à une maîtrise complète des métiers du second œuvre et du sur-mesure.",
  copyright: "© 2026 Agencement Franques",

  // --- Contact ---
  telephone:     "06 72 13 05 20",
  telephoneHref: "tel:+33672130520",
  email:         "agencement.franques@gmail.com",
  emailHref:     "mailto:agencement.franques@gmail.com",
  adresse:       "Aveyron, France",
  
  legal: {
  proprietaire:  "Christophe Franques",
  siret:         "XXX XXX XXX XXXXX",
  adresseLegale: "12340 Bezonnes, France",
  hebergeur:     "Vercel Inc., 340 Pine Street, San Francisco, CA 94104, USA",
  },
  // --- Réseaux sociaux ---
  instagram: "#",   // remplacer par le vrai lien

  // --- Section "À propos" ---
  apropos: {
    titre:    "Mon histoire",
    photo: "assets/images/portrait.jpg",
    textes: [
      "Notre bureau d'études et nos artisans partenaires interviennent pour repenser intégralement vos volumes. De la redistribution des pièces à la pose de finitions haut de gamme, nous assurons une gestion de projet fluide.",
      "Nous allions la rigueur technique du bâtiment à l'élégance de l'ébénisterie pour créer des intérieurs cohérents, fonctionnels et durables."
    ],
  },
  // --- Expertises (carte compétences) ---
  expertises: [
    { categorie: "Second Œuvre",             label: "Rénovation Globale (Peinture, Placo, Plomberie)" },
    { categorie: "Extérieurs",               label: "Terrasse & Volets Roulants" },
    { categorie: "Conception",               label: "Mobilier Sur-Mesure" },
    { categorie: "Habitat & Pièces d'Eau",  label: "Cuisine & Salle de Bain" },

  ],

  // --- Portfolio ---
  projets: [
    {
      titre:       "Cuisine Récente",
      description: "Agencement complet & Électroménager intégré",
      src: "assets/images/cuisine_récente.jpg",
      alt: "Cuisine moderne avec îlot central, meubles blancs laqués et électroménager encastré",
    },
    {
      titre:       "Rénovation d'Eau",
      description: "Optimisation d'espace & Finitions haut de gamme",
      src: "assets/images/douche.JPG",
      alt: "Salle de bain rénovée avec carrelage texturé, douche à l'italienne et meuble vasque sur mesure",
    },
    {
      titre:       "Terrasse extérieure",
      description: "Bois exotique & Aménagement paysager",
      src: "assets/images/terrace.JPG",
      alt: "Grande terrasse en bois",
    },
    {
      titre:       "Escalier d'angle sur-mesure",
      description: "En bois",
      src: "assets/images/escalier.JPG",
      alt: "escalier d'angle sur-mesure en bois",
    },
    {
      titre:       "Volet en bois sur-mesure",
      description: "",
      src: "assets/images/volet.JPG",
      alt: "Grande volet blanc en bois sur-mesure",
    },
  ],
  carte: {
  lat:    44.4547,
  lng:    2.6244,
  rayon:  50000,
  label:  "Bezonnes — Atelier"
  },
};
