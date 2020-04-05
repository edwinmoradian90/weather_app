function mainView(data = {}) {
  const content = document.querySelector('#content');

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main_container');

  const title = document.createElement('h2');
  title.classList.add('title');
  title.innerText = 'Weather App';

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input_container');

  const inputWrapper = document.createElement('div');
  inputWrapper.classList.add('input_wrapper');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Enter your city...');
  input.classList.add('input');

  const submit = document.createElement('span');
  submit.classList.add('submit_button');
  submit.innerText = 'Submit';

  inputWrapper.appendChild(input);
  inputWrapper.appendChild(submit);
  inputContainer.appendChild(inputWrapper);

  if (data.error) {
    const errorDisplay = document.createElement('span');
    errorDisplay.classList.add('error_display');
    errorDisplay.innerText = 'Could not find query, please try again.';
    inputContainer.appendChild(errorDisplay);
  }

  mainContainer.appendChild(title);
  mainContainer.appendChild(inputContainer);
  content.appendChild(mainContainer);
}

export default mainView;
