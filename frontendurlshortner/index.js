
let data={};


fetch("http://localhost:3000/data")
.then(response => response.json())
.then(dat => {
  
  console.log('Success:', dat);
  givenshorturl(dat);
  return dat
})
.catch((error) => {
  console.log( error);
});


let url=(ev)=>{
  ev.preventDefault();

    v= document.getElementById("url").value;
    console.log(v,"v");
    data["longurl"]=v;
    console.log(data)
  

    

    fetch("http://localhost:3000/long", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(dat => {
      
      console.log('Success:', dat);
      givenshorturlgiven(dat);
      return dat
    })
    .catch((error) => {
      console.log( error);
      
    });



    document.querySelector('form').reset()
    
}
document.getElementById('submit').addEventListener('click',url);



// console.log(dat,"data received")
function givenshorturl(short){
  console.log(short, "shorturl")
  let t=short;
  let tableele=document.getElementById('trow')
  
  t.initial.forEach(ele=> {
    let indexval= t.initial.indexOf(ele)+1
    let newrow=`
    
    <td scope="col">${indexval}</td>
    <td scope="col">${ele.longurl}</td>
    <td scope="col"> <a href="http://localhost:3000/redirect/${ele.shorturl}" target="_blank">${ele.shorturl} </a></td>
    <td scope="col">${ele.count}</td>
    <td scope="col"><a href="http://localhost:3000/delete/${ele.shorturl}"  style="text-decoration :none color:white"> <buttont type="button" class="btn btn-primary mb-2" > Delete</button></a> </td>

    `
  
   let tr= document.createElement("tr")
   tr.setAttribute("id",`${t.initial.indexOf(ele)}`)
   tr.innerHTML=newrow;
   tableele.append(tr);
  });
  
  
  }
  
  function givenshorturlgiven(short){
    console.log(short, "shorturl")
    let t=short;
    let tableele=document.getElementById('trow')
    tableele.innerHTML="";
    t.initial.forEach(ele=> {
      let indexval= t.initial.indexOf(ele)+1

   
      let newrow=`
      
      <td scope="col">${indexval}</td>
      <td scope="col">${ele.longurl}</td>
      <td scope="col"> <a href="http://localhost:3000/redirect/${ele.shorturl}" target="_blank">${ele.shorturl} </a></td>
      <td scope="col">${ele.count}</td>
      <td scope="col"><a href="http://localhost:3000/delete/${ele.shorturl}"  style="text-decoration :none color:white"> <buttont type="button" class="btn btn-primary mb-2" > Delete</button></a> </td>
  
      `

     let tr= document.createElement("tr")
     tr.setAttribute("id",`${t.initial.indexOf(ele)}`)
     tr.innerHTML=newrow;
     tableele.append(tr);
    });
    
    
    }