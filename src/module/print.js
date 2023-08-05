// This module handles fetching and printing leaderboard scores
const print = async () => {
  const wrapper = document.querySelector('.leaders');

  // Create a list item template
  const template = (user, score) => {
    const list = document.createElement('li');
    list.innerText = `${user}: ${score}`;
    wrapper.appendChild(list);
  };

  try {
    // Fetch scores from the API
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/d2i3YTW3ATQz8Ldrgxxw/scores/');
    const data = await response.json();

    if (data.result && data.result.length > 0) {
      // Sort and display scores
      const sortedData = data.result.sort((a, b) => b.score - a.score);
      sortedData.forEach((entry) => {
        template(entry.user, entry.score);
      });
    } else {
      // console.log('No scores available.');
    }
  } catch (error) {
    // console.error('Error fetching and printing scores:', error);
  }
};

export default print;
