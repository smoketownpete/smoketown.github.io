document.addEventListener('DOMContentLoaded', function () {
    fetch("https://raw.githubusercontent.com/smoketownpete/smoketown.github.io/refs/heads/main/brands.json")
        .then(response => response.json())
        .then(data => {
            let brandDD = document.getElementById("distinct_brands");
            data.forEach(element => {
                console.log(element['brand']);
                let option = document.createElement("option");
                option.value = element['brand'];
                option.textContent = element['brand'];
                brandDD.appendChild(option);

            });

        })
});

function selectedBrand(event) {

    let currentSelected = event.target.value;
    let modelDD = document.getElementById("distinct_model");
    fetch("https://raw.githubusercontent.com/smoketownpete/smoketown.github.io/refs/heads/main/models.json")

        .then(response => response.json())
        .then(
            data => {


                let tbody = document.getElementById("flavorTableBody");
                if(tbody){
                    tbody.remove();
                }

                while (modelDD.options.length > 0) {
                    modelDD.remove(0);

                }
                let option = document.createElement("option");
                option.value = "";
                option.textContent = "-- SELECT A MODEL --";
                option.disabled = true;
                option.selected = true;
                modelDD.appendChild(option);
                data.forEach(
                    element => {
                        if (element.brand === currentSelected) {
                            let option = document.createElement("option");
                            option.value = element.model;
                            option.textContent = element.model;
                            modelDD.appendChild(option);
                        }
                    }
                );
            }
        )
}


function selectedModel(event){

                    let tbody = document.getElementById("flavorTableBody");
                if(tbody){
                    tbody.remove();
                }

    let currentSelected = event.target.value;
    let table = document.getElementById("flavorTable");
    let tableBody = document.createElement("tbody");
    let menthol = [];
    let count = 0;
    tableBody.id = "flavorTableBody"
    table.append(tableBody);


    fetch("https://raw.githubusercontent.com/smoketownpete/smoketownpete.github.io/refs/heads/main/flavors.json")
    .then(response => response.json())
    .then(data=>{
       
        data.forEach(element =>{
            if(element.model == currentSelected){
                let tableRow = tableBody.insertRow(count);
                let newData = tableRow.insertCell();
                
                newData.textContent = element.flavor;

                count = count+1
            }
        });
    })
}