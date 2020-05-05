<template>
  <v-footer class="pa-3 white--text" color="black" absolute>
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 white--text"
        icon
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </div>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
