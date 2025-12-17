export class AsFunction extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
<section class='section function'>
  <div class='container'>
    <div class='function-row'>
      <div class='function-left'>
        <div class='frame-2' aria-label='Moldura da imagem da funcao'>
          <span class='frame-line'></span>
        </div>
      </div>
      <div class='function-right'>
        <div class='section-head'>
          <span class='section-eyebrow'>O QUE FAZEMOS:</span>
          <h2 class='section-title'>MONITORAMENTO E COMUNICAÇÃO</h2>
        </div>
        <p class='section-text'>
          Nossos satelites conectam clima, energia e comunicacao em tempo real, levando internet,
          previsoes e alertas para proteger cidades, mares e comunidades remotas.
        </p>
        <div class='btn-row'>
          <a class='btn btn-primary' href='#'>Ver tudo</a>
          <a class='btn btn-secondary' href='#'>Explorar</a>
        </div>
      </div>
    </div>

    <!-- Second Card (Reversed Layout) -->
    <div class='function-row function-row-reverse'>
      <div class='function-left'>
        <div class='frame-2 frame-science' aria-label='Moldura da imagem da exploracao'>
          <!-- Intentionally using same image for now, user can swap -->
          <span class='frame-line'></span>
        </div>
      </div>
      <div class='function-right'>
        <div class='section-head'>
          <span class='section-eyebrow'>EXPLORAÇÃO E CIÊNCIA:</span>
          <h2 class='section-title'>DESCOBRINDO NOVOS HORIZONTES</h2>
        </div>
        <p class='section-text'>
          Expandimos as fronteiras do conhecimento, investigando o desconhecido para impulsionar
          o avanço tecnológico e científico da humanidade.
        </p>
        <div class='btn-row'>
          <a class='btn btn-primary' href='#'>Saiba mais</a>
        </div>
      </div>
    </div>
  </div>
</section>
        `;
  }
}

customElements.define('as-function', AsFunction);
