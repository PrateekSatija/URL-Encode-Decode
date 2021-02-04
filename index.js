window.addEventListener('load', () => {
  let inputField = document.querySelector('#input');
  let outputField = document.querySelector('#output');
  const button1 = document.querySelector('#button1-for-input');
  const button2 = document.querySelector('#button2-for-input');
  const button3 = document.querySelector('#button-to-clear-output');
  const button4 = document.querySelector('#button3-for-input');
  button1.addEventListener('click', event => {
    outputField.value = encodeURIComponent(inputField.value);
  }) 
  button2.addEventListener('click', event => {
    outputField.value = decodeURIComponent(inputField.value);
  })
  button3.addEventListener('click', event => {
    outputField.value = '';
  })
  button4.addEventListener('click', event => {
      inputField.value = '';
      outputField.value = '';
  })
})
