const businessVideo = document.getElementById('business-video');
const soundsVideo = document.getElementById('sounds-video');
const quizzVideo = document.getElementById('quizz-video');
const caloriesVideo = document.getElementById('calories-video');
const eyesVideo = document.getElementById('eyes-video');
const robotVideo = document.getElementById('robot-video');
const popUpVideo = document.getElementById('popup-video');
const popUp = document.getElementById('pop-up');
const exit = document.getElementById('exit');


businessVideo.addEventListener('click', (e) =>{
    e.preventDefault();
    const copy = businessVideo.cloneNode(true);
    copy.controls = true;
    popUpVideo.appendChild(copy);
    popUp.style.visibility = 'visible';
});
soundsVideo.addEventListener('click', (e) =>{
    e.preventDefault();
    const copy = soundsVideo.cloneNode(true);
    copy.controls = true;
    popUpVideo.appendChild(copy);
    popUp.style.visibility = 'visible';
});
quizzVideo.addEventListener('click', (e) =>{
    e.preventDefault();
    const copy = quizzVideo.cloneNode(true);
    copy.controls = true;
    popUpVideo.appendChild(copy);
    popUp.style.visibility = 'visible';
});
caloriesVideo.addEventListener('click', (e) =>{
    e.preventDefault();
    const copy = caloriesVideo.cloneNode(true);
    copy.controls = true;
    popUpVideo.appendChild(copy);
    popUp.style.visibility = 'visible';
});
eyesVideo.addEventListener('click', (e) =>{
    e.preventDefault();
    const copy = eyesVideo.cloneNode(true);
    copy.controls = true;
    popUpVideo.appendChild(copy);
    popUp.style.visibility = 'visible';
});
robotVideo.addEventListener('click', (e) =>{
    e.preventDefault();
    const copy = robotVideo.cloneNode(true);
    copy.controls = true;
    popUpVideo.appendChild(copy);
    popUp.style.visibility = 'visible';
});

exit.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.style.visibility = 'hidden';
    while (popUpVideo.firstChild){
        popUpVideo.removeChild(popUpVideo.firstChild);
    }
})




