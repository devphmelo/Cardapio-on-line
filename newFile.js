const { cartBtn, cartModal } = require("./script");

//Abrindo modal do carrinho.
cartBtn.addEventlistener("click", function () {
    cartModal.style.display = "flex";
});
