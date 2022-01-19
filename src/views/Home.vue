<template>
  <v-container class="mt-8">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          مواردی که باید برای سایت انجام دهید...
          <template v-slot:actions>
            <v-icon color="primary"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <ul  class="mr-8">
            <li>تسریع در بازیابی تصاویر استفاده شده در سایت</li>
            <li>استفاده از قابلیت Lazy Loading برای تصاویر سایت</li>
            <li>استفاده از پلاگین مطلوب برای فشرده سازی عکس های با حجم بالای موجود در سایت</li>
            <li>استفاده از قابلیت Lazy Loading برای تصاویر سایت</li>
            <li>استفاده از پلاگین مطلوب برای فشرده سازی عکس های با حجم بالای موجود در سایت</li>
            <li>تسریع در بازیابی تصاویر استفاده شده در سایت</li>
            <li>تسریع در بازیابی تصاویر استفاده شده در سایت</li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          موارد حیاتی که برای سایت انجام شده است...
          <template v-slot:actions>
            <v-icon color="teal"> mdi-check </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <ul  class="mr-8">
            <li>تسریع در بازیابی تصاویر استفاده شده در سایت</li>
            <li>استفاده از قابلیت Lazy Loading برای تصاویر سایت</li>
            <li>استفاده از پلاگین مطلوب برای فشرده سازی عکس های با حجم بالای موجود در سایت</li>
            <li>استفاده از قابلیت Lazy Loading برای تصاویر سایت</li>
            <li>استفاده از پلاگین مطلوب برای فشرده سازی عکس های با حجم بالای موجود در سایت</li>
            <li>تسریع در بازیابی تصاویر استفاده شده در سایت</li>
            <li>تسریع در بازیابی تصاویر استفاده شده در سایت</li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          موارد حیاتی که برای سایت انجام نشده است...
          <template v-slot:actions>
            <v-icon color="error"> mdi-alert-circle </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <ul  class="mr-8">
            <li>تسریع در بازیابی تصاویر استفاده شده در سایت</li>
            <li>استفاده از قابلیت Lazy Loading برای تصاویر سایت</li>
            <li>استفاده از پلاگین مطلوب برای فشرده سازی عکس های با حجم بالای موجود در سایت</li>
            <li>استفاده از قابلیت Lazy Loading برای تصاویر سایت</li>
            <li>استفاده از پلاگین مطلوب برای فشرده سازی عکس های با حجم بالای موجود در سایت</li>
            <li>تسریع در بازیابی تصاویر استفاده شده در سایت</li>
            <li>تسریع در بازیابی تصاویر استفاده شده در سایت</li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-row class="mt-8">
      <v-col
        cols="12"
        md="4"
      >
        <v-skeleton-loader
          v-bind="attrs"
          type="article, actions"
        ></v-skeleton-loader>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
    }),
  }
</script>

<style></style>
