import { bus } from '../components/event-bus.js';

setBus(bus);
let initData = {
  startSize: 6,
  startSpeed: 5
};
setData(initData);

document.getElementById('tableSize').value = initData.startSize;

let tableSizeUpdated = e => {
  let val = Number(e.target.value);
  bus.dispatch("ControlLCTTablSize", { size: val });
};
document.getElementById('tableSize').onclick = tableSizeUpdated;
document.getElementById('tableSize').ontouchend = tableSizeUpdated;

document.getElementById('angleSpeed').value = initData.startSpeed;

let angleSpeedUpdated = e => {
  let val = Number(e.target.value);
  bus.dispatch("ControlLCTAngleSpeed", { speed: val });
};
document.getElementById('angleSpeed').onclick = angleSpeedUpdated;
document.getElementById('angleSpeed').ontouchend = angleSpeedUpdated;