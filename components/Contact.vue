<script setup>
import { EnvelopeIcon, PaperClipIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <section class="contact-section">
    <div class="contact-section-width">
      <div>
        <div class="img-container">
          <div>
            <img
              src="/undraw_personal_email.svg"
              alt="personal email svg"
              width="890"
              height="730"
            />
          </div>
        </div>
        <div class="details-cta-container">
          <div>
            <h2>Get in touch with me</h2>
            <p>
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question, want to work
              together or just want to say hi, I’ll try my best to get back to
              you!
            </p>
          </div>
          <div>
            <a href="mailto:uriel.dqaa@gmail.com"> <EnvelopeIcon /> Say Hello! </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
