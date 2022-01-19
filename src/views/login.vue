<template>
  <v-card class="mx-auto" max-width="450" outlined elevation="4">
    <v-card-title> فرم ورود </v-card-title>
    
    <v-form v-model="validate" ref="loginForm">
      <v-container>
      <v-text-field
        solo
        label="ایمیل"
        prepend-inner-icon="mdi-mail"
        v-model="form.email"
        :rules="[
        (value) => requiredField(value,'ایمیل'), 
        (value) => checkEmail(value)
        ]"
      ></v-text-field>
    </v-container>
    <v-container>
      <v-text-field
        :type="showPass ? 'text' : 'password'"
        solo
        label="پسورد"
        prepend-inner-icon="mdi-key"
        v-model="form.password"
        :rules="[
        (value) => requiredField(value,'رمز عبور'), 
        (value) => passwordLength(value,'رمز عبور')
        ]"
        v-on:click:prepend-inner="showPass = !showPass"
      ></v-text-field>
    </v-container>

    <div class="d-flex">
      <v-card-actions>
      <v-btn depressed color="primary" v-on:click="submitForm" :loading="loading" :disabled="disabledBtn"> ارسال </v-btn>
    </v-card-actions>
    <v-spacer></v-spacer>
    <v-card-actions>
      <v-btn depressed color="primary" v-on:click="$router.push('/dashboard')" > ورود مستقیم به پنل ادمین </v-btn>
    </v-card-actions>
    </div>
    </v-form>
    
  </v-card>
</template>
<script>

const requiredField = (value,field) => !!value || "فیلد " + field +" الزامی است";
const checkEmail = (value) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  ) || "لطفا یک ایمیل معتبر وارد کنید";
const passwordLength = (value,field) => value.length > 7 || 'فیلد ' + field + ' از 8 کاراکتر نمی تواند کمتر باشد'


export default {
  data() {
    return {
      showPass: false,
      form: {
        email: "",
        password: "",
      },
      loading: false,
      requiredField,
      checkEmail,
      passwordLength,
      validate : true,
    };
  },

  computed : {
    disabledBtn() {
      return this.loading || !this.validate;     
    },
  },

  methods: {
    submitForm() {
      if(this.$refs.loginForm.validate()){
      this.loading = true;
      localStorage.setItem("user", JSON.stringify(this.form));

      setTimeout(() => {
        this.loading = false;
        this.$router.push({name : 'Dashboard'});
      }, 2000);
      
      
      }
    },
  },
};
</script>

<style></style>
