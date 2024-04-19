<script>
import Comments from "@/components/Comments.vue";
import pdf from "@/public/EN_DEUIL_ET_POURTANT_NUMÉRIQUE_24_MARS.pdf";
import epub from "@/public/EN_DEUIL_ET_POURTANT_EN_AMOUR_19_avril_2024.epub"
import AddComment from './AddComment.vue';
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
  extrait: [
    "Alanguie, elle ferme les yeux dans cet espace-temps déployé. Se blottit tout près de lui dans ce cocon n’appartenant qu’à eux. Sous sa cuisse, elle sent la chaleur soyeuse de la sienne. Du bout des doigts, elle la caresse, lentement, remonte le long de la hanche, de la poitrine, de la gorge, puis atteint le visage de son amoureux.",
    "Aimantant ses yeux bruns aux siens, bleus, elle visite de l’index chaque trait, chaque vallon, chaque sillon, effleure les vagues du front, caresse les cheveux blancs épars, reprend son trajet vers le visage aimé, les sourcils grisonnants, le nez fin, les lèvres souriantes. Rides, ridules, taches brunes ont disparu par la magie de l’amour!",
    "En un total abandon, corps nus assouvis, membres entrelacés, les amants se laissent envahir par la douce mélopée.",
    "Bercés par Solace. Consolation. Guitare langoureuse, violoncelle sublime se donnent la réplique.",
    "À deux. À nouveau. Il aime. Elle aime. Il est aimé. Elle est aimée.",
    "Doucement, il emprisonne son visage entre ses mains et lui répète encore une fois : « Je t’aime, amore » Et elle de lui répondre : « Moi aussi, je t’aime » en déposant un baiser espiègle sur le bout de son nez.",
    "Le temps d’une petite éternité, tous deux plongent dans le regard de l’autre et aperçoivent tout au fond de leurs pupilles ce qui pourrait bien ressembler à l’âme de leur partenaire. La sentant frissonner, il remonte tendrement sur elle la couverture, lui en recouvre les épaules comme d’un châle tricoté avec amour. Il la serre encore plus fort dans ses bras. Chaleur partagée! Extase retrouvée! Et pourtant… ces deux êtres l’ont échappé belle.",
    "Vulnérables, leurs ventres sont pour l’instant à l’abri entre leurs corps fusionnés. Après la volupté demeure la tendresse. Toujours, la tendresse.",
    "Bercés par Solace. Réconfort. Au gré des accords, leurs mains caressent leurs corps.",
    "Elle et lui gardent silence un long moment. Jouissant de leur intimité. Savourant cette sensualité. Se faisant la tendresse. Encore et encore. Ne plus jamais sortir de ce lit douillet. Maintenir indéfiniment cette étreinte des regards.",
    "Alors, elle les revoit allongés sur un lit à baldaquin blanc au bord de la plage, sous les étoiles du ciel noir velours de Juan Dolio. Elle joint ses doigts aux siens et lui murmure à l’oreille : « Tu te souviens, en République dominicaine, quand je t’ai proposé spontanément d’écrire ensemble le récit de notre histoire d’amour? Ce serait le bon moment, non? » Enthousiasmé, il lui répond d’emblée : « Eh que j’t’aime toi! Viens ici! » Il la couvre de baisers sonores. Ils éclatent de rire. Oui, ils vont s’en donner à cœur joie. Et peut-être même offrir un peu d’espoir à d’autres personnes endeuillées, esseulées ou craignant de le devenir…",
    "En les invitant à se lancer, tout comme eux, à la recherche de Solace!",
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
    Comments,
    AddComment,
  },
  data() {
    return {
      dataSommaire,
      pdf,
      epub
    };
  },
};
</script>

<template>
  <v-expansion-panels variant="accordion">
    <v-expansion-panel>
      <v-expansion-panel-title>Public cible</v-expansion-panel-title>
      <v-expansion-panel-text>{{
        dataSommaire.publicCible
      }}</v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>Auteurs</v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list lines="one" style="padding: 0">
          <v-list-group
            v-for="(author, i) in Object.keys(dataSommaire.publications)"
            :key="i"
          >
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" :title="author" />
            </template>

            <v-list-item
              v-for="(pub, j) in dataSommaire.publications[author]"
              :key="j"
            >
              <v-list-item-title>{{ pub.titre }}</v-list-item-title>
              <v-list-item-subtitle>{{ pub.editeur }}</v-list-item-subtitle>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>Sommaire</v-expansion-panel-title>
      <v-expansion-panel-text
        v-for="(summ, i) in dataSommaire.sommaire"
        :key="i"
        >{{ summ }}</v-expansion-panel-text
      >
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>Chapitres</v-expansion-panel-title>
      <v-expansion-panel-text
        ><v-list :lines="false">
          <v-list-item
            v-for="(chapter, i) in dataSommaire.chapitres"
            :key="i"
            :title="`${i + 1} - ${chapter}`"
          /> </v-list
      ></v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>Extrait</v-expansion-panel-title>
      <v-expansion-panel-text
        v-for="(text, i) in dataSommaire.extrait"
        :key="i"
        >{{ text }}</v-expansion-panel-text
      >
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>Commentaires</v-expansion-panel-title>
      <v-expansion-panel-text><comments /></v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>Lecture sur le site web</v-expansion-panel-title>
      <v-expansion-panel-text>
        <PDFViewer :src="pdf" />
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>Télécharger le livre</v-expansion-panel-title>
      <v-expansion-panel-text>
        <a :href="pdf" download="En deuil et pourtant en amour.pdf"
          >Télécharger le livre en format PDF (ordinateur et tablette)</a
        >
        <br />
        <a :href="epub" download="En deuil et pourtant en amour.epub"
          >Télécharger le livre en format ePub (liseuse)</a
        >
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>Ajouter un commentaire</v-expansion-panel-title>
      <v-expansion-panel-text>
        <add-comment />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
.v-expansion-panel-text {
  text-align: justify;
}
</style>
