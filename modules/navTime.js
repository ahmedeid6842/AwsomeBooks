import { DateTime } from '../node_modules/luxon/src/luxon.js';

const timeContainer = document.querySelector('#currentTimeDate');

const time = () => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  timeContainer.innerHTML = date;
  setTimeout(time, 1000);
};

export default time;
