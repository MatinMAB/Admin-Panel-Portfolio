<template>
  <div>
    <v-container class="mt-16">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="30" :rules="nameRules" label="نام" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="ایمیل" required></v-text-field>

        <v-select v-model="select" :items="items" :rules="[(v) => !!v || 'انتخاب این فیلد ضروری است']" label="زبان مورد علاقه" required></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'این فیلد پر نشده است']"
          label="موافق تغییرات اعمال شده بر روی حساب کاربری خود هستم"
          required
        ></v-checkbox>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"> ذخیره </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> پاک کردن اطلاعات </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "متین",
    nameRules: [(v) => !!v || "وارد کردن نام ضروری است", (v) => (v && v.length <= 30) || "تعداد حروف نام شما باید کمتر از 30 واحد باشد"],
    email: "Matinmab789@gmail.com",
    emailRules: [(v) => !!v || "وارد کردن ایمیل ضروری است", (v) => /.+@.+\..+/.test(v) || "ایمیل وارد شده باید معتبر باشد"],
    select: "جاوا اسکریپت",
    items: ["جاوا اسکریپت", "پایتون", "جاوا", "پی اچ پی"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
