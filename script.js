//getelementbyid
/*const res = document.getElementById("container");
console.log(res);
*/
//getelementbyclassname
/*const res1 = document.getElementsByClassName("main");
console.log(res1);
*/

//getelementbytagname
/*const res2 = document.getElementsByTagName("div");
console.log(res2);
*/

//query selector and query selector all
/*const res3 = document.querySelector("div")
console.log(res3);
const res4 = document.querySelectorAll("div")
console.log(res4);
*/
{/* <label for="email">Email</label> <br>
 <input type="email" id="email"></input> */}
// var label = document.createElement("label")
// label.innerHTML="Email"
// label.setAttribute("for","email")
// var linebreak = document.createElement("br")
// var input = document.createElement("input")
// input.setAttribute("type","email");
// input.setAttribute("id","email");
// document.body.append(label,linebreak,input)

//using function we can achieve dynamic 

/*function createLabel(tagname,content,attrname,attrvalue){
    var label = document.createElement(tagname)
  label.innerHTML=content
  label.setAttribute(attrname,attrvalue)
  return label;
}
const label1 = createLabel("label","Email","for","email")
document.body.append(label1);
*/

const text = document.querySelector("#text1")
const textload =() =>{
    setTimeout(()=>{
   text.textContent = "Developer"
    },0)
    setTimeout(()=>{
        text.textContent = "Front-End Developer"
         },4000)
         setTimeout(()=>{
            text.textContent = "Back-End Developer"
             },8000)
}
textload();
setInterval(textload,12000);
