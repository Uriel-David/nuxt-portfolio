<script setup>
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Software Engineer Portfolio | Uriel David",
  author: {
    "@type": "Person",
    "@id": "#urieldavid",
  },
  url: "https://www.uriel-portfolio.com/",
  description:
    "Personal Portfolio Website. Hi, Uriel David. I'm a Software Engineer based in Porto, Portugal. Currently focused on developing website/products using PHP/Laravel - Vue/React. Checkout my projects and github repositories",
  keywords:
    "Web Developer, Full Stack Developer, Full-Stack Developer, Software Engineer, Senior Software Developer, Uriel David, Uriel, zinrax, Portugal",
  image: "https://www.uriel-portfolio.com/profile-pics/profile.webp",
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#urieldavid",
  name: "Uriel David",
  email: "uriel.dqaa@gmail.com",
  url: "https://www.uriel-portfolio.com/",
};
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: "application/ld+json",
    },
    {
      children: JSON.stringify(personJson),
      type: "application/ld+json",
    },
  ],
});
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="main">
    <Header />
  </NuxtLayout>
</template>
