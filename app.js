const colonki = document.querySelectorAll('.colonka');

document.addEventListener('keydown', event =>{
    event.preventDefault()
    if(event.code.toLocaleLowerCase()==='space'){
        setRandomClr();
    }
} )

document.addEventListener('click', event => {
    const type = event.target.dataset.type;
    if (type === 'lock'){
        const node = event.target.tagName.toLowerCase()==='i'
        ? event.target
        : event.targer.children[0]

        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')

    }
    else if (type==='copy'){
        copyToClickboard(event.target.textContent)
    }
})

function generateRandomColor(){
    const hexCodes='0123456789ABCDEF';
    let color = '';
    for(let i = 0; i<6; i++){
       color += hexCodes[Math.floor(Math.random()*hexCodes.length)];
    }
    return '#' + color;
}

function copyToClickboard(text){
    return navigator.clipboard.writeText(text);
}

function setRandomClr(){
    colonki.forEach(colonka=>{
        const isLocked = colonka.querySelector('i').classList.contains('fa-lock')
        const text = colonka.querySelector('h2');
        const color = generateRandomColor();

        if(isLocked){
            return
        }

        text.textContent=color;
        colonka.style.background=color;

    })
}

setRandomClr();