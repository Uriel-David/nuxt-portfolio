<script setup>
import gsap from "gsap";

onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".leftText",
      start: "top center",
      end: "top center",
    },
  });
  tl.addLabel("start")
    .from(".leftText", { opacity: 0, translateX: "-100px" })
    .addLabel("entering")
    .to(".leftText", { opacity: 1, translateX: "0px", duration: 1 })
    .addLabel("end");

  let imgTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".right-img-container",
      start: "top center",
      end: "top center",
    },
  });
  imgTl
    .addLabel("start")
    .from(".right-img-container", { opacity: 0, translateX: "100px" })
    .addLabel("entering")
    .to(".right-img-container", {
      opacity: 1,
      translateX: "0px",
      duration: 1,
    })
    .addLabel("end");
});
</script>

<template>
  <section id="about"
    class="overflow-x-hidden flex items-center bg-white py-8 2xl:pb-10 md:py-20 lg:py-0 dark:bg-[#121212]">
    <div class="px-6 mx-auto md:w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
      <div class="items-center justify-between lg:flex lg:space-x-10">
        <div class="lg:w-7/12 leftText">
          <h2 class="profile-title">Who am I?</h2>
          <div class="profile-description-container">
            <p>
              I have 5 years of experience in IT. I have already worked on projects in several areas, such as Education, Health, Retail, among others. I have partial training in Computer Science and Mathematics, in addition to specific courses in the area of professional training, as a developer and systems/network administrator.

              Currently living in Europe, I'm working on international projects focusing mainly on web/mobile development, but always looking for new challenges and knowledge.
            </p>

            <p>
              I'm passionate in learning new technologies, building responsive
              websites, and documenting my working process when it comes to
              complicated features.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <div class="summary-skill-list-container">
            <ul>
              <li>PHP/Laravel</li>
              <li>Node.js</li>
              <li>AWS</li>
            </ul>
            <ul>
              <li>React/React-Native</li>
              <li>Vue.js/Nuxt.js</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div class="profile-social-icons">
            <a href="https://www.instagram.com/_uriel_david_/" aria-label="Instagram" target="blank">
              <IconsInstaIcon />
            </a>

            <a href="https://www.facebook.com/uriel.david.963" aria-label="Facebook" target="blank">
              <IconsFacebookIcon />
            </a>

            <a href="https://www.linkedin.com/in/uriel-david/" aria-label="Linkden" target="blank">
              <IconsLinkedInIcon />
            </a>

            <a href="https://github.com/Uriel-David" aria-label="Github" target="blank">
              <IconsGithubIcon />
            </a>

            <a class="resume" href="resume/my-resume.pdf" aria-label="my-resume" download> Download my resume here! </a>
          </div>
        </div>

        <div class="mt-8 lg:mt-0 lg:w-4/12 xl:w-4/12 right-img-container">
          <div class="flex items-center justify-center lg:justify-end group">
            <div class="profile-img-container">
              <img src="/profile-pics/profile.webp" width="350" height="350" alt="profile image" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
  section {
    height: calc(100vh - 227px);
  }
}
</style>
