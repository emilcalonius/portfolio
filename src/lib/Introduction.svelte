<script lang="ts">
import portrait from "../assets/portrait.jpg";
import github from "../assets/github.png";
import gitlab from "../assets/gitlab.png";
import linkedin from "../assets/linkedin.png";
</script>

<div class="introduction">
    <div class="profile">
        <div class="portrait-border">
            <div class="portrait">
                <img class="portrait-img" src={portrait} alt="portrait">
            </div>
        </div>
        <div class="text-container">
            <div class="title">
                <h1 class="title-text">Hi, </h1>
                <h1 class="title-text">I'm </h1>
                <h1 class="name">Emil Calonius</h1>
                <h1 class="title-text"> | </h1>
                <h1 class="name">Full Stack</h1>
                <h1 class="title-text"> developer</h1>
            </div>
            <div class="links">
                <a 
                    href="https://github.com/emilcalonius" 
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img class="link" src={github} alt="GitHub">
                </a>
                <a 
                    href="https://gitlab.com/emilcalonius" 
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img class="link" src={gitlab} alt="GitLab">
                </a>
                <a 
                    href="https://www.linkedin.com/in/emilcalonius/" 
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img class="link" src={linkedin} alt="LinkedIn">
                </a>
            </div>
            <p class="bio">
                I am an aspiring web developer, who loves
                problem solving and seeing the work I do
                affect peoples lives positively. Making modern, responsive 
                and practical web applications is my passion! 🔥
            </p>
            <p class="bio">
                I like to keep up with new technologies and constantly improving 
                my skills keeps me motivated. 
                Take a look at my experience and projects below. ⬇️
            </p>
        </div>
    </div>
</div>

<style scoped>
.title {
    display: flex;
    column-gap: 1rem;
    flex-wrap: wrap;
    cursor: default;
}

.title-text {
    display: flex;
    height: 5rem;
    font-size: 3rem;
    font-family: Inter;
    align-items: center;
    margin: 0;
}

.name {
    display: flex;
    height: 5rem;
    font-size: 4rem;
    font-family: Inter;
    align-items: center;
    background-image: linear-gradient(90deg, 
        var(--ec-pink), var(--ec-green-dark), var(--ec-pink), var(--ec-green-dark));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 300%;
    background-position: left;
    transition: background-position 1.5s;
    margin: 0;
}

.name:hover {
    background-position: right;
}

.profile {
    display: flex;
    gap: 2rem;
    flex-direction: column;

}

.introduction {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    place-items: center;
    height: 100vh;
    padding: 2rem;
    max-width: 1280px;
    margin: 0 auto;
}

.portrait-img {
    width: 20rem;
}

.portrait {
    overflow: hidden;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
}

.portrait-border {
    display: flex;
    place-items: center;
    justify-content: center;
    min-width: 22rem;
    min-height: 22rem;
    max-width: 22rem;
    max-height: 22rem;
    background-image: linear-gradient(90deg, 
        var(--ec-pink), var(--ec-green-dark), var(--ec-pink), var(--ec-green-dark));
    border-radius: 50%;
    background-size: 300%;
    background-position: left;
    transition: background-position 1.5s;
}

.portrait-border:hover {
    background-position: right;
}

.bio {
    font-size: large;
    text-align: left;
    font-weight: lighter;
    font-family: sans-serif;
}

.text-container {
    max-width: 35rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

p {
    margin: 0;
}

.links {
    display: flex;
    gap: 1rem;
}

.link {
    width: 2.5rem;
}

@media screen and (min-width: 1280px) {
    .profile {
        flex-direction: row;
    }
}

@media screen and (max-width: 500px) {
    .name {
        font-size: 3rem;
    }

    .title-text {
        font-size: 2rem;
    }
}

@media screen and (max-height: 1000px) {
    .portrait-img,
    .portrait,
    .portrait-border
    {
        display: none;
    }

    .portrait {
        width: 10rem;
        height: 10rem;
    }

    .portrait-border {
        min-width: 11rem;
        min-height: 11rem;
    }

    .name {
        height: 3rem;
    }

    .title-text {
        height: 3rem;
    }

    .title {
        column-gap: 0.5rem;
    }

    .introduction {
        justify-content: flex-start;
    }
}
</style>