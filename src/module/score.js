// This module handles form submission and refreshing the page
import add from './naming.js';

const theForm = () => {
  const form = document.getElementById('formdetails');
  const theName = document.getElementById('name');
  const theScore = document.getElementById('score');

  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await add(theName.value, theScore.value);
    theName.value = '';
    theScore.value = '';
  });

  // Handle refresh button click
  const refresh = document.querySelector('.refreshBtn');
  refresh.addEventListener('click', () => {
    window.location.reload();
  });
};

export default theForm;
