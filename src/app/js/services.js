
const callApi =  ({method, url, params}) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');


    xhr.onreadystatechange = function() { 
      if(this.readyState == 4) {
        const json = JSON.parse(this.responseText)
        if(this.status !== 200) {
          reject(json)
        }else {
          resolve(json)
        }
          
      }
    }

    xhr.send(JSON.stringify(params));
  })
}



export class Services {

  getProducts = () =>{
    return callApi({
      method: 'get',
      url: "http://localhost:8080/products"
    })
  }

  newRequest = params => {
    return callApi({
      method: 'post',
      url: "http://localhost:8080/new-register",
      params: params
    })
  }

  addProduct = params => {
    return callApi({
      method: 'post',
      url: "http://localhost:8080/add-product",
      params: params
    })
  }


}




