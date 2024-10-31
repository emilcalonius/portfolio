<script lang="ts">
  import snow1 from '../assets/snowledge_1.png'
  import snow2 from '../assets/snowledge_2.png'
  import snow3 from '../assets/snowledge_3.png'
  import snow4 from '../assets/snowledge_4.png'
  import snow5 from '../assets/snowledge_5.png'
  import snow6 from '../assets/snowledge_6.png'

  import vg1 from '../assets/vg_1.png'
  import vg2 from '../assets/vg_2.png'
  import vg3 from '../assets/vg_3.png'
  import vg4 from '../assets/vg_4.png'
  import vg5 from '../assets/vg_5.png'
  import vg6 from '../assets/vg_6.png'

  import birdnest1 from '../assets/birdnest_1.png'
  import birdnest2 from '../assets/birdnest_2.png'

  import { Splide, SplideSlide } from '@splidejs/svelte-splide'
  import '@splidejs/svelte-splide/css'

  import { inview } from 'svelte-inview'
  import { fade } from 'svelte/transition'

  let snowledgeInView: boolean
  let vgCollectionInView: boolean
  let birdnestInView: boolean

  const snow_images = [snow2, snow1, snow5, snow6, snow3, snow4]
  const vg_images = [vg1, vg2, vg3, vg4, vg5, vg6]
  const bird_images = [birdnest1, birdnest2]
</script>

<div class="projects">
  <div class="projects-container">
    <h1 class="title"># Projects</h1>
    <div class="splatter" />
    <div
      class="project-wrapper"
      use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
      on:change={({ detail }) => {
        snowledgeInView = detail.inView
      }}
    >
      {#if snowledgeInView}
        <div
          class="project"
          in:fade
        >
          <div class="info">
            <h1 class="name">Lumisovellus ❄️</h1>
            <h3 class="subtitle">School project | Autumn 2021</h3>
            <p class="description">
              I was a frontend developer on the Lumisovellus-project. The web
              app is used for recording snow information in the Pallas area.
              Project was a part of Tampere University's software engineering
              project -course. The application is now maintained by Pallaksen
              Pöllöt and is actively used during the winter season by people
              moving around the Pallas fell area.
              <br />
              <br />
              Source code on
              <a
                href="https://github.com/oona988/snowledge"
                target="_blank"
                rel="noreferrer noopener">github.com/oona988/snowledge</a
              >
              <br />
              Website hosted at
              <a
                href="https://lumisovellus.fi"
                target="_blank"
                rel="noreferrer noopener">lumisovellus.fi</a
              >
            </p>
            <h3>Technologies</h3>
            <ul>
              <li>JavaScript</li>
              <li>React ⚛️</li>
              <li>NodeJS</li>
              <li>MySQL 🐬</li>
            </ul>
            <br />
          </div>
          <Splide
            aria-label="Project Images"
            options={{
              width: '20rem',
              height: '33.3rem',
              perPage: 1,
              type: 'slide',
              lazyLoad: true,
              wheel: true,
            }}
          >
            {#each snow_images as imageUrl, index}
              <SplideSlide>
                <img
                  src={imageUrl}
                  alt={`Slide ${index + 1}`}
                  class="image"
                />
              </SplideSlide>
            {/each}
          </Splide>
        </div>
      {/if}
    </div>
    <br />
    <br />
    <div
      class="project-wrapper"
      use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
      on:change={({ detail }) => {
        vgCollectionInView = detail.inView
      }}
    >
      {#if vgCollectionInView}
        <div
          class="project"
          in:fade
        >
          <div class="info">
            <h1 class="name">Video game collection 🎮</h1>
            <h3 class="subtitle">Personal project | 2022</h3>
            <p class="description">
              A website for building and managing your video game collection.
              Includes a REST API built with Spring Boot and a front end made
              with Vue. Also has Meilisearch search engine database with over 60
              000 video games published on Steam to search through and add to
              your collection. App authentication and access-control is
              impemented in a stateless manner with JWTs.
              <br />
              <br />
              Source code on
              <a
                href="https://github.com/emilcalonius/game-collection-frontend"
                target="_blank"
                rel="noreferrer noopener"
                >github.com/emilcalonius/game-collection-frontend</a
              >
            </p>
            <h3>Technologies</h3>
            <ul>
              <li>TypeScript</li>
              <li>VueJS</li>
              <li>Java ☕</li>
              <li>Spring boot 🍃</li>
              <li>PostgreSQL 🐘</li>
            </ul>
            <br />
          </div>
          <Splide
            aria-label="Project Images"
            options={{
              width: '20rem',
              height: '36rem',
              perPage: 1,
              type: 'slide',
              lazyLoad: true,
              wheel: true,
            }}
          >
            {#each vg_images as imageUrl, index}
              <SplideSlide>
                <img
                  src={imageUrl}
                  alt={`Slide ${index + 1}`}
                  class="image"
                />
              </SplideSlide>
            {/each}
          </Splide>
        </div>
      {/if}
    </div>
    <br />
    <br />
    <div
      class="project-wrapper"
      use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
      on:change={({ detail }) => {
        birdnestInView = detail.inView
      }}
    >
      {#if birdnestInView}
        <div
          class="project"
          in:fade
        >
          <div class="info">
            <h1 class="name">Drone radar 📡</h1>
            <h3 class="subtitle">Personal project | 2022</h3>
            <p class="description">
              Application for monitoring drone traffic near the nest of an
              endangered bird species and keeping track of pilots violating the
              no drone zone around the nest. Simulated drone positions are
              fetched from an external API maintained by Reaktor. Violations are
              persisted in the backend for 10 minutes. Frontend developed using
              Vue and backend made with Node.
              <br />
              <br />
              Source code on
              <a
                href="https://github.com/emilcalonius/birdnest"
                target="_blank"
                rel="noreferrer noopener">github.com/emilcalonius/birdnest</a
              >
            </p>
            <h3>Technologies</h3>
            <ul>
              <li>TypeScript</li>
              <li>VueJS</li>
              <li>NodeJS</li>
            </ul>
            <br />
          </div>
          <Splide
            aria-label="Project Images"
            options={{
              width: '20rem',
              height: '36rem',
              perPage: 1,
              type: 'slide',
              lazyLoad: true,
              wheel: true,
            }}
          >
            {#each bird_images as imageUrl, index}
              <SplideSlide>
                <img
                  src={imageUrl}
                  alt={`Slide ${index + 1}`}
                  class="image"
                />
              </SplideSlide>
            {/each}
          </Splide>
        </div>
      {/if}
    </div>
  </div>
</div>

<style scoped>
  .projects {
    min-height: 100vh;
    width: 100%;
    background-color: hsl(225, 15%, 95%);
    padding: 1rem;
    overflow: hidden;
  }

  .projects-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  h1,
  h3,
  p,
  li {
    color: hsl(225, 11%, 15%);
  }

  .subtitle {
    color: var(--ec-green-dark);
  }

  .splatter {
    background-image: linear-gradient(
      45deg,
      var(--ec-pink),
      var(--ec-green-dark)
    );
    width: 10rem;
    height: 10rem;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: translate(100%, -70%);
  }

  .title {
    font-size: 3rem;
    position: relative;
    z-index: 1;
  }

  .image {
    width: 20rem;
  }

  .project-wrapper {
    min-height: 20rem;
  }

  @media screen and (min-width: 1000px) {
    .project {
      display: flex;
      gap: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    .name {
      font-size: 1.5rem;
    }
    .subtitle {
      font-size: 1rem;
    }
  }
</style>
