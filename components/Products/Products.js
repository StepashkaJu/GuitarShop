class Products {

    //отображает (рендерит) данные на страничке, т.е переберет файлик CATALOG из папки constants и отобразит его на страничке Html
    render() {
        let htmlCatalog = ''; //изначально пустой html-каталог

        CATALOG.forEach(({ id, price, name, img }) => { //деструктурировали объект, чтобы можно было выводить не всю инфу об объекте, а что-то конкретное
            //на каждой итерации цикла будем добавлять одмин элемент li в htmlCatalog
            htmlCatalog += `
          <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}"/>
                <span class="products-element__price">⭐️ ${price.toLocaleString()} USD</span>
                <button class="products-element__btn">Добавить в корзину</button>
          </li>
          `;
        });
//т.к. li помещается в ul, создаем константу, которая будет хранить в себе добавленный каталог, т.е. сначала заполнили его, а потом поместили в список
        const html = ` 
        <ul class="products-container">
        ${htmlCatalog}
        </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html; //рендерим данные products
    }
}


const productsPage = new Products(); //экземпляр класса Products
productsPage.render();