<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-card elevation="8" color="grey" dark class="d-flex">
          <v-icon :large="$vuetify.breakpoint.smAndUp" class="mr-3">mdi-account-group</v-icon>
          <v-spacer></v-spacer>
          <v-card-title class="text-h6 text-sm-h4"> کاربران </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card elevation="8" color="yellow darken-2" dark class="d-flex">
          <v-icon :large="$vuetify.breakpoint.smAndUp" class="mr-3">mdi-mail</v-icon>
          <v-spacer></v-spacer>
          <v-card-title class="text-h6 text-sm-h4">پیام ها</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card elevation="8" color="purple darken-2" dark class="d-flex">
          <v-icon :large="$vuetify.breakpoint.smAndUp" class="mr-3">mdi-cart</v-icon>
          <v-spacer></v-spacer>
          <v-card-title class="text-h6 text-sm-h4">سفارشات</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card elevation="8" color="blue darken-2" dark class="d-flex">
          <v-icon :large="$vuetify.breakpoint.smAndUp" class="mr-3">mdi-download</v-icon>
          <v-spacer></v-spacer>
          <v-card-title class="text-h6 text-sm-h4">دانلود ها</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="mt-5"></v-divider>

    <v-card>
      <v-card-title>
        <p class="text-h6 font-weight-bold">لیست کاربران</p>

        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" persistent max-width="390">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ml-4" color="primary" dark v-bind="attrs" v-on="on"> کاربر جدید </v-btn>
          </template>
          <v-card>
            <v-container>
              <v-card-title class="text-h5"> مشخصات کاربر جدید </v-card-title>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="newUserForm.name" placeholder="نام کاربر جدید"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="newUserForm.email" placeholder="ایمیل کاربر جدید"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="newUserForm.username" placeholder="نام کاربری کاربر جدید"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select v-model="newUserForm.gender" item-text="state" item-value="abbr" :items="genders" label="جنسیت"></v-select>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="dialog = false"> انصراف </v-btn>
                <v-btn color="green darken-1" text @click="addNewUser"> ثبت </v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-dialog>

        <v-text-field v-model="search" append-icon="mdi-magnify" label="جستجو"></v-text-field>
      </v-card-title>
      <v-data-table :search="searchText" :headers="headers" :items="users" :items-per-page="5" no-results-text="هیچ موردی یافت نشد">
        <template v-slot:header.gender="slotProps">
          {{ slotProps.header.text === "جنسیت" ? "جنسیت (مرد / زن)" : "جنس" }}
        </template>
        <template v-slot:item.name="slotProps">
          {{ slotProps.item.name.toUpperCase() }}
        </template>
        <template v-slot:item.email="slotProps">
          <span class="orange--text text--darken-4">{{ slotProps.item.email }}</span>
        </template>
        <template v-slot:item.gender="slotProps">
          <v-chip dark :color="slotProps.item.gender === 1 ? 'blue' : 'pink'">
            {{ slotProps.item.gender === 1 ? "مرد" : "زن" }}
          </v-chip>
        </template>
        <template v-slot:item.deleteIcon="slotProps">          
          <v-btn color="error" text v-on:click="removeUser(slotProps.item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
        <template v-slot:footer>
          <p class="text-center">Have Fun</p>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      search: "",
      searchText: "",
      dialog: false,
      genders: [
        { state: "مرد", abbr: 1 },
        { state: "زن", abbr: 2 },
      ],
      newUserForm: {
        name: "",
        username: "",
        gender: "",
        email: "",
      },
      headers: [
        { text: "ردیف", value: "id" },
        { text: "نام", value: "name" },
        { text: "ایمیل", value: "email" },
        { text: "یوزرنیم", value: "username" },
        { text: "جنسیت", value: "gender" },
        { text: "حذف", value: "deleteIcon" },
      ],
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          gender: 1,
          username: "Bret",
          email: "Sincere@april.biz",
        },
        {
          id: 2,
          name: "Ervin Howell",
          gender: 2,
          username: "Antonette",
          email: "Shanna@melissa.tv",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          gender: 1,
          username: "Samantha",
          email: "Nathan@yesenia.net",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          gender: 2,
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          gender: 1,
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
        },
        {
          id: 6,
          name: "Mrs. Dennis Schulist",
          gender: 2,
          username: "Leopoldo_Corkery",
          email: "Karley_Dach@jasper.info",
        },
        {
          id: 7,
          name: "Kurtis Weissnat",
          gender: 1,
          username: "Elwyn.Skiles",
          email: "Telly.Hoeger@billy.biz",
        },
        {
          id: 8,
          name: "Nicholas Runolfsdottir V",
          gender: 2,
          username: "Maxime_Nienow",
          email: "Sherwood@rosamond.me",
        },
        {
          id: 9,
          name: "Glenna Reichert",
          gender: 1,
          username: "Delphine",
          email: "Chaim_McDermott@dana.io",
        },
        {
          id: 10,
          name: "Clementina DuBuque",
          gender: 2,
          username: "Moriah.Stanton",
          email: "Rey.Padberg@karina.biz",
        },
      ],
    };
  },
  watch: {
    search(newValue, oldValue) {
      if (newValue === "مرد") {
        this.searchText = "1";
      } else if (newValue === "زن") {
        this.searchText = "2";
      } else {
        this.searchText = newValue;
      }
    },
  },
  components: {},
  methods : {
    addNewUser(){
      const id = Math.random();
      this.users.push({id,...this.newUserForm});
      this.dialog = false;
      this.newUserForm= {
        name: "",
        username: "",
        gender: "",
        email: "",
      }
    },
    removeUser(user){
      this.users = this.users.filter((item) => item.id !== user.id)
    }
  },

  created() {
    console.log(this.$route.fullPath);
  },
};
</script>

<style>
.active {
  color: #e65100;
}
</style>
