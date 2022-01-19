<template>
  <v-app>
    <v-app-bar elevation="8" app color="orange darken-4" dark>
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>داشبورد</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$router.push('/')">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app right>
      <template v-slot:prepend>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>ادمین</v-list-item-title>
            <v-list-item-subtitle>حساب کاربری</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon color="orange darken-4">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="pointer" :class="{ active: $route.fullPath === item.path }" @click="$router.push(item.path)">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="mx-3 my-3">
          <v-btn color="orange darken-4" dark block @click="$router.push('/')">خروج</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <!-- <v-footer bottom color="orange darken-4">
      <v-row justify="center">
        <v-btn text >تمامی حقوق این سایت محفوظ می باشد.</v-btn>
      </v-row>
    </v-footer> -->

    <v-footer padless color="orange darken-4" dark app>
      <v-col class="text-center" cols="12"> {{ new Date().getFullYear() }} — <strong>Vuetify</strong> </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "خانه", icon: "mdi-home-city", path: "/dashboard" },
        { title: "حساب من", icon: "mdi-account", path: "/dashboard/my-account" },
        { title: "کاربران", icon: "mdi-account-group-outline", path: "/dashboard/users" },
      ],
    };
  },
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
