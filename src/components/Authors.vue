<script>
import { ref, onMounted } from "vue";
import imageSuzanne from "@/assets/authors/suzanne.jpg";
import imageReal from "@/assets/authors/real.jpg";

export default {
  setup() {
    const el = ref(null);
    const height = ref(500);

    onMounted(() => {
        height.value = el.value.clientHeight * 0.5;
    });

    return {
      el,
      height,
      imageSuzanne,
      imageReal,
    };
  },
};
</script>

<template>
  <div class="authors" ref="el">
    <v-card>
      <v-card-title>Les auteurs</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col align-self="center">
              <v-img
                class="author-image"
                :height="height"
                :src="imageSuzanne"
                title="Image Suzanne"
              />
            </v-col>
            <v-col align-self="center">
              <v-img
                class="author-image"
                :height="height"
                :src="imageReal"
                title="Image Réal"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>
                Nos amours en allées résonneront toujours sur les pavés de notre
                passé. Or, par le biais de nos mots entrelacés, nous avons donné
                naissance à ce nouveau NOUS au présent! Quel immense privilège
                offert par la vie: aimer encore!
              </p>
            </v-col>
            <v-col
              ><p>
                Traduire tout cet amour parti de deux deuils immenses pour
                rayonner de tous ses feux dans un présent rempli de bonheur qui
                défie notre vieillissement! Le plus beau cadeau que nous
                pouvions nous offrir!
              </p></v-col
            >
          </v-row>
          <v-row>
            <v-col
              ><p>
                Où allons-nous? Dans le ici et maintenant! Combien de temps nous
                reste-t-il? Peu importe... en autant que demeure la tendresse!
                Ainsi, main dans la main, nous entrerons avec confiance dans
                l’épilogue de notre vie...
              </p></v-col
            >
            <v-col
              ><p>
                Notre histoire vaut la peine d’être racontée, puisqu’elle peut
                procurer inspiration et confiance aux esseulés et esseulées qui
                voudront bien nous lire et croire à la vie redonnée. L’essence
                même du message que l’on souhaite transmettre!
              </p></v-col
            >
          </v-row>
          <v-row>
            <v-col
              ><p>
                Suzanne Bougie a écrit cinq autres livres : Dans mon ventre,
                Chavirée, Les Mémoires de mon corps, Témoignage d’une
                endeuillée, Ma Vie telle l’eau vive.
              </p></v-col
            >
            <v-col
              ><p>
                Réal Burelle a publié un recueil de poésie intitulé : Chemins de
                traverse.
              </p></v-col
            >
          </v-row>
        </v-container>
        <br />
        <div style="text-align: center">
          <h2>Elle et Lui</h2>
          <br />
          <p>
            Ce témoignage romanesque se veut une lueur d’espoir pour toute
            personne seule à la recherche de l’amour, peu importe son âge...
          </p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.authors {
  height: 80vh;
  margin-bottom: 5%;
}
.author-image {
  max-height: 500px;
  width: auto;
}
p {
  text-align: justify;
}
</style>
