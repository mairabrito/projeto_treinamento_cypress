class ProductsPage {
  acessar() {
    cy.visit('/inventory.html');
  }

  validaTitulo() {
    cy.get('.title').should('have.text', 'Products');
  }

  adicionarItemAoCarrinho(nomeDoItem) {
    cy.contains(nomeDoItem).parent().parent().find('button').should('have.text', 'Add to cart').click();
  }

  removerItemDoCarrinho(nomeDoItem) {
    cy.contains(nomeDoItem).parent().parent().find('button').should('have.text', 'Remove').click();
  }

  validarAusenciaDeItem(nomeDoItem) {
    cy.contains(nomeDoItem).should('not.exist')
  }

  validarCarrinhoVazio() {
    cy.get('.shopping_cart_badge').should('not.exist');
  }

  validarQuantidadeDeItensNoCarrinho(quantidade) {
    cy.get('.shopping_cart_badge').should('have.text', quantidade.toString());
  }

  abrirCarrinho() {
    cy.get('.shopping_cart_link').click();
  }
}
  
export default new ProductsPage();
  