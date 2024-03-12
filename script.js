const textInput=document.getElementById("taskBar")
const Button=document.getElementById("GetButton")
const lists=document.getElementById("ListContainer")
function addTask(){
    if(textInput.value===""){
        alert("Please Enter the task")
    }else {
        let li=document.createElement("li")
        li.innerHTML=textInput.value;
        lists.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)
        storingData();
        textInput.value="";
    }
}
lists.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        storingData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        storingData();
    }
});
function storingData(){
    localStorage.setItem("data",lists.innerHTML);
}
function refreshingData(){
    lists.innerHTML=localStorage.getItem("data");
}
refreshingData();