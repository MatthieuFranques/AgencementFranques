
const SITE = {
  logo: "assets/images/logo.png",
  // --- Identité ---
  nom:      "Agencement Franques",
  slogan:   "Expert en Agencement Intérieur ", //& Extérieur
  baseline: "Spécialiste en agencement sur-mesure et menuiserie, je conçois vos espaces de vie — cuisines, salles de bain, rangements — et vos terrasses en bois. De la rénovation à la création, je transforme chaque mètre carré en un lieu d'exception.",
  copyright: "© 2026 Agencement Franques",

  // --- Contact ---
  telephone:     "06 72 13 05 20",
  telephoneHref: "tel:+33672130520",
  email:         "agencement.franques@gmail.com",
  emailHref:     "mailto:agencement.franques@gmail.com",
  adresse:       "Aveyron, France",

  legal: {
  proprietaire:  "Christophe Franques",
  siret:         "51203825800012",
  adresseLegale: "12340 Bezonnes, France",
  hebergeur:     "Vercel Inc., 340 Pine Street, San Francisco, CA 94104, USA",
  },
  // --- Réseaux sociaux ---
  instagram: "#",   // remplacer par le vrai lien

  // --- Section "À propos" ---
  apropos: {
    titre:    "Mon histoire",
    photo: "assets/images/portrait.webp",
    textes: [
      "Plus de 15 ans de savoir-faire au service de vos projets.",
      "Depuis 2009, j'accompagne mes clients pour transformer leurs rêves en réalisations concrètes. Menuisier de formation, j'ai bâti mon expertise sur le terrain, développant au fil des années une polyvalence qui me permet aujourd'hui de maîtriser chaque étape de votre agencement. Mon exigence reste la même : allier la passion du bois à la rigueur de la rénovation pour créer des lieux qui vous ressemblent."
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
      src: "assets/images/cuisine_récente.webp",
      alt: "Cuisine moderne avec îlot central, meubles blancs laqués et électroménager encastré",
    },
    {
      titre:       "Rénovation d'Eau",
      description: "Optimisation d'espace & Finitions haut de gamme",
      src: "assets/images/douche.webp",
      alt: "Salle de bain rénovée avec carrelage texturé, douche à l'italienne et meuble vasque sur mesure",
    },
    {
      titre:       "Terrasse extérieure",
      description: "Bois exotique & Aménagement paysager",
      src: "assets/images/terrace.webp",
      alt: "Grande terrasse en bois",
    },
    {
      titre:       "Escalier d'angle sur-mesure",
      description: "En bois",
      src: "assets/images/escalier.webp",
      alt: "escalier d'angle sur-mesure en bois",
    },
    {
      titre:       "Volet en bois sur-mesure",
      description: "",
      src: "assets/images/volet.webp",
      alt: "Grande volet blanc en bois sur-mesure",
    },
    {
      titre:       "Porte en bois sur-mesure",
      description: "Bois massif & Finitions personnalisées",
      src: "assets/images/porte_en_bois.webp",
      alt: "Porte en bois sur-mesure",
    },
    {
      titre:       "Table basse en bois avec une dale en verre",
      description: "Bois travaillé à la main & Design unique avec une finition naturelle",
      src: "assets/images/table_basse.webp",
      alt: "Table basse en bois avec une dale en verre",
    },
    {
      titre:       "Meuble TV en bois",
      description: "",
      src: "assets/images/meuble_tv.webp",
      alt: "Meuble TV en bois",
    },
    {
      titre:       "Aménagement de chambre",
      description: "",
      src: "assets/images/maison.webp",
      alt: "Aménagement de chambre",
    },
    {
      titre:       "Cuisine",
      description: "",
      src: "assets/images/cuisine_restoré.webp",
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
