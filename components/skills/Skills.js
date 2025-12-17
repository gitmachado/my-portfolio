export class AppSkills extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
<section id="habilidades">
    <div class="container">
        <h2>Ferramentas e Habilidades</h2>
        <div class="tags-wrapper">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">HTML</span>
            <span class="skill-tag">Node JS</span>
            <span class="skill-tag">Firebase</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">SQL</span>
            <span class="skill-tag">CSS</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">AWS</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">Google Play</span>
            <span class="skill-tag">PHP</span>
            <span class="skill-tag">React Native</span>
        </div>
    </div>
</section>
        `;
    }
}

customElements.define('app-skills', AppSkills);
