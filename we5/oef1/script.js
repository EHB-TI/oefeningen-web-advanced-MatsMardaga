window.onload = async () => {
    console.log('test');

    let results = await fetch('data.json');
    let data = await results.json();
    console.log(data);


    document.getElementById('p1').innerText = `My name is ${data[1].name} and I am ${data[1].age} years old.`;

    let div = document.getElementById('content');
    let p = document.createElement('p');
    p.innerText = `My name is ${data[0].name} and I am ${data[0].age} years old.`;
    div.appendChild(p);
 
};


