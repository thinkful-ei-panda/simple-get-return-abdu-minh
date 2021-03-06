function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results').append(
    `<img src="${responseJson.message}" class="results-img">`);

  //display the results section
  $('.results').removeClass('hidden');
}

function clearImages() {
  $('.results').empty();
}

/*function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}*/

function watchNewForm() {
  $('form').submit(event => {
    clearImages();
    console.log($('.howMany').val());
    event.preventDefault();
    let howMany = $('.howMany').val();
    for(let i = 0; i < howMany; i++) {
      getDogImage();
    }
  });
} 



$(function() {
  $('.howMany').val(3);
  console.log('App loaded! Waiting for submit!');
  watchNewForm();
});
