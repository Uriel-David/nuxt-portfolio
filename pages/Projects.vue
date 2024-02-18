<script setup>
//const
const { projects } = useConstants();
useHead({
  title: "Software Engineer Portfolio | Personal Projects",
  meta: [
    {
      property: "og:title",
      content: "Software Engineer Portfolio | Personal Projects",
    },
    {
      property: "og:site_name",
      content: "Software Engineer Portfolio | Personal Projects",
    },
    {
      property: "og:site",
      content: "https://www.uriel-portfolio.com/projects",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <ProjectSection :projects="projects" />
  </NuxtLayout>
</template>
