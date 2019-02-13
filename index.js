// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {

    drivers.push(name);

}
function destructivelyPrependDriver(name) {

    drivers.unshift(name);

}
function destructivelyRemoveLastDriver() {
    drivers.pop()
}
function destructivelyRemoveFirstDriver() {
    drivers.shift()
}
function appendDriver(name) {

    let newarray = drivers.slice(0);
    console.log(newarray)
    newarray.push(name);
    console.log(newarray)
    return newarray;

}

function prependDriver(name) {
  let newarray = drivers.slice(0);
  newarray.unshift(name);
  return newarray;

}

function removeLastDriver() {
  let newarray = drivers.slice(0);
  newarray.pop();
  return newarray;


}
function removeFirstDriver() {
  let newarray = drivers.slice(0);
  newarray.shift();
  return newarray;

}
