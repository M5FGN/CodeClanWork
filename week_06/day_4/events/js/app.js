// Arrow functions for Callbacks
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  // Step 1 - add the event listener in this section 

  // adds the event listener for the button(1).
  const button = document.querySelector('#button');
  //inside javascript the events don't use 'on' ie onclick
  // (event being listened for, function - without the () as this would trigger the function immediately without waiting on the event to occur.)
  button.addEventListener('click', handleButtonClick);

  const input = document.querySelector('#input');
  input.addEventListener('input', handleInputBox);

  const select = document.querySelector('#select')
  select.addEventListener('change', handleSelect);

  // fixme - is this where the error is?
  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);

});

// Events use anonymous functions

// STep 2 - add the instruction on what to do when the event triggers

// Using the button click (1) to change the text in a paragraph tag
const handleButtonClick = function() {
  console.log('The button has been clicked');
  const paragraph = document.querySelector('#button-result');
  paragraph.textContent = 'The button has now been clicked';
};
// use the value in the DOM - event > target > value
const handleInputBox = function(event) {
    // Use to find the location of the value / other properties
    // console.log(event);
    
    //console.logging the actual content being added
    console.log(event.target.value);

    // updating the page text to display the input.
    // get value
    newValue = event.target.value;
    // make change
    const text = document.querySelector('#input-result');
    text.textContent = newValue;
  }

const handleSelect = function (event) {
  console.log(event);

  const selectParagraph = document.querySelector('#select-result');
  selectParagraph.textContent = event.target.value;
}

// pass in event as data will be getting taken from the form and used in the function.
// fixme - should add a name to a list every time a name is added.
const handleFormSubmit = function(event) {

  // Needs added to prevent the form doing a POST automatically.
  event.preventDefault();
  // console.dir(event.value);
  const firstname = event.target.first_name.value;
  const lastname = event.target.last_name.value;

  const listItem = document.createElement('li');
  listItem.textContent = `${firstname} ${lastname}`;
  const list = document.querySelector('#form-list');
  list.appendChild(listItem);
  // Add to reset box after insert
  event.target.reset();
}



