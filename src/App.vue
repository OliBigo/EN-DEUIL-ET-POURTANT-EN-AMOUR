<script>
import imageCouverture from "@/assets/En_deuil_et_pourtant_en_amour_-_Suzanne_Bougie_et_Real_Burelle.jpg";
import PDFViewer from "pdf-viewer-vue";
import Authors from "@/components/Authors.vue";
import TableSummary from "@/components/TableSummary.vue";
import AccordionSummary from "@/components/AccordionSummary.vue";

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
  width: 60%;
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
