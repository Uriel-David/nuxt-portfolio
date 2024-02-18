<script setup>
//const
const { timeline } = useConstants();
useHead({
  title: "Software Engineer Portfolio | Career Journey",
  meta: [
    {
      property: "og:title",
      content: "Software Engineer Portfolio | Career Journey",
    },
    {
      property: "og:site_name",
      content: "Software Engineer Portfolio | Career Journey",
    },
    {
      property: "og:site",
      content: "https://www.uriel-portfolio.com/timeline",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default"
    ><TimelineSection :timeline="timeline"
  /></NuxtLayout>
</template>
