const quietBtn = document.getElementById('quiet-btn')

quietBtn.addEventListener('click', makeQuiet)

function makeQuiet (event) {
    const p = document.getElementById('patrick')
    p.innerText = p.innerText.toLowerCase()
};



const loudBtn = document.getElementById('loud-btn')

loudBtn.addEventListener('click', makeLoud)

function makeLoud (event) {
     const p = document.getElementById('patrick')
     p.innerText = p.innerText.toUpperCase()
};