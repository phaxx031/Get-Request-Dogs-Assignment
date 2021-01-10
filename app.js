'use strict';

function getDogImage() {
    let numDogs = $('#dropdown-list').val();
    fetch('https://dog.ceo/api/breeds/image/random/' + numDogs)
    .then(response => response.json())
    .then(responseJson =>
        displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    let templateString = "";
    console.log(responseJson);
    for (let i = 0; i < responseJson.message.length; i++) {
        templateString += `<img src="${responseJson.message[i]}" class="results-img">`;
    }
    $('.results').html(templateString);
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}


$(function() {
    console.log('App loaded! Waiting for submit!')
    watchForm();
});