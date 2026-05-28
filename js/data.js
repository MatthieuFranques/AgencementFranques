
const SITE = {
  logo: "assets/images/logo.png",
  // --- Identité ---
  nom:      "Agencement Franques",
  slogan:   "Expert en Agencement Intérieur ", 
  baseline: "Spécialiste en agencement sur-mesure et menuiserie, je conçois vos espaces de vie — cuisines, salles de bain, rangements — et vos terrasses en bois. De la rénovation à la création, je transforme chaque mètre carré en un lieu d'exception.",
  copyright: `© ${new Date().getFullYear()} Agencement Franques`,

  // --- Contact ---
  telephone:     "06 72 13 05 20",
  telephoneHref: "tel:+33672130520",
  email:         "agencement.franques@orange.fr",
  emailHref:     "mailto:agencement.franques@orange.fr",
  adresse:       "Aveyron, France",

  legal: {
  proprietaire:  "Christophe Franques",
  siret:         "51203825800012",
  adresseLegale: "12340 Bezonnes, France",
  hebergeur:     "Vercel Inc., 340 Pine Street, San Francisco, CA 94104, USA",
  },
  // --- Réseaux sociaux ---
  instagram: "#",

  // --- Section "À propos" ---
  apropos: {
    titre:    "Mon histoire",
    photo: "assets/images/portrait.webp",
    textes: [
      `Plus de ${new Date().getFullYear() - 2009} ans de savoir-faire au service de vos projets.`,
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
      titre:       "Baie vitrée bois sur-mesure",
      description: "Menuiserie extérieure & Pose en charpente ancienne",
      src: "assets/images/baie_vitree_bois.webp",
      alt: "Baie vitrée bois sur-mesure posée dans une ouverture en pierre",
    },
    {
      titre:       "Bibliothèque sur-mesure laquée",
      description: "Blanc laqué haute brillance & Rangements modulables",
      src: "assets/images/bibliotheque_sur_mesure_blanche.webp",
      alt: "Grande bibliothèque sur-mesure en blanc laqué avec portes, tiroirs et niches ouvertes",
    },
     {
      titre:       "Rénovation d'Eau",
      description: "Optimisation d'espace & Finitions haut de gamme",
      src: "assets/images/douche.webp",
      alt: "Salle de bain rénovée avec carrelage texturé, douche à l'italienne et meuble vasque sur mesure",
    },
    {
      titre:       "Meuble TV cannage",
      description: "Bois chêne & Portes coulissantes cannage",
      src: "assets/images/meuble_tv_cannage.webp",
      alt: "Meuble TV bas en bois clair avec portes coulissantes en cannage naturel",
    },
   
    {
      titre:       "Carrelage pierre naturelle",
      description: "Pose en opus incertum & Joints en travertin",
      src: "assets/images/carrelage_pierre_naturelle.webp",
      alt: "Pose de carrelage en pierre naturelle dans une pièce aux murs en pierre apparente",
    },
    {
      titre:       "Double porte bois massif",
      description: "Menuiserie extérieure & Bois brut massif",
      src: "assets/images/double_porte_bois.webp",
      alt: "Double porte d'entrée en bois massif brut avec imposte vitrée",
    },
    {
      titre:       "Terrasse bois & piscine",
      description: "Bois traité & Aménagement tour de piscine",
      src: "assets/images/terrasse_bois_piscine.webp",
      alt: "Terrasse en bois avec escalier et tour de piscine hors-sol intégré",
    },
    {
      titre:       "Cuisine Récente",
      description: "Agencement complet & Électroménager intégré",
      src: "assets/images/cuisine_récente.webp",
      alt: "Cuisine moderne avec îlot central, meubles blancs laqués et électroménager encastré",
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
      alt: "Escalier d'angle sur-mesure en bois",
    },
    {
      titre:       "Volet en bois sur-mesure",
      description: "",
      src: "assets/images/volet.webp",
      alt: "Grand volet blanc en bois sur-mesure",
    },
    {
      titre:       "Porte en bois sur-mesure",
      description: "Bois massif & Finitions personnalisées",
      src: "assets/images/porte_en_bois.webp",
      alt: "Porte en bois sur-mesure",
    },
    {
      titre:       "Table basse en bois avec une dalle en verre",
      description: "Bois travaillé à la main & Design unique avec une finition naturelle",
      src: "assets/images/table_basse.webp",
      alt: "Table basse en bois avec une dalle en verre",
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
    {
      titre:       "Porte d'entrée bois massif",
      description: "Menuiserie sur-mesure & Encadrement pierre",
      src: "assets/images/porte_entree_bois.webp",
      alt: "Porte d'entrée en bois massif encadrée de pierre de taille",
    },
    {
      titre:       "Escalier bois & garde-corps métal",
      description: "Bois massif & Ferronnerie sur-mesure",
      src: "assets/images/escalier_bois_garde_corps.webp",
      alt: "Escalier intérieur en bois avec garde-corps en barreaux métalliques noirs",
    },
    {
      titre:       "Rénovation maison ancienne",
      description: "Parquet chêne & Mise en valeur murs en pierre",
      src: "assets/images/renovation_interieure_pierre_parquet.webp",
      alt: "Rénovation intérieure d'une maison ancienne avec parquet clair et murs en pierre apparente",
    },
    {
      titre:       "Cuisine compacte & verrière",
      description: "Aménagement optimisé & Séparation verrière atelier",
      src: "assets/images/cuisine_compacte_verriere.webp",
      alt: "Cuisine compacte moderne avec verrière atelier noire et accès salle de bain",
    },
    {
      titre:       "Pose de parquet stratifié",
      description: "Finition soignée & Plinthes assorties",
      src: "assets/images/parquet_stratifie_cuisine.webp",
      alt: "Parquet stratifié teinte chêne clair posé dans une cuisine et couloir",
    },
  ],
  carte: {
  lat:    44.4547,
  lng:    2.6244,
  rayon:  50000,
  label:  "Bezonnes"
  },
};
