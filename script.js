let input  =document.getElementById('input');
 let btn = document.getElementById('btn1');
 let ol = document.getElementById('ol');
 //  let li = document.getElementById('li');
  btn.addEventListener("click",function(){
          if(input.value==""){
              alert("Enter Something:")
            }
        else{
             
              let li = document.createElement('li');
    //  let img = do/cument.createElement('img');
     // console.log(input.value);
    
          const imgDiv = document.createElement("div");
      imgDiv.classList.add("img");

      // Create two images
      const update = document.createElement("img");
       update.src = "pen.png"
      update.alt = "Edit";

      const  img2 = document.createElement("img");
      img2.src = "delete.png"; // e.g. delete icon
      img2.alt = "Delete";
       img2.addEventListener('click',function(){
     li.remove();
    });
    update.addEventListener('click',function(){
                const editText = prompt("Edit Task:" ,li.firstChild.textContent);
                if (editText !== null && editText.trim() !== "") {
          li.firstChild.textContent = editText.trim();
        }
               });
   
        
             
            li.textContent =input.value;
            ol.appendChild(li);
            imgDiv.appendChild(update);
            imgDiv.appendChild(img2);
            li.appendChild(imgDiv);
            input.value="";
        }
    });
 
     
   
     
