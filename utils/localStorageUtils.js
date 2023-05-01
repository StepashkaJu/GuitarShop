class LocalStorageUtils { //класс для работы с LocalStorage в браузере, который дожен делать получение списка продуктов или добавление нового
    constructor() { //т.к. ключ будет использховаться несколько раз, создаем констурктор
        this.keyName = 'products';
    }
    getProducts() { //получить все продукты из локального хранилища
        // нужно вызвать метод getItem в localStorage
        const productsLocalStorage = localStorage.getItem(this.keyName); //получение продукта из локального хранилища по ключу products
        if (productsLocalStorage !== null) { //если в ЛХ есть значение, то вернем массив значений, который получен из распарсеной строки
            return JSON.parse(productsLocalStorage);
        } else return []; //иначе пустой массив
    }
    putProducts(id) { //добавить новые продукты в локальное хранилище по id
        let products = this.getProducts(); //записываем уже все существующие значения
        let pushProducts = false; //изначально нового элемента нет в локальном хранилище
        const index = products.indexOf(id); //смотрим, есть ли уже такой продукт в локальном хранилище
        if (index == -1) { //Если его нет
            products.push(id); // добавляем
            pushProducts = true; // элемент появился в массиве
        } else products.splice(index, 1); // значит он есть, и мы его удаляем из корзины (по функционалу у нас можно элемент либо добавить в корзину, либо удалить при нажатии кнопки)

        localStorage.setItem(this.keyName, JSON.stringify(products)); //кладем значение ключа products в массив

        return { //возвращаем инфу, что мы добавили или удалили продукт ну и сам массив продуктов
            pushProducts: pushProducts,
            products: products,
        } 
    }
}


const localStorageUtils = new LocalStorageUtils();
