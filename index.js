function render() {
    const productsCart = localStorageUtils.getProducts();

    headerPage.render(productsCart.length);
    productsPage.render();

}

let CATALOG = [];

//http://localhost:3001/guitars

fetch('server/catalog.json') //отправляем запрос на сервер 
    //для получения результата в формате json
    .then((response) => {
        // Проверяем успешность запроса и выкидываем ошибку
        if (!response.ok) {
            throw new Error('Error occurred!')
        }
        return response.json()
    })
//если с запросом все ок
    .then(body => {
        CATALOG = body; //наш каталог присваивается body и рендерится
        render();
    })
    .catch(error => console.log(error)) //обработка ошибки