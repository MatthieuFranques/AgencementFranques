
const SITE = {
  logo: "assets/images/logo.png",
  // --- Identité ---
  nom:      "Agencement Franques",
  slogan:   "Expert en Agencement Intérieur & Extérieur",
  baseline: "Spécialiste de l'agencement global, je conçois vos intérieurs sur-mesure et prolonge votre confort côté jardin. De la rénovation complète du second œuvre à la création de terrasses bois haut de gamme, je transforme chaque mètre carré en un lieu d'exception.",
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
    {
      titre:       "Porte en bois sur-mesure",
      description: "Bois massif & Finitions personnalisées",
      src: "assets/images/porte_en_bois.jpg",
      alt: "Porte en bois sur-mesure",
    },
    {
      titre:       "Table basse en bois avec une dale en verre",
      description: "Bois travaillé à la main & Design unique avec une finition naturelle",
      src: "assets/images/table_basse.jpg",
      alt: "Table basse en bois avec une dale en verre",
    },
    {
      titre:       "Meuble TV en bois",
      description: "",
      src: "assets/images/meuble_tv.jpg",
      alt: "Meuble TV en bois",
    },
    {
      titre:       "Aménagement de chambre",
      description: "",
      src: "assets/images/maison.JPG",
      alt: "Aménagement de chambre",
    },
    {
      titre:       "Cuisine",
      description: "",
      src: "assets/images/cuisine_restoré.jpg",
      alt: "Cuisine rénovée",
    },
  ],
  carte: {
  lat:    44.4547,
  lng:    2.6244,
  rayon:  50000,
  label:  "Bezonnes"
  },
};
