import games from './data/games.js';

const renderGames = (games, category) => {
  const main = document.querySelector('#main-page');

  const filteredGamesByCategory = (games, gameCategory) => {
    if (gameCategory === 'all') return games;

    const filteredGames = games.filter(game => game.category === category);
    return filteredGames;
  };

  const renderData = filteredGamesByCategory(games, category)
    .map(
      game =>
        `<section class="game-section">
      <div class="container">
        <div class="${game.class}"></div>
      </div>
      </section>`
    )
    .join('');

  main.innerHTML = renderData;
};

document.addEventListener('DOMContentLoaded', () => {
  renderGames(games, 'all');
  console.log('hello');
});
