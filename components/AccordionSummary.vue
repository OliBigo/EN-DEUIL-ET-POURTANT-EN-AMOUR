<script>
import Comments from "@/components/Comments.vue";
import pdf from "@/public/EN DEUIL, PDF, version finale 1-05-2024.pdf";
import epub from "@/public/En deuil et pourtant en amour - Suzanne Bougie et Real Burelle.epub";
import AddComment from "@/components/AddComment.vue";
const dataSommaire = {
  titre: [
    "En deuil et pourtant en amour",
    "La joie de vivre retrouvée quand l’ombre et la lumière se tutoient",
  ],
  sommaire: [
    "Écrit à quatre mains, le récit de deux endeuillés à qui la vie offre l’immense privilège d’aimer à nouveau. Malgré leurs amours en allées résonnant toujours sur les pavés de leur passé, ce bonheur défie leur vieillissement. Complicité, amitié, tendresse et, à leur étonnement, sensualité et sexualité sont au rendez-vous.",
    "Elle et Lui s’expriment à tour de rôle afin de raconter leur cheminement. En prenant le risque de se rendre vulnérables, en prenant le temps de s’apprivoiser, en entrelaçant leurs mots, un nouveau Nous apparaît! Dans le respect de leur autonomie, en dépit de l’âge, en dépit de la tristesse, la joie d’être à deux les comblent encore une fois!",
    "Ce témoignage se lit comme un roman. Il se veut une lueur d’espoir pour toute personne seule à la recherche de l’amour, particulièrement les 50 ans et plus.",
  ],
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
  mounted() {
    const parentElement = document.getElementById("comments");
    const button = document.getElementById("comments-button");
    const text = document.createElement("p");
    text.style.textAlign = "justify";
    text.style.padding = "10px 24px 0px 24px";
    text.style.cursor = "pointer";
    text.style.fontSize = "0.9em";
    text.style.color = "#696969";

    button.onmouseenter = () => {
      text.style.backgroundColor = "#F6F6F6";
    };
    button.onmouseleave = () => {
      text.style.backgroundColor = "transparent";
      button.style.backgroundColor = "transparent";
    };

    text.onmouseenter = () => {
      text.style.backgroundColor = "#F6F6F6";
      button.style.backgroundColor = "#F6F6F6";
    };
    text.onmouseleave = () => {
      text.style.backgroundColor = "transparent";
      button.style.backgroundColor = "transparent";
    };

    const node = document.createTextNode(
      "Après votre lecture, nous aimerions beaucoup connaître vos impressions. Revenez visiter notre site WEB et cliquez sur AJOUTER VOTRE COMMENTAIRE. Ce sera notre plus belle récompense."
    );
    text.appendChild(node);

    text.onclick = () => {
      if (this.panel === 5) {
        this.panel = [4];
      } else {
        this.panel = [4, 5];
        document.getElementById("comments").scrollIntoView();
      }
    };
    parentElement.insertBefore(text, parentElement.childNodes[1]);
  },
  components: {
    Comments,
    AddComment,
  },
  data() {
    return {
      panel: [4],
      dataSommaire,
      pdf,
      epub,
      page: 1,
    };
  },
  methods: {
    openPanel(index) {
      if (this.panel.includes(index)) {
        this.panel = [4];
      } else {
        this.panel = [4, index];
      }
    },
  },
};
</script>

<template>
  <i
    >Cliquer sur la petite flèche à droite pour voir le contenu de chaque
    élément</i
  >
  <v-expansion-panels variant="accordion" v-model="panel" multiple>
    <v-expansion-panel>
      <v-expansion-panel-title @click.capture.stop="openPanel(0)"
        >Sommaire</v-expansion-panel-title
      >
      <v-expansion-panel-text
        v-for="(summ, i) in dataSommaire.sommaire"
        :key="i"
        >{{ summ }}</v-expansion-panel-text
      >
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title @click.capture.stop="openPanel(1)"
        >Chapitres</v-expansion-panel-title
      >
      <v-expansion-panel-text
        ><v-list :lines="false">
          <v-list-item
            v-for="(chapter, i) in dataSommaire.chapitres"
            :key="i"
            :title="`${chapter}`"
          /> </v-list
      ></v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title @click.capture.stop="openPanel(2)"
        >Extrait</v-expansion-panel-title
      >
      <v-expansion-panel-text
        v-for="(text, i) in dataSommaire.extrait"
        :key="i"
      >
        {{ text }}
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel id="start-comments">
      <v-expansion-panel-title @click.capture.stop="openPanel(3)"
        >Commentaires</v-expansion-panel-title
      >
      <v-expansion-panel-text>
        
        <comments :page="page" @update:page="page = $event" />
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title
        :hide-actions="true"
        id="read-button"
        :readonly="true"
        :static="true"
        >Choisir votre mode de lecture gratuit</v-expansion-panel-title
      >
      <v-expansion-panel-text>
        <a :href="pdf" download="En deuil et pourtant en amour.pdf"
          >Télécharger EN DEUIL ET POURTANT EN AMOUR en format PDF (ordinateur
          et tablette)</a
        >
        <br />
        <a :href="epub" download="En deuil et pourtant en amour.epub"
          >Télécharger EN DEUIL ET POURTANT EN AMOUR en format ePub (liseuse)</a
        >
        <br />
        <a :href="pdf" target="_blank">Lire directement en cliquant ici</a>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel id="comments">
      <v-expansion-panel-title
        id="comments-button"
        @click.capture.stop="openPanel(5)"
        >Ajouter votre commentaire
      </v-expansion-panel-title>
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

.v-card-text {
  text-align: justify;
}

.extrait {
  padding: 2%;
}

.v-expansion-panel-title {
  color: "secondary";
}

.comments-text {
  padding-top: 0;
}

#read-button {
  background-color: transparent !important;
  cursor: default;
}
</style>
