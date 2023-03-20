import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player('vimeo-player', {});

const CURRENT_TIME ='videoplayer-current-time';


const iframe =document.querySelector('iframe');

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

// If later on you decide that you don’t need to listen for play anymore.
player.off('play', onPlay);

// Alternatively, `off` can be called with just the event name to remove all
// listeners.
player.off('play');
