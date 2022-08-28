window.onload = async () => {
    
        let resp = await fetch('oef.json');
        let data = await resp.json();

    document.getElementById('klasgroep').addEventListener('change', (event) => {
        vulLeerlingen(event.target.value);
    })

    vulKlasgroep = () => {

        for (let klasgroep in data) {
            let select = document.getElementById('klasgroep');
            let option = document.createElement('option');
            option.innerText = klasgroep;
            select.appendChild(option);
        }
        vulLeerlingen('2a');
    }

    vulLeerlingen = (klasgroep) => {
        let select = document.getElementById('leerlingen');
        select.innerText = '';
        for (let leerling in data[klasgroep]) {

            let option = document.createElement('option');
            option.innerText = data[klasgroep][leerling];
            select.appendChild(option);
        }
    }

    vulKlasgroep();
}

