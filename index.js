function render() {
    const productsCart = localStorageUtils.getProducts();
    
    headerPage.render(productsCart.length);
    productsPage.render();
    
}

let CATALOG = [];

//http://localhost:3001/guitars

fetch('server/catalog.json') //отправляем запрос на сервер 
.then(res => res.json())  //для получения результата в формате json
.then(body => {
    CATALOG = body; //наш каталог присваивается body и рендерится
    render();
})
.catch(error => console.log(error)) //обработка ошибки