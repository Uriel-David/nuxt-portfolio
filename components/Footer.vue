<script setup>
// utils and hooks
const { navigation } = useConstants();
const CURRENT_YEAR = new Date().getFullYear();
</script>

<template>
  <div class="footer-section">
    <footer>
      <div class="social-icons-and-navigation">
        <!-- social - start -->
        <div>
          <a href="https://www.instagram.com/_uriel_david_/" aria-label="Instagram" target="_blank" class="footerIcon">
            <IconsInstaIcon />
          </a>

          <a href="https://www.facebook.com/uriel.david.963" aria-label="Facebook" target="_blank" class="footerIcon">
            <IconsFacebookIcon />
          </a>

          <a href="https://www.linkedin.com/in/uriel-david/" aria-label="Linkden" target="_blank" class="footerIcon">
            <IconsLinkedInIcon />
          </a>

          <a href="https://github.com/Uriel-David" aria-label="Github" target="_blank" class="footerIcon">
            <IconsGithubIcon />
          </a>
        </div>
        <!-- social - end -->
      </div>

      <div class="copyright">
        © {{ CURRENT_YEAR }} - Present Uriel David. All rights reserved.
      </div>
    </footer>
  </div>
</template>
