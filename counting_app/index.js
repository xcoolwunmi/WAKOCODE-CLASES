const countEl = document.querySelector("#count");
const incrementBtn = document.querySelector("#increment");
const saveBtn = document.querySelector("#savebtn");

let count = 0

incrementBtn.addEventListener("click", ()=>{
    count ++;
    countEl.textContent = count

});

saveBtn.addEventListener("click",()=>{
    let savedText = " " + count + " -";
  historyEl.textContent += savedText; 
  count = 0; 
  countEl.textContent = count; 
})