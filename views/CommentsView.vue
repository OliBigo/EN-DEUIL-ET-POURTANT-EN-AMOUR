<script>
import AddComment from "@/components/AddComment.vue";

export default {
  components: {
    AddComment,
  },
};
</script>

<template>
  <main class="main">
    <div class="container">
        
      <div class="page">
        <v-card class="card">
            <v-card-title><h2>Votre commentaire</h2></v-card-title>
          <v-card-text>
            <add-comment />
          </v-card-text>
        </v-card>
      </div>
    </div>
  </main>
</template>

<style scoped>
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

.card {
  margin-bottom: 5%;
  width: 50%;
}

:deep(.v-card-title) {
  text-align: center;
  font-weight: bold;
  padding-top: 24px;
}
</style>
