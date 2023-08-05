// This module handles adding a new score to the leaderboard
const add = async (name, score) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/d2i3YTW3ATQz8Ldrgxxw/scores/', {
      method: 'POST',
      body: JSON.stringify({ user: name, score }),
      headers: { 'Content-type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Adding score failed.');
    }
  } catch (error) {
    // console.error('Error adding your score:', error);
  }
};

export default add;
