<script>
export default {
  data() {
    return {
      cusdisAppId: import.meta.env.VITE_CUSDIS_APP_ID,
      comments: [],
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      fetch(
        `https://cusdis.com/api/open/comments?page=1&appId=${this.cusdisAppId}&pageId=PAGE_ID`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.comments = data.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        });
    },
  },
};
</script>

<template>
  <v-list>
    <v-list-item v-for="comment in comments" :key="comment.id">
      <v-card variant="tonal">
        <v-card-title>{{ comment.by_nickname }}</v-card-title>
        <v-card-subtitle>{{ new Date(comment.createdAt).toLocaleString() }}</v-card-subtitle>
        <v-card-text>{{ comment.content }}</v-card-text>
      </v-card>
      
    </v-list-item>
  </v-list>
</template>

<style scoped>
.v-card-title {
  text-align: left !important;
}
</style>
