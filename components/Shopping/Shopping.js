class Shopping {

    closeCart() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render(count) {

        const productsStore = localStorageUtils.getProducts(); //сначала нужно получить все то, что уже есть в лок хранилище
        let htmlCatalog = '';
        let sumPrice = 0;
        CATALOG.forEach(({ id, price, name }) => { //деструктурировали объект, чтобы можно было выводить не всю инфу об объекте, а что-то конкретное
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr>
                    <td class="shopping-element__name">⚡️ ${name}</td>
                    <td class="shopping-element__price">${price.toLocaleString()} USD</td>
                </tr>
                `
                sumPrice += price;
            }
        });


        const html = `
        <div class="shopping-container">
            <div class ="shopping-closeCart" onclick="shoppingPage.closeCart()";> </div>
            <table>
                ${htmlCatalog}
                <tr>
                    <td class="shopping-element__name">💥 Сумма</td>
                    <td class="shopping-element__price">${sumPrice.toLocaleString()} USD</td>
                </tr>
            </table>
        </div>`
        ROOT_SHOPPING.innerHTML = html; //рендерим данные 

    }

}

const shoppingPage = new Shopping();