// Most of script will be inside of here.
// Functions can be outside as they can be called when needed
document.addEventListener('DOMContentLoaded', () => {

    // Selecting the first h1 element in the DOM - it won't move to the second or subsequent matching elements
    const title = document.querySelector('h1');

    // Changing the text
    title.textContent = 'Hello G24';

    // selecting and changing a specific id in the DOM 
    const welcome = document.querySelector('#welcome-paragraph');
    welcome.textContent = 'Hello to my JavaScript DOM';

    // will print out the element as it appears in html tags
    console.log(welcome);

    // logs the element in a differnt way with a lot more info about it ie parent/children, properties and methods etc.
    console.dir(welcome);

    // li.red will distinguish between p.red and li.re else only the first .red would have been picked.
    const redELement = document.querySelector('li.red');
    console.log (redELement);

    // selecting all red elements
    const allRedElements = document.querySelectorAll('.red');

    // returns a node list to the console showing the details of all the red elements
    console.dir(allRedElements);

    // adding a css class to an element
    const redELementAgain = document.querySelector('li.red');

    // classList is a dom propertie which refers to the list of classes added to the element
    redELementAgain.classList.add('bold');

    // creating a new element, adding css and saying where it will appear 
    // const newListItem = document.createElement('li');
    // newListItem.textContent = 'Purple';
    // newListItem.classList.add('purple');
    
    // const list = document.querySelector('ul');
    // list.appendChild(newListItem);
    // end


    // fixme - using a function to do the above 
    const newListItem = addNewElement('li, 'Purple');
    newListItem.classList.add('purple');
    
    const list = document.querySelector('ul');
    list.appendChild(newListItem);
    // end

    // Todo - how would you delete from the DOM?

});

const addNewElement = function(type, text) {
    const newElement = document.createElement(type);
    newElement.textContent = text;
    return newElement;
}