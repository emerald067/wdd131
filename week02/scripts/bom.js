const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // you need to fill in the blank to reference the HTML element that is a unodered list element.
const li = document.createElement('li');
const deleteButton = document.createElement('button')
li.textContent = input.value;
deleteButton.textContent = '❌';
li.appendChild(deleteButton);
list.append(li);
bottomElement == addEventListener('click', function() {
    if (input.value === '') {
                alert('You must enter a value!');
            }
        });

deleteButton.addEventListener('click', function() {
    list.removeChild(li);
});
input.value = '';
input.focus();