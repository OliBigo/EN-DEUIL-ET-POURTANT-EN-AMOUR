<script>
// For Vue 3
import VueCusdis from "vue-cusdis";

export default {
  components: { VueCusdis },
};
</script>

<template>
  <vue-cusdis
    :attrs="{
      host: 'https://cusdis.com',
      appId: 'a4c1a578-c94a-4c7f-8936-00c2b9e1a492',
      pageId: 'PAGE_ID',
    }"

    lang="fr"
  ></vue-cusdis>
</template>
