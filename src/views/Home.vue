<template>
<div class="home">
  <div class="columns is-centered">
    <div class="column is-3">
      <figure class="image">
        <img src="../assets/LOGO_VAMPIRO_V3.png" alt="logo vampiro" />
      </figure>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column is-11 tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification has-text-left">
              <span class="icon-text has-text-left title">
                <span class="icon is-medium mr-5">
                  <i class="fas fa-bullseye"></i>
                </span>
                <span class="title">Objetivo do Jogo: </span>
              </span>
              <p class="subtitle has-text-justified p-3">
                • Você se encontra em uma vila onde a escuridão esconde um segredo mortal. Um dos jogadores é um vampiro sedento por sangue, enquanto os outros quatro são corajosos moradores determinados a expulsar a criatura.
              </p>
              <span class="icon-text has-text-left title">
                <span class="icon is-medium mr-5">
                  <i class="fas fa-users"></i>
                </span>
                <span class="title">Personagens: </span>
              </span>
              <p class="subtitle has-text-justified p-3">
                • Cada jogador recebe um papel específico no início do jogo. Um se tornará o temido vampiro, enquanto os outros assumirão papéis variados nos quais suas habilidades podem influenciar o destino da vila.
              </p>
            </article>
            <article class="tile is-child notification has-text-left">
              <span class="icon-text has-text-left title">
                <span class="icon is-medium mr-5">
                  <i class="fas fa-sync-alt"></i>
                </span>
                <span class="title">Continuidade do Jogo: </span>
              </span>
              <p class="subtitle has-text-justified p-3">
                • O jogo continua alternando entre noites e discussões até que o vampiro seja identificado e eliminado, ou até que o vampiro tenha sucesso em exterminar todos os moradores da vila. A estratégia, o engano e a astúcia são cruciais para ambos os lados.
              </p>
              <span class="icon-text has-text-left title">
                <span class="icon is-medium mr-5">
                  <i class="fab fa-github"></i>
                </span>
                <span class="title">Github:
                  <a target="_blank" href="https://github.com/AlexYud/VampFront">frontend</a> e
                  <a target="_blank" href="https://github.com/AlexYud/VampAPI">backend</a>
                </span>
              </span>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification has-text-left">
              <span class="icon-text has-text-left title">
                <span class="icon is-medium mr-5">
                  <i class="fas fa-moon"></i>
                </span>
                <span class="title">Noite: </span>
              </span>
              <p class="subtitle has-text-justified px-3 pt-3 mb-2">
                • Todos os jogadores executam as ações secretas de seus personagens durante a noite.
              </p>
              <p class="subtitle has-text-justified px-3 pb-3">
                • O vampiro escolhe uma vítima para eliminar.
              </p>
              <span class="icon-text has-text-left title">
                <span class="icon is-medium mr-5">
                  <i class="fas fa-cloud-sun"></i>
                </span>
                <span class="title">Manhã: </span>
              </span>
              <p class="subtitle has-text-justified p-3">
                • Revelação de eventuais mortes ocorridas durante a noite.
              </p>
              <span class="icon-text has-text-left title">
                <span class="icon is-medium mr-5">
                  <i class="fas fa-campground"></i>
                </span>
                <span class="title">Votação para a Fogueira: </span>
              </span>
              <p class="subtitle has-text-justified px-3 pt-3 mb-2">
                • Os jogadores compartilham informações, suspeitas e estratégias.
              </p>
              <p class="subtitle has-text-justified px-3 mb-2">
                • O vampiro deve mentir e acusar para proteger sua verdadeira identidade.
              </p>
              <p class="subtitle has-text-justified px-3 mb-2">
                • Os jogadores votam em quem acreditam ser o vampiro.
              </p>
              <p class="subtitle has-text-justified px-3 pb-3">
                • O jogador mais votado é enviado para a fogueira.
              </p>
              <span class="icon-text has-text-left title">
                <span class="icon is-medium mr-5">
                  <i class="fas fa-cross"></i>
                </span>
                <span class="title">Resultado: </span>
              </span>
              <p class="subtitle has-text-justified px-3 pt-3 mb-2">
                • Se o jogador na fogueira for o vampiro, a vila vence.
              </p>
              <p class="subtitle has-text-justified px-3 pb-3">
                • Se não for, a noite cai novamente, reiniciando o ciclo.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  padding-top: 2em;
}

.title {
  color: var(--text);
}

.is-child {
  background-color: var(--sidebar-bg-color);
  color: var(--text);
  border: solid 0.01em;
}

.image {
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  display: inline;
}
</style>
