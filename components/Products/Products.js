class Products {

    //отображает данные на страничке
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
    }
}


const productsPage = new Products();
productsPage.render();