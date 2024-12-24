import LoginPage from '../support/pages/LoginPage';
import ProductsPage from '../support/pages/ProductsPage';
import CartPage from '../support/pages/CartPage';

describe('Página do Carrinho - TESTES', () => {
  beforeEach(() => {
    LoginPage.acessar();
    LoginPage.preencherUsuario('standard_user');
    LoginPage.preencherSenha('secret_sauce');
    LoginPage.submeterFormulario();

    ProductsPage.validaTitulo();
  });

  it('Deve ser possível acessar o carrinho vazio', () => {
    ProductsPage.abrirCarrinho();

    CartPage.validaTitulo();
    CartPage.validarCarrinhoEstaVazio();
  });

  it('Deve ser possível voltar para continuação de compras em carrinho vazio', () => {
    ProductsPage.abrirCarrinho();

    CartPage.validaTitulo();
    CartPage.validarCarrinhoEstaVazio();
    CartPage.acessarVoltaParaCompras();

    ProductsPage.validaTitulo();
  });

  it('Deve ser possível voltar para continuação de compras em carrinho com itens', () => {
    ProductsPage.adicionarItemAoCarrinho('Sauce Labs Backpack');
    ProductsPage.adicionarItemAoCarrinho('Sauce Labs Bike Light');
    ProductsPage.abrirCarrinho();

    CartPage.validaTitulo();
    CartPage.validarQuantidadeDeItensNoCarrinho(2);
    CartPage.acessarVoltaParaCompras();

    ProductsPage.validaTitulo();
    ProductsPage.validarQuantidadeDeItensNoCarrinho(2);
  });

  it('Deve ser possível acessar o carrinho após adição de um único item', () => {
    ProductsPage.adicionarItemAoCarrinho('Sauce Labs Backpack');
    ProductsPage.abrirCarrinho();

    CartPage.validaTitulo();
    CartPage.validarQuantidadeDeItensNoCarrinho(1);
  });

  it('Deve ser possível acessar o carrinho após adição de múltiplos itens', () => {
    ProductsPage.adicionarItemAoCarrinho('Sauce Labs Backpack');
    ProductsPage.adicionarItemAoCarrinho('Sauce Labs Bike Light');
    ProductsPage.abrirCarrinho();

    CartPage.validaTitulo();
    CartPage.validarQuantidadeDeItensNoCarrinho(2);
  });

  it('Deve ser possível remover item de carrinho com um único item', () => {
    const nomeDoItem = 'Sauce Labs Backpack';

    ProductsPage.adicionarItemAoCarrinho(nomeDoItem);
    ProductsPage.abrirCarrinho();

    CartPage.validaTitulo();
    CartPage.removerItemDoCarrinho(nomeDoItem)
    CartPage.validarCarrinhoEstaVazio();
  });

  it('Deve ser possível remover todos itens de carrinho com múltiplos itens', () => {
    const nomePrimeiroItem = 'Sauce Labs Backpack';
    const nomeSegundoItem = 'Sauce Labs Bike Light';

    ProductsPage.adicionarItemAoCarrinho(nomePrimeiroItem);
    ProductsPage.adicionarItemAoCarrinho(nomeSegundoItem);
    ProductsPage.abrirCarrinho();

    CartPage.validaTitulo();
    CartPage.validarQuantidadeDeItensNoCarrinho(2);
    CartPage.removerItemDoCarrinho(nomePrimeiroItem)
    CartPage.removerItemDoCarrinho(nomeSegundoItem)
    CartPage.validarCarrinhoEstaVazio();
  });
  
});