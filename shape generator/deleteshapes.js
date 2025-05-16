const deleteContainer = document.getElementById('container');
const deleteButton = document.getElementById('delete_button');

deleteButton.addEventListener('click', () => {
    deleteContainer.innerHTML = '';
});
