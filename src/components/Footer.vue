<template>
  <v-footer class="pa-3 white--text" color="black" absolute>
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.media"
        class="mx-4 white--text"
        icon
      >
        <v-icon @click="goToSocialMedia(icon.url)">{{ icon.media }}</v-icon>
      </v-btn>
    </div>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        { media: 'mdi-facebook', url: 'https://www.facebook.com/' },
        { media: 'mdi-twitter', url: 'https://www.twitter.com/' },
        { media: 'mdi-linkedin', url: 'https://www.linkedin.com/' },
        { media: 'mdi-instagram', url: 'https://instagram.com' }
      ],
    }),

    methods: {
      goToSocialMedia(url) {
        window.open(url);
      }
    }
  }
</script>
