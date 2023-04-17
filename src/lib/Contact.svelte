<script lang="ts">
  import email from "../assets/email.png";
  import linkedin from "../assets/linkedin.png";
</script>

<div class="contact">
  <div class="contact-wrapper">
    <h1 class="title">Contact me:</h1>
    <div class="links">
      <a
        href="https://www.linkedin.com/in/emilcalonius/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img class="link" src={linkedin} alt="LinkedIn" />
      </a>
      <a href = "mailto: emil.calonius@gmail.com">
        <img class="link" src={email} alt="Email" />
      </a>
    </div>
  </div>
  <div class="copyright">© 2023 Emil Calonius</div>
</div>

<style scoped>
  .contact {
    background: rgb(22, 22, 22);
    padding: 2rem;
  }

  .contact-wrapper {
    display: flex;
    gap: 2rem;
    align-items: center;
    padding-bottom: 2rem;
  }

  .links {
    display: flex;
    gap: 1rem;
  }

  .link {
    width: 2.5rem;
  }

  @media screen and (max-width: 1000px) {
    .contact-wrapper {
      display: block;
    }
  }
</style>
