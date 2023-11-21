
const displayData = (data) => {
    result.value += data
}

const calculatorClear = () => {
    result.value = ""
}

const equal = () => {
   if (result.value!="") {
    try{result.value = eval(result.value)}
    catch{result.value="Error!!"}
   } 
}

const clearOne=()=>{
    result.value= result.value.slice(0,-1)
}