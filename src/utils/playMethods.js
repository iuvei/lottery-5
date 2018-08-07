export default function playMethods (type, details, selectedData) {
  let number = ''
  let price = ''
  let selectedDataFiltered = ''
  if(type == '一星' && details == '复式') {
    // console.log(selectedData)
    for(let i in selectedData) {
      selectedData[i].data.forEach(v => {
        console.log(v.label)
      })
    }
  }
}
