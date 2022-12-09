console.log("hello");
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
// audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItems'));
//console.log(songItems)

//songs array
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

//iterating songs

songItems.forEach((item,i) => {
  //console.log(item,i)
  item.getElementsByTagName('img')[0].src = songs[i].coverPath;
  item.getElementsByClassName('songName')[0].innerText = songs[i].songName;
 })






//handling the play/pause
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
//progress bar update
audioElement.addEventListener('timeupdate', () => {
    //console.log('timeupdte');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    //console.log(progress);
    myProgressBar.value=progress;
})
//seeking the song
myProgressBar.addEventListener('change',() => {
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
})

//handle list play/pause
const makeListSongPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((listSong)=>{
        listSong.classList.remove('fa-circle-pause');
        listSong.classList.add('fa-circle-play');

    })  
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((listSong)=>{
    listSong.addEventListener('click',(e)=>{
        //console.log(e.target);
        makeListSongPlays();
        songIndex = parseInt(e.target.id);

        
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        
        audioElement.src = './songs/'+songIndex+'.mp3';
        console.log(audioElement);

        masterSongName.innerText=songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();
        
        console.log(songIndex ,typeof (songIndex));
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = './songs/'+songIndex+'.mp3';
    masterSongName.innerText=songs[songIndex].songName;

    console.log(audioElement);
    audioElement.currentTime = 0;
    audioElement.play();
    
    console.log(songIndex ,typeof (songIndex));
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = './songs/'+songIndex+'.mp3';
    masterSongName.innerText=songs[songIndex].songName;
    console.log(audioElement);
    audioElement.currentTime = 0;
    audioElement.play();
    
    console.log(songIndex ,typeof (songIndex));
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})