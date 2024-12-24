import LoginPage from '../support/pages/LoginPage';
import ProductsPage from '../support/pages/ProductsPage';
import CartPage from '../support/pages/CartPage';

describe('Página de Produtos - TESTES', () => {
  beforeEach(() => {
    LoginPage.acessar();
    LoginPage.preencherUsuario('standard_user');
    LoginPage.preencherSenha('secret_sauce');
    LoginPage.submeterFormulario();
  });

  it('Deve ser mostrado a página dos produtos', () => {
    ProductsPage.validaTitulo();
  });

  it('Deve ser possível adicionar um item ao carrinho', () => {
    ProductsPage.adicionarItemAoCarrinho('Sauce Labs Backpack');
    ProductsPage.validarQuantidadeDeItensNoCarrinho(1);
  });

  it('Deve ser possível adicionar múltiplos itens ao carrinho', () => {
    ProductsPage.adicionarItemAoCarrinho('Sauce Labs Backpack');
    ProductsPage.adicionarItemAoCarrinho('Sauce Labs Bike Light');
    ProductsPage.validarQuantidadeDeItensNoCarrinho(2);
  });

  it('Deve ser possível remover item único de carrinho', () => {
    const nomeDoItem = 'Sauce Labs Backpack';
    
    ProductsPage.adicionarItemAoCarrinho(nomeDoItem);
    ProductsPage.validarQuantidadeDeItensNoCarrinho(1);
    ProductsPage.removerItemDoCarrinho(nomeDoItem);
    ProductsPage.validarCarrinhoVazio();
  });

  it('Deve ser possível remover múltiplos itens de carrinho', () => {
    const nomePrimeiroItem = 'Sauce Labs Backpack';
    const nomeSegundoItem = 'Sauce Labs Bike Light';
    
    ProductsPage.adicionarItemAoCarrinho(nomePrimeiroItem);
    ProductsPage.adicionarItemAoCarrinho(nomeSegundoItem);
    ProductsPage.validarQuantidadeDeItensNoCarrinho(2);
    ProductsPage.removerItemDoCarrinho(nomePrimeiroItem);
    ProductsPage.validarQuantidadeDeItensNoCarrinho(1);
    ProductsPage.removerItemDoCarrinho(nomeSegundoItem);
    ProductsPage.validarCarrinhoVazio();
  });

});
