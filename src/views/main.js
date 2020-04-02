function mainView() {
  const content = document.querySelector('#content');

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main_container');

  const title = document.createElement('h2');
  title.classList.add('title');
  title.innerText = 'Weather App';

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input_container');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Enter your city...');
  input.classList.add('input');

  const submit = document.createElement('span');
  submit.classList.add('submit_button');
  submit.innerText = 'Submit';

  inputContainer.appendChild(input);
  inputContainer.appendChild(submit);
  mainContainer.appendChild(title);
  mainContainer.appendChild(inputContainer);
  content.appendChild(mainContainer);
}

export default mainView;
