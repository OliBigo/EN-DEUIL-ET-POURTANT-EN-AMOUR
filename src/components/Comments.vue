<script>
// For Vue 3
import VueCusdis from "vue-cusdis";

export default {
  components: { VueCusdis },
  data() {
    return {
      cusdisAppId: import.meta.env.VITE_CUSDIS_APP_ID,
    };
  },
};
</script>

<template>
  <vue-cusdis
    :attrs="{
      host: 'https://cusdis.com',
      appId: cusdisAppId,
      pageId: 'PAGE_ID',
    }"

    lang="fr"
  ></vue-cusdis>
</template>
