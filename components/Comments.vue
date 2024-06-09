<script>
export default {
  data() {
    return {
      cusdisAppId: import.meta.env.VITE_CUSDIS_APP_ID,
      comments: [],
      pageValue: this.page,
      numberOfComments: 4,
      defaultComments: [
        {
          name: "Marielle Beauregard",
          comments: [
            "Quelle originalité que de nous présenter vos premiers courriels, vos douces correspondances. J’ai aimé lire vos amours passées et nouvelles. Merci de nous décrire vos corps qui vibrent, pourquoi diantre cesseraient-ils? En tous cas, comme vous, moi, j’y crois. Vive les ressacs océaniques!",
            "Réal, quels magnifiques poèmes et quelle délicatesse t’habite. Suzanne, ce que je suis de nouveau chavirée en lisant les trois extraits de ton Témoignage d’une endeuillée. Quelle superbe idée!",
            "Je vous remercie d’avoir partagé vos états d’âme, votre belle écriture, vos talents respectifs et surtout votre sensibilité. Longue vie à vous deux dans l’intensité.",
          ],
        },
        {
          name: "Jocelyne Aird-Bélanger",
          comments: [
            "Votre témoignage est absolument convaincant. Le récit des décès de vos partenaires fait pleurer, mais nous sommes vite réconfortés par les moments de tendresse et d’amour authentiques qui jalonnent votre parcours.",
            "L’émerveillement que vous vivez grâce à cette nouvelle histoire d’amour, malgré les souvenirs pénibles en arrière-fond, est fort inspirant. Votre écriture à tous les deux est belle, riche et agréable à lire.",
          ],
        },
        {
          name: "Jocelyne Thifault",
          comments: [
            "J’ai été émue et captivée par cette unique introspection à deux voix qui se lit aisément grâce à une écriture remarquable, vivante, rythmée, imagée. Prose et poésie se relancent et se complètent tout au long de ce cheminement de l’ombre à la lumière.",
            "L’intimité partagée de ces deux endeuillés amoureux est touchante et porte à la réflexion. J’ai essuyé quelques larmes en lisant des passages poignants, mais j’ai ri aussi devant les hésitations et les doutes de ces deux « ados » septuagénaires redécouvrant l’amour. Bravo!",
          ],
        },
        {
          name: "Jean-Luc Hétu",
          comments: [
            "Me voici soulagé, car je redoutais que l’ivresse de votre amour naissant n’éclabousse des endeuillés encore aux prises avec leur chagrin ou toujours à la recherche de l’âme sœur. C’est la sobriété de la narration qui concourt à mon soulagement.",
            "Vous vous exprimez spontanément, sans filtre, mais sans vous laisser entraîner par votre plaisir évident d’écrire. En plus de l’expression claire et du ton naturel, cette sobriété contribue à garder son élan à votre récit et à soutenir l’intérêt. Toutefois, cela ne m’a pas empêché de verser quelques larmes lors de l’évocation des circonstances ayant entouré le décès de votre conjoint, de votre conjointe.",
            "J’aime la liberté avec laquelle vous faites référence à Richard et à Micheline tout au long de votre récit. J’y ai découvert des scènes attendrissantes et fort belles. Ces références font partie intégrante de votre projet et vous les faites avec tact.",
            "Les poèmes sont bien choisis et offrent un écho senti de votre histoire.",
          ],
        },
      ],
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
            this.addDefaultComments();
            return;
          }
          const sortedComments = data.data.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          this.comments = [...this.comments, sortedComments];
          this.numberOfComments += data.data.data.length;
          this.getComments(counter + 1);
        });
    },
    updatePage(page) {
      this.pageValue = page;

      this.$emit("update:page", page);
    },
    addDefaultComments() {
      while (this.comments[this.comments.length - 1].length < 10) {
        let feedbackComment = this.defaultComments.pop();
        let adjustedComment = {
          id: feedbackComment.id,
          by_nickname: feedbackComment.name,
          content: feedbackComment.comments,
        };
        this.comments[this.comments.length - 1].push(adjustedComment);
      }
      const lastComments = [];
      for (let i = 0; i < this.defaultComments.length; i++) {
        let adjustedComment = {
          id: this.defaultComments[i].id,
          by_nickname: this.defaultComments[i].name,
          content: this.defaultComments[i].comments,
        };
        lastComments.push(adjustedComment);
      }
      if (lastComments.length !== 0) this.comments.push(lastComments);
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
      immediate: false,
      deep: true,
      handler(newValue) {
        this.$emit("update:page", newValue);
        this.$nextTick(() => {
          const element = document.getElementById("start-comments");
          if (element)
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      },
    },
  },
};
</script>

<template>
  <p style="text-align: right; color: grey; padding-right: 16px;">{{ numberOfComments + " commentaires" }}</p>
  <v-list id="comments-top">
    <v-list-item
      v-for="(comment, index) in comments[pageValue - 1]"
      :key="comment.id"
    >
      <v-card variant="tonal" :id="index === 0 ? 'first-comment' : 'other'">
        <v-card-title>{{ comment.by_nickname }}</v-card-title>
        <v-card-subtitle v-if="comment.createdAt">{{
          new Date(comment.createdAt).toLocaleString()
        }}</v-card-subtitle>

        <div v-if="Array.isArray(comment.content)" id="comments-text">
          <v-card-text
            id="comments-text"
            v-for="(para, index) in comment.content"
            :key="index"
            >{{ para }}</v-card-text
          >
        </div>
        <v-card-text id="comment" v-else>{{ comment.content }}</v-card-text>
      </v-card>
    </v-list-item>
  </v-list>

  <v-pagination v-model="pageValue" :length="comments.length"></v-pagination>
</template>

<style scoped>
.v-card-title {
  text-align: left !important;
}

#comment {
  text-align: justify;
}

#comments-top {
  padding-top: 0;
}

#default-comments {
  padding-bottom: 0;
}

#comments-text {
  padding-top: 0;
}
</style>
