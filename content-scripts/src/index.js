import fetch from 'node-fetch';


fetch(chrome.runtime.getURL('content-scripts/dist/index.html'))
  .then(response => response.text())
  .then(data => {
    console.log('DEBUG THIS 123123', data);
    document.body.insertAdjacentHTML('beforeend', data);
  }).catch(err => {
    // handle error
    console.error('Error injecting Omnibar HTML', err);
  });
