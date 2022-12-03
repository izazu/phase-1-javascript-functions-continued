// code your solution here
function saturdayFun(nah='roller-skate') {
    return (`This Saturday, I want to ${nah}!`)
}
function mondayWork(lol = "go to the office") {
  return (`This Monday, I will ${lol}.`)
}
function wrapAdjective(msg='*') {
  return function(nope="special") {
    return `You are ${msg}${nope}${msg}!`
  }
}
