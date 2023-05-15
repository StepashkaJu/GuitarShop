class Header {

    headerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
        <div class="header-container">
            <div class="header-cartCounter" onclick="headerPage.headerOpenShoppingPage()";>🔥${count}</div>
        </div>
    `;
        ROOT_HEADER.innerHTML = html; //рендерим данные products

    }

}

const headerPage = new Header();
const productsCart = localStorageUtils.getProducts();
headerPage.render(productsCart.length);