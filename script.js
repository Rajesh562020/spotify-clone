console.log("hello");
let audioElement = new Audio('1 copy.mp3');
// audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {
        songName:"song1",
        filePath:"./songs/1.mp3",
        coverPath:"./covers/1.jpg"
    },
    {
        songName:"song2",
        filePath:"./songs/2.mp3",
        coverPath:"./covers/2.jpg"
    },
    {
        songName:"song3",
        filePath:"./songs/3.mp3",
        coverPath:"./covers/3.jpg"
    },
    {
        songName:"song4",
        filePath:"./songs/4.mp3",
        coverPath:"./covers/4.jpg"
    },
    {
        songName:"song5",
        filePath:"./songs/5.mp3",
        coverPath:"./covers/5.jpg"
    },
    {
        songName:"song6",
        filePath:"./songs/6.mp3",
        coverPath:"./covers/6.jpg"
    },
    {
        songName:"song7",
        filePath:"./songs/7.mp3",
        coverPath:"./covers/7.jpg"
    },
    {
        songName:"song8",
        filePath:"./songs/8.mp3",
        coverPath:"./covers/8.jpg"
    },
    {
        songName:"song9",
        filePath:"./songs/9.mp3",
        coverPath:"./covers/9.jpg"
    },
    {
        songName:"song10",
        filePath:"./songs/10.mp3",
        coverPath:"./covers/10.jpg"
    },
]

masterPlay.addEventListener('click',() => {
    if((audioElement.paused) || (audioElement.currentTime <= 0)){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
    }
})

audioElement.addEventListener('timeupdate', () => {
    //console.log('timeupdte');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    //console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',() => {
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
})