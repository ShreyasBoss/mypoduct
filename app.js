let exampleForm = document.querySelector('[name="exampleForm"]');
let exampleForm2 = document.querySelector('[name="exampleForm2"]');
let animationS = document.querySelector('.animationS');
let img = document.querySelector('.img');
let img2 = document.querySelector('.img2');
let rate_value = '';


function checkedRadio() {
    if (exampleForm.checked) {
        console.log('s');
        rate_value = exampleForm.value;
        if (rate_value == 'yes') {
            img.src = './c1.gif'
            img2.src = './c1.gif'
            setTimeout(() => {
                img.src = ''
                img2.src=''
                rate_value = '';
            }, 4000)
        }
    }

    if (exampleForm2.checked) {
        console.log('s');
        rate_value = exampleForm2.value;
        if (rate_value == 'yes') {
            img.src = './c1.gif'
            img2.src = './c1.gif'
            setTimeout(() => {
                img.src = ''
                img2.src=''
                rate_value = '';
            }, 4000)
        }
    }
}

