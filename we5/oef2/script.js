let data;
window.onload = async () => {
    console.log('test');

    let results = await fetch('data.json');
    data = await results.json();
    // console.log(data);

    vulKlasgroep();

    //zet event listeners
    document.getElementById('klasgroep')
    .addEventListener('change', (event) => {
       vulLeerlingen(event.target.value);
    });

    document.getElementById('leerlingen')
    .addEventListener('change', (event) => {
        // console.log(event);
        let h3 = document.getElementById('studid');
        h3.innerText = `StudentenID: ${event.target.value}`;
    });
    
};

function vulKlasgroep(){
    // Example of dynamic property access:
    // data['2c']
    //loopen over de properties van een object
    let select = document.getElementById('klasgroep');
    for(let klasgroep in data){
        let option = document.createElement('option');
        option.innerText = klasgroep;
        option.value = klasgroep;
        select.appendChild(option);
    }
    vulLeerlingen('2a');
}

let vulLeerlingen = (klasgroep) => {
    let select = document.getElementById('leerlingen');
    select.innerHTML = '';
    for(let id in data[klasgroep]){
        let option = document.createElement('option');
        option.innerText = data[klasgroep][id];
        option.value = id;
        select.appendChild(option);
    }
}