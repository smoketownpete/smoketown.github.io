document.addEventListener('DOMContentLoaded', function () {
    fetch("https://raw.githubusercontent.com/smoketownpete/smoketown.github.io/refs/heads/main/brands.json")
        .then(response => response.json())
        .then(data => {
            hidePrint(1);
            let brandDD = document.getElementById("distinct_brands");
            data.forEach(element => {
   
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

    const ul = document.getElementById("flavorList");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }



    fetch("https://raw.githubusercontent.com/smoketownpete/smoketown.github.io/refs/heads/main/models.json")

        .then(response => response.json())
        .then(
            data => {
                hidePrint(1);
                let productTitle = document.getElementById("productName").innerHTML = ""
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


function selectedModel(event) {
    let selectedBrand = document.getElementById("distinct_brands");
    let productTitle = document.getElementById("productName");
    let currentSelected = event.target.value;
    let count = 0;


    fetch("https://raw.githubusercontent.com/smoketownpete/smoketownpete.github.io/refs/heads/main/flavors.json")
        .then(response => response.json())
        .then(data => {
            
                hidePrint(2);
            productTitle.innerHTML = selectedBrand.value +" "+currentSelected

            const ul = document.getElementById("flavorList");
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }



            let flavorList = document.getElementById("flavorList");
            data.forEach(element => {
                if (element.model == currentSelected) {
                    let flavorEntery = document.createElement("li");
                    flavorEntery.textContent = element.flavor;
                    flavorList.appendChild(flavorEntery)
                }
            });
        })
}

function hidePrint(x){
    let btnViz = "";
    if (x ===1){
        btnViz = "hidden";
    }
    else{
        btnVis = "visible";
    }
    let printArea = document.getElementById("printBTN");
    printArea.style.visibility = btnViz;
}


function printSection() {
  window.print();
}
