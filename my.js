let print= document.getElementById ('printtable');




function generate()
{
    print.innerHTML='';
    let number = document.getElementById ('input').value;
    
    for (let y=1 ; y<11 ; y++){
  print.innerHTML += `${number} x ${y} = ${y*number} <br>` 
    }
}


function reset(){
    print.innerHTML='';
}

function second()
{
    print.innerHTML='';
    let number = document.getElementById ('second').value;
    
    for (let y=1 ; y<11 ; y++){
  print.innerHTML += `${number} x ${y} = ${y*number} <br>` 
    }
}