<script>
import imageCouverture from "@/assets/En_deuil_et_pourtant_en_amour_-_Suzanne_Bougie_et_Real_Burelle.jpg";

export default {
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
        <Card>
          <template #title>En deuil et pourtant en amour</template>
          <template #content>
            <Image
              :src="imageCouverture"
              alt="Couverture du livre En deuil et pourtant en amour"
              preview
            />
          </template>
        </Card>
      </div>

      <Card>
        <template #title>En deuil et pourtant en amour</template>
        <template #content>
          <div id="page4">
            <img style="width: 100%" src="@/assets/suzanne.jpg" />
            <img style="width: 100%" src="@/assets/real.jpg" />
            <p>
              Nos amours en allées résonneront toujours sur les pavés de notre
              passé. Or, par le biais de nos mots entrelacés, nous avons donné
              naissance à ce nouveau NOUS au présent! Quel immense privilège
              offert par la vie: aimer encore!
              <br />
              <br />
              Où allons-nous? Dans le ici et maintenant! Combien de temps nous
              reste-t-il? Peu importe... en autant que demeure la tendresse!
              Ainsi, main dans la main, nous entrerons avec confiance dans
              l’épilogue de notre vie...
              <br />
              <br />
              Suzanne Bougie a écrit cinq autres livres : Dans mon ventre,
              Chavirée, Les Mémoires de mon corps, Témoignage d’une endeuillée,
              Ma Vie telle l’eau vive.
            </p>
            <p>
              Traduire tout cet amour parti de deux deuils immenses pour
              rayonner de tous ses feux dans un présent rempli de bonheur qui
              défie notre vieillissement! Le plus beau cadeau que nous pouvions
              nous offrir!
              <br />
              <br />
              Notre histoire vaut la peine d’être racontée, puisqu’elle peut
              procurer inspiration et confiance aux esseulés et esseulées qui
              voudront bien nous lire et croire à la vie redonnée. L’essence
              même du message que l’on souhaite transmettre!
              <br />
              <br />
              Réal Burelle a publié un recueil de poésie intitulé : Chemins de
              traverse.
            </p>
          </div>
          <br />
          <div style="text-align: center">
            <b>Elle et Lui</b>
            <br />
            <p>
              Ce témoignage romanesque se veut une lueur d’espoir pour toute
              personne seule à la recherche de l’amour, peu importe son âge...
            </p>
          </div>
        </template>
      </Card>
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
  width: 100%;
}

#page4 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* This will create two equal-width columns */
  gap: 50px;
  /* Optional: This will add some space between the columns */
}

.page4fin {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  width: 100%;
}

.page {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3%;
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
