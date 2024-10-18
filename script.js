const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById ("cart-total")
const checkoutBtn = document.getElementById ("checkout-btn")
const closeModalBtn = document.getElementById ("close-modal-btn")
const cartCounter = document.getElementById ("cart-count")
const addressInput = document.getElementById ("address")
const addressWarn = document.getElementById("address-warn")

let cart = [];

//Abrindo modal do carrinho.
cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
    updateCartModal();
})

//Clicando fora do modal
cartModal.addEventListener("click", function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})

//Adicionando no carrinho.
menu.addEventListener("click", function(event){
    //console.log(event.target)
    let parentButton = event.target.closest(".add-to-cart-btn")
    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        addToCart(name,price)
    }
})

//Função para adicionar no carrinho
function addToCart(name, price){
    const existeItem = cart.find(item => item.name === name)

    //Se o Item já exisitir, aumentar a quantidade para +1
    if(existeItem){
        existeItem.quantity +=1;
        
    }
    else{
        cart.push({
            name,
            price,
            quantity: 1,
        })
    }
    updateCartModal()

    
}

//Atualizando o carrrinho   
function updateCartModal(){
    cartItemsContainer.innerHTML = "";
    let total = 0; 

    cart.forEach(item => {
        const cartItemElement = document.createElement ("div");
        cartItemElement.classList.add("flex", "justifty-between", "mb-4", "flex-cool")
        
        cartItemElement.innerHTML = `
     <div class="flex items-center justify-between">
         <div>
         <p class="font-medium">${item.name}</p>
         <p>qts: ${item.price}</p>
         <p class="font-medium mt-2">  R$ ${item.quantity}</p>
         </div>

         <div> 
            <button>
                Remover
            </button>
         </div>
     </div>
        `

        cartItemsContainer.appendChild(cartItemElement)
    })
}