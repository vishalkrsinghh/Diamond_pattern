let func = () => {

    for (let i = 0; i < 5; i++) {
        let gap = "";
        for (let j = 5; j > i; j--) {

            gap += " ";
        }

        for (let k = 0; k <= i; k++) {

            gap += '*';
        }

        for (let l = 1; l <= i; l++) {
            gap += '*';
        }

        console.log(gap);
    }


    for (let i = 5; i >= 0; i--) {
        let gap = "";
        for (let j = 5; j > i; j--) {

            gap += " ";
        }

        for (let k = 0; k <= i; k++) {

            gap += '*';
        }

        for (let l = 1; l <= i; l++) {
            gap += '*';
        }

        console.log(gap);
    }

    let body = document.getElementById('body');
    body.style.background="pink";
}