import { bus } from "../components/event-bus.js";

setBus(bus);

let initData = {
  number_of_circles: 3
};
setData(initData);

document.getElementById('number_of_circles').value = initData.number_of_circles;

let number_of_circles_updated = e => {
  let val = Number(e.target.value);
  bus.dispatch("ControlSG", { number_of_circles: val });
};
document.getElementById('number_of_circles').onclick = number_of_circles_updated;
document.getElementById('number_of_circles').ontouchend = number_of_circles_updated;