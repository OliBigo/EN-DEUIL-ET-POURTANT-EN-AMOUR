<script>
import imageCouverture from "@/assets/En_deuil_et_pourtant_en_amour_-_Suzanne_Bougie_et_Real_Burelle.jpg";
import PDFViewer from "pdf-viewer-vue";
import Authors from "@/components/Authors.vue";
import TableSummary from "@/components/TableSummary.vue";
import AccordionSummary from "@/components/AccordionSummary.vue";

let isVisible = "hidden";

const dataSommaire = {
  titre: [
    "En deuil et pourtant en amour",
    "La joie de vivre retrouvée quand l’ombre et la lumière se tutoient",
  ],
  sommaire: [
    "Écrit à quatre mains, le récit de deux endeuillés à qui la vie offre l’immense privilège d’aimer à nouveau. Malgré leurs amours en allées résonnant toujours sur les pavés de leur passé, ce bonheur défie leur vieillissement. Complicité, amitié, tendresse et, à leur étonnement, sensualité et sexualité sont au rendez-vous.",
    "Elle et Lui s’expriment à tour de rôle afin de raconter leur cheminement. En prenant le risque de se rendre vulnérables, en prenant le temps de s’apprivoiser, en entrelaçant leurs mots, un nouveau Nous apparaît! Dans le respect de leur autonomie, en dépit de l’âge, en dépit de la tristesse, la joie d’être à deux les comblent encore une fois!",
  ],
  publicCible:
    "Ce témoignage se lit comme un roman. Il se veut une lueur d’espoir pour toute personne seule à la recherche de l’amour, particulièrement les 50 ans et plus.",
  publications: {
    "Suzanne Bougie": [
      {
        titre: "Chavirée",
        editeur: "Éditions Québec/Amérique",
      },
      {
        titre: "Les Mémoires de mon corps",
        editeur: "Éditions Québec/Amérique",
      },
      {
        titre: "Dans mon ventre",
        editeur: "Éditions Presses Sélect",
      },
      {
        titre: "Témoignage d’une endeuillée",
        editeur: "Auto-édition",
      },
      {
        titre: "Ma vie telle l’eau vive",
        editeur: "Auto-édition",
      },
    ],
    "Réal Burelle": [
      {
        titre: "Chemins de traverse",
        editeur: "L’Encrier salin",
      },
    ],
  },
  chapitres: [
    "Sur l’oreiller",
    "Qui es-tu?",
    "Balbutiements",
    "À l’unisson",
    "Nostalgie",
    "Harmonie",
    "Lune de miel",
    "Passé présent",
    "Cent fois",
    "Pianissimo",
    "Eaux vives",
    "Dhalias et hortensias",
    "Legs",
    "Que serais-je sans toi…",
    "Nous",
  ],
  description: [
    "Format 15 cm x 23 cm (6 po x 9 po) – 177 pages avec mise en page",
    "Première et quatrième de couverture en couleur",
  ],
  coordonnées: [
    "Suzanne Bougie – 1255, rue Dion, Val-David (Québec) J0N 2N0 (514) 892-3106 – suzannebougie13@gmail.com",
    "Réal Burelle – 218-1811, rue de Clignancourt, Saint-Jérôme (Québec) (438) 988-1024 – realburelle@hotmail.com",
  ],
};




export default {
  components: {
    PDFViewer,
    Authors,
    TableSummary,
    AccordionSummary,
  },
  data() {
    return {
      imageCouverture,
      isVisible,
      dataSommaire,
    };
  },
};
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="page">
        <v-card class="card">
          <v-card-title>En deuil et pourtant en amour</v-card-title>
          <v-card-text>
            <v-img
              id="couverture"
              :src="imageCouverture"
              alt="Couverture du livre En deuil et pourtant en amour"
            />
          </v-card-text>
        </v-card>
      </div>

      <div class="page">
        <div class="accordion">
          <Authors />
        </div>
      </div>

      <div class="page">
        <div class="accordion">
          <table-summary />
        </div>
      </div>

      <div class="page">
        <div class="accordion">
          <accordion-summary />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.container {
  width: 75%;
}

.main {
  width: 100%;
  display: flex;
  justify-content: center;
}

.page {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;
}

p {
  text-align: justify;
}

.card {
  margin-bottom: 5%;
  width: 45%;
}

:deep(.v-card-title) {
  text-align: center;
  font-weight: bold;
}

.accordion {
  width: 50%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
