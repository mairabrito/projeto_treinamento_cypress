class CartPage {
  acessar() {
    cy.visit('/cart.html');
  }

  validaTitulo() {
    cy.get('[data-test="title"]').should('have.text', 'Your Cart');
  }

  validarQuantidadeDeItensNoCarrinho(quantidade) {
    cy.get('[data-test="inventory-item"]').its('length').then((itemCount) => {
      cy.log('Total de items:', itemCount);

      expect(itemCount).to.equal(quantidade);
    });
  }
  
  validarCarrinhoEstaVazio() {
    cy.get('[data-test="inventory-item"]').should('not.exist');
  }

  removerItemDoCarrinho(nomeDoItem) {
    cy.contains(nomeDoItem).parent().parent().find('button').click();
  }

  acessarVoltaParaCompras() {
    cy.get('[data-test="continue-shopping"]').click();
  }

}
    
export default new CartPage();
    