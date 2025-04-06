let addBtn=document.querySelector(".add");
let inputValue=document.querySelector(".textValue");
let listValue=document.querySelector(".list");
addBtn.addEventListener("click",addElement);
let work=[];
let isEditing=false;
let editIndex=null;
function addElement()
{
if(inputValue.value!=="")
{
    if(isEditing==true)
    {
        work[editIndex]=inputValue.value;
        isEditing=false;
        editIndex=null;
        addBtn.innerText="Add";
    }
    else{
work.push(inputValue.value);

    }
    inputValue.value="";
showTasks();
}
}

function showTasks()
{
    listValue.innerHTML="";
    for(let i=0;i<work.length;i++)
    {
        let datas=document.createElement("li");
        datas.innerText=work[i];
        let editBtn=document.createElement("button");
        let deleteBtn=document.createElement("button");
        editBtn.className="btn btn-success";
        editBtn.innerText="Edit";
        editBtn.style.marginLeft="17rem";
        editBtn.style.marginTop="1rem";  
            editBtn.addEventListener("click",()=>{
                inputValue.value=work[i];
                isEditing=true;
                addBtn.innerText="update";
                 editIndex=i;
            });
        deleteBtn.className="btn btn-danger";
        deleteBtn.innerText="Delete";
        deleteBtn.style.marginLeft="1rem";
        deleteBtn.style.marginTop="1rem";
        deleteBtn.addEventListener("click",()=>{
               work.splice(i,1);
               showTasks();                   
        });
        
        datas.append(editBtn);
        datas.append(deleteBtn);
        listValue.append(datas);
        
    }
}


