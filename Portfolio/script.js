// for storing contact page data
const scriptURL = 'https://script.google.com/macros/s/AKfycbxmX3giLpN5Zdyjiv_RmbsdxDFVBtMviDw3EnQlb5FYTAKwkOs0-60i7bIuqSqOl0sg-g/exec';
const form = document.forms['submit-to-google-sheet'];
const loading = document.getElementById('loading'); // Get the loading message element

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  loading.style.display = 'block';
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      alert('Saved Successfully'); 
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message))
    .finally(() => {
      loading.style.display = 'none';
    });
});
