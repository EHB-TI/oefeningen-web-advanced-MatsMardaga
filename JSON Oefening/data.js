window.onload = () => {
    async function getMannen() {
        let resp = await fetch('data.json');
        let data = await resp.json();
        mannen = data;

        document.getElementById('paragraaf').innerText = 2a.69069;
    }

    getMannen();


}