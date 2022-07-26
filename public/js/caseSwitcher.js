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


const sarcBtn = document.getElementById('sarc-btn')

sarcBtn.addEventListener('click', makeSarc)

function makeSarc (event) {
    const p = document.getElementById('patrick')
    const txt = p.innerText
    let result = ''
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let i = 0
    for (let char of txt){
        if (alphabet.includes(char)){
            if (i % 2 === 1) char = char.toLowerCase()
            if (i % 2 === 0) char = char.toUpperCase()
            i++
        }
        result += char
    }
    p.innerText = result
}