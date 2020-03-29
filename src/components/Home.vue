<template>
  <div>
    <v-toolbar dark color="teal">
      <button @click.prevent="logout">Logout</button>
    </v-toolbar>
    <v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async logout () {
      await this.$auth.logout()
      this.$router.push('/')
    }
  }
}
</script>
