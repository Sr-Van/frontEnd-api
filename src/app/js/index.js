import { Services } from "./services.js"

const myServ = new Services

const btn = document.querySelector('#button')


myServ.getProducts().then(resolve => console.log(resolve))


function enviarForm() {
    const product = {
        product: document.querySelector('#product').value,
        price: document.querySelector('#price').value,
        type: document.querySelector('#type').value,
        description: document.querySelector('#description').value
    }
    
    myServ.addProduct(product).then(resolve => console.log(resolve)).catch(err => console.log('erro', err))
}


btn.addEventListener('click', enviarForm)



