<script lang="ts">
  import schoolIcon from '../assets/school.png';
  import workIcon from '../assets/work.png';

  import { inview } from 'svelte-inview';
  import { fly } from 'svelte/transition';

  let inView1: boolean;
  let inView2: boolean;
  let inView3: boolean;

  let w: number;
</script>

<div class="experience">
  <div class="experience-container">
    <div class="header">
      <div class="line"></div>
      <h1 class="title"># Experience</h1>
      <div class="line"></div>
    </div>
    <div class="timeline">
      <div class="text-box left" >
        <div 
          class="info-wrapper"
          use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
          on:change={({ detail }) => {
            inView1 = detail.inView;
          }}
        >
        <img class="icon" src={workIcon} alt="Work Icon">
          {#if inView1}
          <div class="info" in:fly={{x: w > 1000 ? -500 : 500, duration: 500}}>
            <h1 class="name">Sofia Digital Oy</h1>
            <h3 class="time">April 2023 - present</h3>
            <h2 class="job">Smart TV developer</h2>
          </div>
          {/if}
        </div>
      </div>
      <div 
        class="text-box right">
        <div 
          class="info-wrapper"
          use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
          on:change={({ detail }) => {
            inView2 = detail.inView;
          }}
        >
        <img class="icon" src={workIcon} alt="Work Icon">
          {#if inView2}
          <div class="info" in:fly={{x: 500, duration: 500}}>
            <h1 class="name">Experis Academy Finland</h1>
            <h3 class="time">August 2022 - February 2023</h3>
            <h2 class="job">Java Full Stack Developer</h2>
            <p class="description">
              The Experis Academy program consists of two stages. 
              First a three-month accelerated learning period focusing on
              backend development with Java and frontend development with modern JavaScript frameworks.
              After the learning period work continues as a software development consultant with Experis.
            </p>
          </div>
          {/if}
        </div>
      </div>
      <div 
        class="text-box left">
        <div 
          class="info-wrapper"
          use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
          on:change={({ detail }) => {
            inView3 = detail.inView;
          }}
        >
        <img class="icon" src={schoolIcon} alt="School Icon">
          {#if inView3}
          <div class="info" in:fly={{x: w > 1000 ? -500 : 500, duration: 500}}>
            <h1 class="name">University of Tampere</h1>
            <h3 class="time">August 2018 - June 2022</h3>
            <h2 class="job">Bachelor of Science - Computer Science</h2>
          </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>

<svelte:window bind:innerWidth={w} />

<style scoped>
  .experience {
    padding: 1rem;
    padding-top: 2rem;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    margin-bottom: 2rem;
  }

  .experience-container {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .title {
    font-size: 3rem;
    position: relative;
    z-index: 1;
    color: #242424;
    background: linear-gradient(-90deg, var(--ec-green-dark), var(--ec-pink), var(--ec-green-dark), var(--ec-pink));
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    padding: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 10px;
  }

  .line {
    height: .5rem;
    width: 250%;
    transform: translateX(-25%);
    background: linear-gradient(-90deg, var(--ec-green-dark), var(--ec-pink), var(--ec-green-dark), var(--ec-pink));
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
  }

  .timeline {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 2rem;
    width: 100%
  }

  .timeline::after {
    content: '';
    position: absolute;
    width: 0.5rem;
    height: 95%;
    background: var(--ec-pink);
    top: 2rem;
    left: 50%;
    margin-left: 1rem;
    z-index: -1;
    border-radius: 10px;
  }

  .info {
    background: hsl(225, 15%, 95%);
    padding: 1rem;
    border-radius: 10px;
    width: 100%;
  }

  .info-wrapper {
    width: 80%;
    max-width: 60vw;
  }

  .text-box {
    padding: 1rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
    background: transparent;
    color: #242424;
    width: 50%;
    min-height: 20rem;
    position: relative;
  }

  .text-box h1, h2, h3, p {
    display: flex;
    justify-content: center;
  }

  .left {
    left: 0%;
  }

  .right {
    left: 50%;
  }

  .icon {
    position: absolute;
    border-radius: 50%;
    border: 5px solid var(--ec-pink);
    background: #242424;
    overflow: visible;
    padding: 1rem;
    width: 3rem;
    box-sizing: content-box;
    right: -3rem;
    top: 3.5rem;
  }

  .right .icon {
    left: -2.5rem;
  }

  @media screen and (max-width: 1000px) {
    .title {
      font-size: 2.5rem;
    }
    .name {
      font-size: 1.5rem;
    }
    .timeline::after {
      left: 1rem;
      height: 95%;
    }
    .text-box {
      width: 100%;
      left: 0;
    }
    .icon {
      left: -3.5rem;
    }
    .right .icon {
      left: -3.5rem;
    }
    .info-wrapper {
      width: 100%;
      margin-left: 2rem;
    }
    .experience-container {
      gap: 0.5rem;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>