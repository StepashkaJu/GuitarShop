class Products {

    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.buttonLabelAdd = 'Добавить в корзину';
        this.buttonLabelRemove = 'Удалить из корзины';

    }

    //обработчик события добавления в корзину, чтобы менялось локальное хранилище
    changeSetLocationStorage(element, id) {
        const { pushProducts, products } = localStorageUtils.putProducts(id);
        if (pushProducts == true) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.buttonLabelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.buttonLabelAdd;
        }

        headerPage.render(products.length);

    }

    //рендерит данные на страничке, т.е переберет файлик CATALOG из папки constants и отобразит его на страничке Html
    render() {
        const productsStore = localStorageUtils.getProducts(); //сначала нужно получить ве то, что уже есть в лок хранилище

        let htmlCatalog = ''; //изначально пустой html-каталог

        CATALOG.forEach(({ id, price, name, img }) => { //деструктурировали объект, чтобы можно было выводить не всю инфу об объекте, а что-то конкретное
            //для задания текста в кнопке и стилей добавляем переменные
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) { //значит товар еще не добавлен в хранилище, на кнопке надо отобразить "добавить в корзину"
                activeText = this.buttonLabelAdd;
            } else {
                activeClass = ' ' + this.classNameActive //или он уже добавлен, и надпись на кнопке = Удалить из корзины, кнопка меняет стиль 
                activeText = this.buttonLabelRemove;
            }
            //на каждой итерации цикла будем добавлять одмин элемент li в htmlCatalog, this указывает на элемент, по которому мы нажали
            htmlCatalog += `
          <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}"/>
                <span class="products-element__price">⭐️ ${price.toLocaleString()} USD</span>
                <button class="products-element__btn${activeClass}" onclick="productsPage.changeSetLocationStorage(this, '${id}')"> 
                ${activeText}
                </button>
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
