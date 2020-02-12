// Information to reach API
const apiKey = '3f69d232f84446298f7301d3f81d4f9b';
const url = 'https://api.rebrandly.com/v1/links';


// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  //API expects to see an object with a key destination that has a value of a URL.
  const data = JSON.stringify({destination:urlToShorten});
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  //anonymous arrow function to the onreadystatechange event handler of the xhr object.
  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  xhr.open('POST', url);
  //set the header
  xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
  // enter URL to input field
  //https://medium.com/@codecademy/breaking-the-coding-language-barrier-bf24652c3c60
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
