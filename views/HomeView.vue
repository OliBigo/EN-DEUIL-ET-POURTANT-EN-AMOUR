<script>
import imageCouverture from "@/assets/En_deuil_et_pourtant_en_amour_-_Suzanne_Bougie_et_Real_Burelle.jpg";
import Authors from "@/components/Authors.vue";
import AccordionSummary from "@/components/AccordionSummary.vue";
import imageTemoignage from "@/assets/Témoignage d'un enduillée.svg";
import pdfTémoignage from "@/public/TÉMOIGNAGNE MAI 2024.pdf";
import epubTémoignage from "@/public/TÉMOIGNAGNE MAI 2024.epub";

export default {
  components: {
    Authors,
    AccordionSummary,
  },
  data() {
    return {
      imageCouverture,
      imageTemoignage,
      pdfTémoignage,
      epubTémoignage,
    };
  },
};
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="page">
        <v-card class="card">
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
          <accordion-summary />
        </div>
      </div>

      <div class="page">
        <div class="accordion">
          <v-card style="margin-top: 5%;">
            <v-card-title>Autre publication gratuite</v-card-title>
            <v-card-text>
              <v-img
                id="couverture-témoignage"
                :src="imageTemoignage"
                alt="Couverture du livre Témoignage d'une endeuillée"
                max-height="350px"
              />
              <br />
              <h1 style="text-align: center">Témoignage d'une endeuillée</h1>
              <br />
              <p>
                Dans cet émouvant récit, Suzanne Bougie raconte le lent travail
                du deuil lui permettant de cicatriser la plaie béante laissée
                par la perte de son conjoint, Richard, son compagnon depuis plus
                de 50 ans. Pas à pas, elle trouve le courage de descendre dans
                ce grand canyon de sa vie avant de remonter à la surface. Elle
                puise dans l’écriture un réconfort inattendu, salutaire! Au fil
                des pages réapparaissent l’émerveillement, la légèreté, la joie
                de vivre.
              </p>
              <br />
              <p>
                La centaine de personnes ayant lu son témoignage sont
                convaincues, tout comme elle, qu’il peut faire œuvre utile. En
                particulier, auprès des gens confrontés au vieillissement, à la
                maladie, à la mort d’un proche. En dépit de l’absence de l’être
                aimé, la vie, belle, bonne, vibrante est toujours au
                rendez-vous!
              </p>
              <br />
              <div style="display: grid">
                <a
                  :href="pdfTémoignage"
                  download="Témoignage d'une endeuillée.pdf"
                  >Télécharger TÉMOIGNAGE D'UNE ENDEUILLÉE en format PDF
                  (ordinateur et tablette)</a
                >
                <a
                  :href="epubTémoignage"
                  download="Témoignage d'une endeuillée.epub"
                  >Télécharger TÉMOIGNAGE D'UNE ENDEUILLÉE en format ePub
                  (liseuse)</a
                >
                <a :href="pdfTémoignage" target="_blank"
                  >Lire directement en cliquant ici</a
                >
              </div>
            </v-card-text>
          </v-card>
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
  font-size: 0.95rem;
}

.card {
  margin-bottom: 5%;
  width: 50%;
}

:deep(.v-card-title) {
  text-align: center;
  font-weight: bold;
}

.accordion {
  width: 80%;
}

a {
  font-size: 1rem;
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
