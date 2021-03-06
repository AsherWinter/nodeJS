
        function getData(){
  
        fetch("/getdata")
        .then(res=>res.json())
        .then(data=>{
            document.getElementById("table").innerHTML="";
            data.forEach(element => {
               
                document.getElementById("table").innerHTML+=`
                <tr>
                <td>${element.name}</td>
                <td>${element.population}</td>
                <td>${element.counter}</td>
                </tr>`
            });
        })
        .catch(err=>console.log("Error",err));
        }

        function getDataForCountries(){

            fetch("/getdata")
        .then(res=>res.json())
        .then(data=>{

            data.forEach(element => {
                
                document.getElementById("counteries").innerHTML+=`<option value="${element.name}">
                ${element.name}
                </option>`;
            });
        })
        .catch(err=>console.log("Error",err));

        }
        async function updateCounter(){
            let counter = document.getElementById("cases").value;
            let select = document.getElementById("counteries");
            let country = select.options[select.selectedIndex].value;
            let initParam= { 
                "method":"PUT",
                 headers: {"Content-Type": "application/json"},
                 body:`{"counter":"${counter}"}`
                };
            let res= await (fetch(`/edit/${country}`,initParam));
            console.log(res);
            getData();
        }