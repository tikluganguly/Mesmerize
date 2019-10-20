import { bus } from "../components/event-bus.js";

setBus(bus);

let initData = {
  curve_a: 1,
  curve_b: 1,
  size_A: 100,
  size_B: 100
};
setData(initData);

document.getElementById('const_a').value = initData.curve_a;

let const_a_updated = e => {
  let val = Number(e.target.value);
  bus.dispatch("ControlLCTCca", { curve_a: val });
};
document.getElementById('const_a').onclick = const_a_updated;
document.getElementById('const_a').ontouchend = const_a_updated;

document.getElementById('const_b').value = initData.curve_b;

let const_b_updated = e => {
  let val = Number(e.target.value);
  bus.dispatch("ControlLCTCcb", { curve_b: val });
};
document.getElementById('const_b').onclick = const_b_updated;
document.getElementById('const_b').ontouchend = const_b_updated;

document.getElementById('size_A').value = initData.size_A;

let size_A_updated = e => {
  let val = Number(e.target.value);
  bus.dispatch("ControlLCTCsA", { size_A: val });
};
document.getElementById('size_A').onclick = size_A_updated;
document.getElementById('size_A').ontouchend = size_A_updated;

document.getElementById('size_B').value = initData.size_B;

let size_B_updated = e => {
  let val = Number(e.target.value);
  bus.dispatch("ControlLCTCsB", { size_B: val });
};
document.getElementById('size_B').onclick = size_B_updated;
document.getElementById('size_B').ontouchend = size_B_updated;
