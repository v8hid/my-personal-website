<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :color="styleVariables.menuColor"
      mini-variant
      expand-on-hover
      app
      dark
      mobile-breakpoint="xs"
    >
      <v-list
        dense
        nav
        class="py-0"
      >
        <v-list-item two-line class=" px-0">
          <v-list-item-avatar>
            <i class="fab fa-vine fa-2x"></i>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Vahid Khorasani-nejad</v-list-item-title>
            <v-list-item-subtitle>Software Developer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
          nuxt
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="styleVariables.menuColor"
      dark
      v-if="$vuetify.breakpoint.xs"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
      return {
        drawer: null,
        items: [
          { title: 'About Me', icon: 'mdi-account-question', link:'about' },
          { title: 'Resume', icon: 'mdi-briefcase-variant', link:'resume' },
          { title: 'Portfolio', icon: 'mdi-file-multiple', link:'portfolio' },
          { title: 'Contact Me', icon: 'mdi-card-account-mail', link:'contact me' },
        ],
        styleVariables: this.$store.state.styles.variables,

      };
    },
    computed: {
    },
    methods: {

    },
    created(){
    }
};
</script>
