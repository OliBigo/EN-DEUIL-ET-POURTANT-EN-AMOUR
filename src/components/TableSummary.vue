<script>
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
    {
      name: "Suzanne Bougie",
      address: "1255, rue Dion, Val-David (Québec) J0N 2N0",
      phone: "(514) 892-3106",
      email: "suzannebougie13@gmail.com",
    },
    {
      name: "Réal Burelle",
      address: "218-1811, rue de Clignancourt, Saint-Jérôme (Québec) J7Y 4C1",
      phone: "(438) 988-1024",
      email: "realburelle@hotmail.com",
    },
  ],
};

export default {
  data() {
    return {
      dataSommaire,
    };
  },
};
</script>

<template>
  <v-card>
    <v-card-title>Sommaire</v-card-title>
    <v-divider />
    <v-card-text>
      <v-table density="default" class="table-row-spacing">
        <tbody>
          <tr>
            <th><b>Titre</b></th>
            <td>
              <b>{{ dataSommaire.titre[0] }}</b>
              <p>{{ dataSommaire.titre[1] }}</p>
            </td>
          </tr>

          <tr>
            <th><b>Sommaire</b></th>
            <td>
              <p>{{ dataSommaire.sommaire[0] }}</p>
              <br />
              <p>{{ dataSommaire.sommaire[1] }}</p>
            </td>
          </tr>

          <tr>
            <th><b>Public cible</b></th>
            <td>
              <p>{{ dataSommaire.publicCible }}</p>
            </td>
          </tr>

          <tr>
            <th><b>Publications</b></th>
            <td>
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
                    <v-list-item-subtitle>{{
                      pub.editeur
                    }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </td>
          </tr>

          <tr>
            <th><b>Chapitres</b></th>
            <td>
              <v-list :lines="false">
                <v-list-item
                  v-for="(chapter, i) in dataSommaire.chapitres"
                  :key="i"
                  :title="`${i + 1} - ${chapter}`"
                />
              </v-list>
            </td>
          </tr>

          <tr>
            <th><b>Description</b></th>
            <td>
              <p v-for="(desc, i) in dataSommaire.description" :key="i">
                {{ desc }}
              </p>
            </td>
          </tr>

          <tr>
            <th><b>Coordonnées</b></th>
            <td>
              <p v-for="(coord, i) in dataSommaire.coordonnées" :key="i">
                {{ coord.name }} - {{ coord.address }} - <a :href="`tel: ${coord.phone}`">{{ coord.phone }}</a> - <a :href="`mailto: ${coord.email}`">{{ coord.email }}</a>
              </p>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<style scoped>
tr {
  vertical-align: top;
}

th {
  white-space: nowrap;
}

.table-row-spacing td,
.table-row-spacing th {
  padding: 16px 16px !important;
}
</style>
