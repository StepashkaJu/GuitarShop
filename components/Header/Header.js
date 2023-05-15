class Header {

    render(count) {
        const header = `
        <div class="header-container">
            <div class="header-cartCounter">🔥${count}</div>
        </div>
    `;
        ROOT_HEADER.innerHTML = header; //рендерим данные products

    }

}

const headerPage = new Header();
const productsCart = localStorageUtils.getProducts();
headerPage.render(productsCart.length);