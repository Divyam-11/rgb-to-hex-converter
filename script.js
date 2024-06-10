let sumbit = document.querySelector(".calc button")
let red_value = document.querySelector("#red")
let green_value = document.querySelector("#green")
let blue_value = document.querySelector("#blue")
let results = document.querySelector(".result")
const convert = () =>{
let one = Number(red_value.value);
let two = Number(green_value.value);
let three = Number(blue_value.value);
let first = one.toString(16);
if(first.length < 2 ){
    first = "0" + first;
}
let second = two.toString(16);
if(second.length < 2){
    second = "0" + second;
}
let third = three.toString(16);
if(third.length < 2){
    third= "0" + third;
}

return "#" + first + second + third;

}
sumbit.addEventListener("click",()=>{
    console.log("button was clicked")
    let abc = convert();
    results.innerText = "The Converted Hex is" + abc;
})