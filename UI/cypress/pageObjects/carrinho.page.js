class CarrinhoPage {
  visitarProduto() {
    cy.visit('/produto/augusto-curry/')
  }

  definirQuantidade(qtd) {
    cy.get('.input-text.qty').clear().type(qtd)
  }

  adicionarAoCarrinho() {
    cy.get('.single_add_to_cart_button').click()
  }

  abrirCarrinho() {
    cy.get('.dropdown-toggle > .mini-cart-items').click()
  }

  validarMensagemSucesso() {
    cy.get('.woocommerce-message')
      .should('contain', 'foi adicionado no seu carrinho')
  }
}

export default new CarrinhoPage()
