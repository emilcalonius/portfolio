<script lang="ts">
  import email from "../assets/email.png";
  import linkedin from "../assets/linkedin.png";
</script>

<div class="contact">
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

<style scoped>
  .contact {
    background: rgb(22, 22, 22);
    padding: 2rem;
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .links {
    display: flex;
    gap: 1rem;
  }

  .link {
    width: 2.5rem;
  }
</style>
