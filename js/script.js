console.log('prompt connected')
// alert('Ki khobor mama')
const showAlert = () => {
    const number = Math.random() * 10;
    console.log(number)
    if (number < 5) {
        alert('Ki khobor mama')
    }
}

const askSomething = () => {
    const decision = confirm('Are you coming picnic?')
    console.log(decision)
    if (decision === true) {
        alert('1000 tk niya asis')
    }
    else {
        alert('DGM!!! dure giya mor')
    }
}

const getUserInfo = () => {
    const name = prompt('tell us your name', 'Afzal Hossain');
    console.log(name);
    if (!!name) {
        console.log('Welcome here', name)
    }
}