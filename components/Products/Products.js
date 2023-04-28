class Products {

    //отображает (рендерит) данные на страничке, т.е переберет файлик CATALOG из папки constants и отобразит его на страничке Html
    render() {
        let htmlCatalog = '';
        CATALOG.forEach(({ id, price, name, img }) => { //деструктурировали объект, чтобы можно было выводить не всю инфу об объекте, а что-то конкретное
            htmlCatalog += `
          <li>
                <span>${name}</span>
                <img src="${img}"/>
                <span>${price}</span>
                <button>Добавить в корзину</button>
          </li>
          `;
        });

        const html = ` 
        <ul>
        ${htmlCatalog}
        </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}


const productsPage = new Products();
productsPage.render();