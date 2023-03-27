import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const player = new Player("vimeo-player",{});
const iframe = document.querySelector('iframe');

player.on('timeupdate', 
         _.throttle(currentTime => {
            localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime.seconds)
            );
         }), 10000
         );
const time=[localStorage.getItem('videoplayer-current-time')];
console.log(time[0]);

player
   .setCurrentTime(time[0])
   .then(function(seconds) {})
   .catch(function(error) {
    switch (error.name) {
        case 'RangeError':
        break;
        default:
        break;
    }
});

