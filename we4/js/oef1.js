window.onload = () => {

    (async function f() {

        let promise1 = new Promise((noErr, err) => {
           setTimeout(() => noErr('Done!'), 1000);
        });
        let result = await promise1;

        alert(result);
    })();
}


