// Vivald JS Example

let setSeason = season => {
    // - change concerto text
    document.getElementById('season-text').innerHTML = season;
    // - change main image
    document.getElementById('main-img').src = `images/${season}.jpg`;
    // - change page background color
    let backColor;
    switch(season){
        default:
        case "summer":
            backColor = '#1BA848';
            break;
        case "autumn":
            backColor = '#FE6732';
            break;
        case "winter":
            backColor = '#1C64B9';
            break;
        case "spring":
            backColor = '#0E94D1';
            break;
    }
    document.body.style.backgroundColor = backColor;
    // - change audio source
    document.getElementById('song').src = `songs/vivaldi-${season}.mp3`;
    // - remove active class from all buttons
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');
    // - add active class to clicked button
    document.getElementById(`${season}Btn`).classList.add('activeBtn');
}

// When a Season Button is Clicked
document.getElementById('summerBtn').addEventListener('click', () => { setSeason("summer") });
document.getElementById('autumnBtn').addEventListener('click', () => { setSeason("autumn") });
document.getElementById('winterBtn').addEventListener('click', () => { setSeason("winter") });
document.getElementById('springBtn').addEventListener('click', () => { setSeason("spring") });