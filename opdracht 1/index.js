let showMoreButton = document.querySelector('.show-more');
let showMessage = function() { 
  showMoreButton.classList.add('showing-more');
}

showMoreButton.addEventListener('click', showMessage)