<script>
export default {
  data() {
    return {
      cusdisAppId: import.meta.env.VITE_CUSDIS_APP_ID,
      comments: [],
      pageValue: this.page,
    };
  },
  created() {
    this.getComments(1);
    this.pageValue = this.page;
  },
  methods: {
    getComments(counter) {
      fetch(
        `https://cusdis.com/api/open/comments?page=${counter}&appId=${this.cusdisAppId}&pageId=PAGE_ID`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.data.data.length === 0) {
            return;
          }
          const sortedComments = data.data.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          this.comments = [...this.comments, sortedComments];
          this.getComments(counter + 1);
        });
    },
    updatePage(page) {
      this.pageValue = page;
      this.$emit("update:page", page);
    },
  },
  props: {
    page: {
      type: Number,
      default: 1,
    },
  },
  watch: {
    pageValue: {
      immediate: true,
      handler(newValue) {
        this.$emit("update:page", newValue);
      },
    },
  },
};
</script>

<template>
  <v-list id="comments-top">
    <v-list-item v-for="comment in comments[pageValue - 1]" :key="comment.id">
      <v-card variant="tonal">
        <v-card-title>{{ comment.by_nickname }}</v-card-title>
        <v-card-subtitle>{{
          new Date(comment.createdAt).toLocaleString()
        }}</v-card-subtitle>
        <v-card-text>{{ comment.content }}</v-card-text>
      </v-card>
    </v-list-item>
  </v-list>
  <v-pagination v-model="pageValue" :length="comments.length"></v-pagination>
</template>

<style scoped>
.v-card-title {
  text-align: left !important;
}

#comments-top {
  padding-top: 0;
}
</style>
