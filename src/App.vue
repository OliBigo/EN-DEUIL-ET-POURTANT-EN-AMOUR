<script>
import imageCouverture from "@/assets/En_deuil_et_pourtant_en_amour_-_Suzanne_Bougie_et_Real_Burelle.jpg";
import pdf from "@/assets/PAPIER_15_X_23_cm_24mars 2024.pdf";
import PDFViewer from "pdf-viewer-vue";
import Authors from "@/components/Authors.vue";
let isVisible = "hidden";

export default {
  components: {
    PDFViewer,
    Authors
  },
  data() {
    return {
      imageCouverture,
      pdf,
      isVisible,
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

      <Authors />

      <v-card
        class="card"
        :style="{ width: '100%', 'max-height': '90vh', overflow: 'auto' }"
      >
        <v-card-text>
          TITRE EN DEUIL ET POURTANT EN AMOUR La joie de vivre retrouvée quand
          l’ombre et la lumière se tutoient SOMMAIRE Écrit à quatre mains, le
          récit de deux endeuillés à qui la vie offre l’immense privilège
          d’aimer à nouveau. Malgré leurs amours en allées résonnant toujours
          sur les pavés de leur passé, ce bonheur défie leur vieillissement.
          Complicité, amitié, tendresse et, à leur étonnement, sensualité et
          sexualité sont au rendez-vous. Elle et Lui s’expriment à tour de rôle
          afin de raconter leur cheminement. En prenant le risque de se rendre
          vulnérables, en prenant le temps de s’apprivoiser, en entrelaçant
          leurs mots, un nouveau Nous apparaît! Dans le respect de leur
          autonomie, en dépit de l’âge, en dépit de la tristesse, la joie d’être
          à deux les comblent encore une fois! PUBLIC CIBLE Ce témoignage se lit
          comme un roman. Il se veut une lueur d’espoir pour toute personne
          seule à la recherche de l’amour, particulièrement les 50 ans et plus.
          PUBLICATIONS Suzanne Bougie Les Mémoires de mon corps Éditions
          Québec/Amérique Dans mon ventre Éditions Presses Sélect Témoignage
          d’une endeuillée Auto-édition Ma vie telle l’eau vive Auto-édition
          Réal Burelle Chemins de traverse L’Encrier salin CHAPITRES – Sur
          l’oreiller – Qui es-tu? – Balbutiements – À l’unisson – Nostalgie –
          Harmonie – Lune de miel – Passé présent – Cent fois – Pianissimo –
          Eaux vives – Dhalias et hortensias – Legs – Que serais-je sans toi… –
          Nous
        </v-card-text>
      </v-card>
      <v-card-text
        class="card"
        :style="{ width: '100%', 'max-height': '90vh', overflow: 'auto' }"
      >
        <v-card-title> Sur l'oreiller </v-card-title>
        <v-card-text>
          <Divider />
          <p>
            Alanguie, elle ferme les yeux dans cet espace-temps déployé. Se
            blottit tout près de lui dans ce cocon n’appartenant qu’à eux. Sous
            sa cuisse, elle sent la chaleur soyeuse de la sienne. Du bout des
            doigts, elle la caresse, lentement, remonte le long de la hanche, de
            la poitrine, de la gorge, puis atteint le visage de son amoureux.
          </p>
          <p>
            Aimantant ses yeux bruns aux siens, bleus, elle visite de l’index
            chaque trait, chaque vallon, chaque sillon, effleure les vagues du
            front, caresse les cheveux blancs épars, reprend son trajet vers le
            visage aimé, les sourcils grisonnants, le nez fin, les lèvres
            souriantes. Rides, ridules, taches brunes ont disparu par la magie
            de l’amour!
          </p>
          <p>
            En un total abandon, corps nus assouvis, membres entrelacés, les
            amants se laissent envahir par la douce mélopée.
          </p>
          <p>
            Bercés par Solace. Consolation. Guitare langoureuse, violoncelle
            sublime se donnent la réplique.
          </p>
          <p>
            À deux. À nouveau. Il aime. Elle aime. Il est aimé. Elle est aimée.
          </p>
          <p>
            Doucement, il emprisonne son visage entre ses mains et lui répète
            encore une fois : « Je t’aime, amore » Et elle de lui répondre : «
            Moi aussi, je t’aime » en déposant un baiser espiègle sur le bout de
            son nez.
          </p>
          <p>
            Le temps d’une petite éternité, tous deux plongent dans le regard de
            l’autre et aperçoivent tout au fond de leurs pupilles ce qui
            pourrait bien ressembler à l’âme de leur partenaire. La sentant
            frissonner, il remonte tendrement sur elle la couverture, lui en
            recouvre les épaules comme d’un châle tricoté avec amour. Il la
            serre encore plus fort dans ses bras. Chaleur partagée! Extase
            retrouvée! Et pourtant… ces deux êtres l’ont échappé belle.
          </p>
          <p>
            Vulnérables, leurs ventres sont pour l’instant à l’abri entre leurs
            corps fusionnés. Après la volupté demeure la tendresse. Toujours, la
            tendresse.
          </p>
          <p>
            Bercés par Solace. Réconfort. Au gré des accords, leurs mains
            caressent leurs corps.
          </p>
          <p>
            Elle et lui gardent silence un long moment. Jouissant de leur
            intimité. Savourant cette sensualité. Se faisant la tendresse.
            Encore et encore. Ne plus jamais sortir de ce lit douillet.
            Maintenir indéfiniment cette étreinte des regards.
          </p>
          <p>
            Alors, elle les revoit allongés sur un lit à baldaquin blanc au bord
            de la plage, sous les étoiles du ciel noir velours de Juan Dolio.
            Elle joint ses doigts aux siens et lui murmure à l’oreille : « Tu te
            souviens, en République dominicaine, quand je t’ai proposé
            spontanément d’écrire ensemble le récit de notre histoire d’amour?
            Ce serait le bon moment, non? » Enthousiasmé, il lui répond d’emblée
            : « Eh que j’t’aime toi! Viens ici! » Il la couvre de baisers
            sonores. Ils éclatent de rire. Oui, ils vont s’en donner à cœur
            joie. Et peut-être même offrir un peu d’espoir à d’autres personnes
            endeuillées, esseulées ou craignant de le devenir…
          </p>
          <p>
            En les invitant à se lancer, tout comme eux, à la recherche de
            Solace!
          </p>
        </v-card-text>
      </v-card-text>

      <Button
        :onclick="
          () => {
            isVisible = 'visible';
          }
        "
        >Lire le livre</Button
      >
      <v-card class="card" :style="{ visibility: isVisible }">
        <v-card-title>En deuil et pourtant en amour</v-card-title>
        <v-card-text>
          <PDFViewer
            src="C:\Users\olivi\Documents\Réal\EN-DEUIL-ET-POURTANT-EN-AMOUR\src\assets\PAPIER_15_X_23_cm_24mars 2024.pdf"
          />
        </v-card-text>
      </v-card>
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
  margin-bottom: 3%;
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
