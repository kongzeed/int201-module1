const { template } = require('@babel/core')

function countCovidStatus(covidStatusArray) {
  let negativeLow = 0
  let negativeHigh = 0
  let positiveCock = 0
  if (covidStatusArray === null || covidStatusArray === undefined) {
    return undefined
  } else if (covidStatusArray.length === 0) {
    return {}
  }
  for (let index = 0; index <= covidStatusArray.length; index++) {
    covidStatusArray[index] === 'negative and low risk'
      ? negativeLow++
      : covidStatusArray[index] === 'negative and high risk'
      ? negativeHigh++
      : covidStatusArray[index] === 'positive'
      ? positiveCock++
      : null
    // if (covidStatusArray[index] === 'negative and low risk') {
    //   negativeLow++;
    // } else if (covidStatusArray[index] === 'negative and high risk') {
    //   negativeHigh++;
    // } else if (covidStatusArray[index] === 'positive') {
    //   positiveCock++;
    // }
  }

  const obj = {
    'negative and low risk': negativeLow,
    'negative and high risk': negativeHigh,
    positive: positiveCock
  }
  for (const key in obj) {
    if (obj[key] === 0) {
      delete obj[key]
    }
  }
  return obj
}
module.exports = countCovidStatus
//code here
// let countNL = 0
// let countNH = 0
// let positive = 0
// if(!covidStatusArray){
//   return undefined
// }else if(covidStatusArray.length===0){
//   return {}
// }else if(!(covidStatusArray.includes('negative and low risk' || 'negative and high risk' || 'positive'))){
//   return {}
// }else if(covidStatusArray.length !== 0){
//   for(i=0;i<covidStatusArray.length;i++){
//     if(covidStatusArray[i].includes('negative and low risk')){
//       countNL= ++countNL
//     }
//   }
//   for(i=0;i<covidStatusArray.length;i++){
//     if(covidStatusArray[i].includes('negative and high risk')){
//       countNH= ++countNH
//     }
//   }
//   for(i=0;i<covidStatusArray.length;i++){
//     if(covidStatusArray[i].includes('positive')){
//       positive= ++positive
//     }
//   }
// }
// if(countNL===0){
//   return {'positive': positive,'negative and high risk': countNH}
// }else if(positive===0){
//   return {'negative and low risk' : countNL,'negative and high risk' : countNH}
// }else if(countNH===0){
//   return {'negative and low risk' : countNL,'positive' : positive}
// }else if(countNL===0 && countNH===0){
//   return {'positive' : positive}
// }else if(countNL===0 && positive===0){
//   return {'negative and high risk' : countNH}
// }else if(countNL===0 && positive===0){
//   return {'negative and low risk' : countNL}
// }else{
//   return {'negative and low risk' : countNL,'positive' : positive,'negative and high risk' : countNH}
// }
