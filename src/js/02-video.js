import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime (data) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
};

const savedData = JSON.parse(localStorage.getItem("videoplayer-current-time"));
const currentTime = savedData.seconds;

player.setCurrentTime(currentTime);