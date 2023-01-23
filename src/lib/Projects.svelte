<script lang="ts">
import lumisovellusPc from "../assets/lumisovellus_pc.png";
import lumisovellusMobile from "../assets/lumisovellus_mobile.png";
import VGSearch from "../assets/vgcollection_search.png";
import VGLibrary from "../assets/vgcollection_library.png";
import VGGame from "../assets/vgcollection_game.png";
import birdnest from "../assets/birdnest.png";
</script>

<div class="projects">
    <div class="projects-container">
        <h1 class="title"># Projects</h1>
        <div class="splatter"></div>
        <div class="project">
            <h1 class="name">Lumisovellus ❄️</h1>
            <h3 class="subtitle">School project</h3>
            <p class="description">
                I was a frontend developer on the Lumisovellus-project.
                The web app is used for recording snow
                information in the Pallas area. Project was a part of
                Tampere University's software engineering project -course. 
                The application is now maintained by
                Pallaksen Pöllöt and is actively used during the
                winter season by people moving around the Pallas
                fell area.
                <br>
                <br>
                Source code on 
                <a 
                    href="https://github.com/oona988/snowledge"
                    target="_blank"
                    rel="noreferrer noopener"
                >GitHub</a>
                <br>
                Website hosted 
                <a 
                    href="https://lumisovellus.fi" 
                    target="_blank" 
                    rel="noreferrer noopener"
                >here</a>
            </p>
            <h3>Technologies</h3>
            <ul>
                <li>JavaScript</li>
                <li>React ⚛️</li>
                <li>NodeJS</li>
                <li>MySQL 🐬</li>
            </ul>
            <br>
            <img src={lumisovellusMobile} alt="lumisovellus-mobile" class="mobile snowledge">
            <img src={lumisovellusPc} alt="lumisovellus-pc" class="pc">
        </div>
        <br>
        <br>
        <div class="project">
            <h1 class="name">Video game collection 🎮</h1>
            <h3 class="subtitle">Personal project</h3>
            <p class="description">
                A website for building and managing your video game collection. Includes a REST API
                build with Spring Boot and a front end made with Vue. Also has Meilisearch search
                engine database with over 60 000 video games published on Steam to search through
                and add to your collection. App authentication and access-control is impemented in a
                stateless manner with JWTs.
                <br>
                <br>
                Source code on 
                <a 
                    href="https://github.com/emilcalonius/game-collection-frontend"
                    target="_blank"
                    rel="noreferrer noopener"
                >GitHub</a>
                <br>
                Website hosted 
                <a 
                    href="https://calonius.me/game-collection-frontend" 
                    target="_blank" 
                    rel="noreferrer noopener"
                >here</a>
            </p>
            <h3>Technologies</h3>
            <ul>
                <li>TypeScript</li>
                <li>VueJS</li>
                <li>Java ☕</li>
                <li>Spring boot 🍃</li>
                <li>PostgreSQL 🐘</li>
            </ul>
            <br>
            <img src={VGSearch} alt="Video Game Collection search" class="mobile">
            <img src={VGLibrary} alt="Video Game Collection library" class="mobile">
            <img src={VGGame} alt="Video Game Collection game info" class="mobile">
        </div>
        <br>
        <br>
        <div class="project">
            <h1 class="name">Drone radar 📡</h1>
            <h3 class="subtitle">Personal project</h3>
            <p class="description">
                Application for monitoring drone traffic near the nest of an endangered bird species 
                and keeping track of pilots violating the no drone zone around the nest. 
                Simulated drone positions are fetched from an external API maintained by Reaktor. 
                Violations are persisted in the backend for 10 minutes.
                Frontend developed using Vue and backend made with Node.
                <br>
                <br>
                Source code on 
                <a 
                    href="https://github.com/emilcalonius/birdnest"
                    target="_blank"
                    rel="noreferrer noopener"
                >GitHub</a>
                <br>
                Website hosted 
                <a 
                    href="https://calonius.me/birdnest" 
                    target="_blank" 
                    rel="noreferrer noopener"
                >here</a>
            </p>
            <h3>Technologies</h3>
            <ul>
                <li>TypeScript</li>
                <li>VueJS</li>
                <li>NodeJS 🐘</li>
            </ul>
            <br>
            <img src={birdnest} alt="birdnest" class="pc">
        </div>
    </div>
</div>

<style scoped>
.projects {
    min-height: 100vh;
    width: 100%;
    background-color: hsl(225, 15%, 95%);
    padding: 2rem;
}

.projects-container {
    padding: 2rem;
    max-width: 1280px;
    margin: 0 auto;
}

h1, h3, p, li {
    color: hsl(225, 11%, 15%);
}

.subtitle {
    color: var(--ec-green-dark);
}

.splatter {
    background-image: linear-gradient(45deg, 
        var(--ec-pink), var(--ec-green-dark));
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

.mobile {
    max-width: 15rem;
}

.pc {
    max-width: 25rem;
}

.snowledge {
    border-right: 1px solid black;
}

@media screen and (max-width: 500px) {
    .pc {
        max-width: 15rem;
    }

    .projects {
        overflow: hidden;
    }

    .name {
        font-size: 1.5rem;
    }

    .subtitle {
        font-size: 1rem;
    }
}
</style>