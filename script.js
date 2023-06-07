function setNavPos() {
  const nav = document.getElementById('nav');
  const CBcontainer = document.getElementById('ChessBoard');
  const CBcontainerHeight = CBcontainer.offsetHeight;

  nav.style.top = `${CBcontainerHeight}px`;
}

function setNavItemHeight() {
  const navItems = document.getElementsByClassName('navItem');

  for (let i = 0; i < navItems.length; i++) {
    const navItem = navItems[i];
    navItem.style.width = '30%';
    navItem.style.height = `${navItem.clientWidth}px`;
  }
}
function setNavItemWidth() {
  const navItems = document.getElementsByClassName('navItem');

  for (let i = 0; i < navItems.length; i++) {
    const navItem = navItems[i];
    navItem.style.height = '90%';
    navItem.style.width = `${navItem.clientHeight}px`;
  }
}

function handleNavItemResize() {
  const nav = document.getElementById('nav');
  const navWidth = nav.offsetWidth;
  const navHeight = nav.offsetHeight;

  if (navWidth <= navHeight * 3) {
    setNavItemHeight();
  } else {
    setNavItemWidth();
  }
}



function setHeight() {
  const CBcontainer = document.getElementById('ChessBoard');
  CBcontainer.style.width = `100%`;
  
  const CBcontainerWidth = CBcontainer.offsetWidth;
  CBcontainer.style.height = `${CBcontainerWidth}px`;
}
function setWidth() {
  const CBcontainer = document.getElementById('ChessBoard');
  CBcontainer.style.height = `100%`;
  
  const CBcontainerHeight = CBcontainer.offsetHeight;
  CBcontainer.style.width = `${CBcontainerHeight}px`;
}

function handleResize() {
  const contentContainer = document.getElementById('content');
  const contentWidth = contentContainer.offsetWidth;
  const contentHeight = contentContainer.offsetHeight;

  if (contentWidth <= contentHeight) {
    setHeight();
    console.log('Set Height')
  } else {
    setWidth();
    console.log('Set Width')
  }
}



function setGridItems() {
  const gridContainer = document.querySelector('.content-child-grid');
  const gridItems = Array.from(document.querySelectorAll('.a8'));

  // Get the width of the first grid item
  const columnWidth = gridItems[0].offsetWidth;

  // Set the row heights to the same value as the column width
  gridContainer.style.gridTemplateRows = `repeat(8, ${columnWidth}px)`;
}



document.addEventListener('DOMContentLoaded', () => {
  handleResize();
  handleNavItemResize();
  setNavPos();
  setGridItems();
  window.addEventListener('resize', () => {
    handleResize();
    handleNavItemResize();
    setNavPos();
    setGridItems(); 
  });
});



// Pieces Redirect

// Pieces
function rook() {
  // Redirect user to specified page
  window.location.href = 'rook.html';
}
function knight() {
  // Redirect user to specified page
  window.location.href = 'knight.html';
}
function bishop() {
  // Redirect user to specified page
  window.location.href = 'bishop.html';
}
function queen() {
  // Redirect user to specified page
  window.location.href = 'queen.html';
}
function king() {
  // Redirect user to specified page
  window.location.href = 'king.html';
}
function pawn() {
  // Redirect user to specified page
  window.location.href = 'pawn.html';
}



// Add an event listener to the image
const thankBtn = document.querySelector('.thank-btn');
thankBtn.addEventListener('click', () => {
  // Trigger the modal when the image is clicked
  const modal = document.querySelector('#exampleModal');
  const modalToggle = new bootstrap.Modal(modal);
  modalToggle.show();
});



function thanksGlow() {
  var thankBtn = document.getElementById('thank-btn');

  if (thankBtn.classList.contains('thank-glow')) {
    thankBtn.classList.remove('thank-glow');
  } else {
    thankBtn.classList.add('thank-glow');
  }
  
}

setInterval(thanksGlow, 1000);