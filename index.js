// DATABASE
const songs = [
    {
        id: "0",
        song_name: "Calvin Harris",
        artist: "Josh Pan",
        song_file: "./songs/Calvin Harris.mp3",
        img: "./images/1.jpg"
    },
    {
        id: "1",
        song_name: "June",
        artist: "Bobby Richards",
        song_file: "./songs/June.mp3",
        img: "./images/2.jpg"
    },
    {
        id: "2",
        song_name: "Fast and Run",
        artist: "Nico Staf",
        song_file: "./songs/Fast and Run.mp3",
        img: "./images/3.jpg"
    },
    {
        id: "3",
        song_name: "Sunny Travel",
        artist: "Nico Staf",
        song_file: "./songs/Sunny Travel.mp3",
        img: "./images/4.jpg"
    },
    {
        id: "4",
        song_name: "Interstellar Mood",
        artist: "Nico Staf",
        song_file: "./songs/interstellar Mood.mp3",
        img: "./images/5.jpg"
    },
    {
        id: "5",
        song_name: "Indian Walk",
        artist: "Nico Staf",
        song_file: "./songs/Indian Walk.mp3",
        img: "./images/6.jpg"
    }
];


const audio = document.getElementById("audio");


$(document).ready(() => {
    $("#song-name-h3").text(`${songs[0].song_name}`)
    $('#artist-name-span').text(`${songs[0].artist}`)
    $("#audio").attr("src", `${songs[0].song_file}`)
});


// PLAY OR PAUSE 
let paused = true;
$("#playOrPause-button").click(() => {
    paused = !paused;

    if(paused == false) {
        $("#i-playOrPause").removeClass("fa-play").addClass("fa-pause");
        audio.play();
    } else {
        $("#i-playOrPause").removeClass("fa-pause").addClass("fa-play");
        audio.pause();
    }
});


audio.addEventListener('ended', () => {
    $("#i-playOrPause").removeClass("fa-pause").addClass("fa-play");
    paused = true;
});


// FORWARD BUTTON
let value = 0;
let songsLength = songs.length;

$("#forward-button").click(() => {
    if(value >= songsLength - 1) {
        nextElement = 0;
        value = 0;
        paused = true;
        $(".site-container").css("background-image", `url(${songs[nextElement].img})`);
        $("#song-name-h3").text(`${songs[nextElement].song_name}`);
        $("#artist-name-span").text(`${songs[nextElement].artist}`);
        $("#audio").attr("src", `${songs[nextElement].song_file}`);
        $("#i-playOrPause").removeClass("fa-pause").addClass("fa-play");

    } else {
        let nextElement = value + 1;
        paused = true;
        value += 1;
        key = nextElement;
        $(".site-container").css("background-image", `url(${songs[nextElement].img})`);
        $("#song-name-h3").text(`${songs[nextElement].song_name}`);
        $("#artist-name-span").text(`${songs[nextElement].artist}`);
        $("#audio").attr("src", `${songs[nextElement].song_file}`);
        $("#i-playOrPause").removeClass("fa-pause").addClass("fa-play");
    }
});


// BACKWARD BUTTON
$("#backward-button").click(() => {
    let prevElement = value - 1
    value -= 1;
    if(value >= 0) { 
        $(".site-container").css("background-image", `url(${songs[prevElement].img})`);
        $("#song-name-h3").text(`${songs[prevElement].song_name}`);
        $("#artist-name-span").text(`${songs[prevElement].artist}`);
        $("#audio").attr("src", `${songs[prevElement].song_file}`);
        $("#i-playOrPause").removeClass("fa-pause").addClass("fa-play");
        paused = true;

    } else {
        value = songsLength - 1;
        prevElement = value;
        paused = true;
        $(".site-container").css("background-image", `url(${songs[prevElement].img})`)
        $("#song-name-h3").text(`${songs[prevElement].song_name}`);
        $("#artist-name-span").text(`${songs[prevElement].artist}`);
        $("#audio").attr("src", `${songs[prevElement].song_file}`);
        $("#i-playOrPause").removeClass("fa-pause").addClass("fa-play");
    }
});