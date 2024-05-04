<script>
export default {
  data() {
    return {
      cusdisAppId: import.meta.env.VITE_CUSDIS_APP_ID,
      inputComment: "",
      inputEmail: "",
      inputNickname: "",
      alertColor: "",
      showAlert: false,
    };
  },
  methods: {
    addComment() {
      fetch(`https://cusdis.com/api/open/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appId: this.cusdisAppId,
          pageId: "PAGE_ID",
          content: this.inputComment,
          email: this.inputEmail,
          nickname: this.inputNickname,
        }),
      })
        .then((response) => {
          this.showAlert = true;
          this.alertColor = "success";
          this.inputComment = "";
          this.inputEmail = "";
          this.inputNickname = "";
          setTimeout(() => {
            this.showAlert = false;
          }, 10000);
        })
        .catch((error) => {
          this.showAlert = true;
          this.alertColor = "error";
          this.inputComment = "";
          this.inputEmail = "";
          this.inputNickname = "";
          setTimeout(() => {
            this.showAlert = false;
          }, 10000);
        });
    },
  },
};
</script>

<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="inputNickname"
            label="Nom"
            required
            outlined
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="inputEmail"
            label="Courriel (optionnel)"
            outlined
            type="email"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-textarea
            v-model="inputComment"
            label="Commentaire"
            required
            outlined
            rows="3"
            multi-line
          ></v-textarea>
        </v-col>
      </v-row>
      <v-btn @click="addComment" color="primary">Soumettre</v-btn>
    </v-container>

    <v-alert v-model="showAlert" :color="alertColor">
      {{ alertColor === "success" ? "Votre commentaire sera ajouté" : "Une erreur c'est produite lors de l'ajout du commentaire" }}
    </v-alert>
  </v-form>
</template>

<style scoped></style>
