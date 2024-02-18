<script setup>
//const
const { skillWithLogo } = useConstants();
useHead({
  title: "Software Engineer Portfolio | Skills",
  meta: [
    {
      property: "og:title",
      content: "Software Engineer Portfolio | Skills",
    },
    {
      property: "og:site_name",
      content: "Software Engineer Portfolio | Skills",
    },
    {
      property: "og:site",
      content: "https://www.uriel-portfolio.com/skills",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <Skills :skill-set="skillWithLogo" />
  </NuxtLayout>
</template>
