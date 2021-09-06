const li = document.querySelectorAll('li');

// Defining event listener function
function displayWindowSize() {
  // Get width and height of the window excluding scrollbars
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;

  console.log('width', w);
  console.log('height', h);

  li.forEach((li) => {
    if (w < 1149 && li.className.includes('hidden')) {
      li.style.display = 'none';
    } else {
      li.style.display = '';
    }
  });
}

// Attaching the event listener function to window's resize event
window.addEventListener('resize', displayWindowSize);

// Calling the function for the first time
displayWindowSize();
