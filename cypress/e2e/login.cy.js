import LoginPage from '../support/pages/LoginPage';
import { faker } from '@faker-js/faker';

describe('Página de Login - TESTES', () => {
  beforeEach(() => {
    LoginPage.acessar();
    LoginPage.validaLogo();
  });

  it('Deve realizar login com sucesso, ao acessar com credenciais válidas', () => {
    const usuarioValido = Cypress.env('usuarioValido');
    const senhaValida = Cypress.env('senhaValida');

    LoginPage.preencherUsuario(usuarioValido);
    LoginPage.preencherSenha(senhaValida);
    LoginPage.submeterFormulario();

    cy.url().should('include', '/inventory.html');
  });

  it('Deve mostrar erro ao tentar realizar acesso com usuário não existente ou inválido', () => {
    const usuarioAleatorio = faker.internet.userName();
    const senhaAleatoria = faker.internet.password();

    LoginPage.preencherUsuario(usuarioAleatorio);
    LoginPage.preencherSenha(senhaAleatoria);
    LoginPage.submeterFormulario();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Deve mostrar erro ao tentar realizar acesso com usuário já bloqueado', () => {
    const senhaValida = Cypress.env('senhaValida');
    
    LoginPage.preencherUsuario('locked_out_user');
    LoginPage.preencherSenha(senhaValida);
    LoginPage.submeterFormulario();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.');
  });

  it('Deve validar erro ao acessar sem realizar o preenchimento de todos campos', () => {
    LoginPage.submeterFormulario();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username is required');
  });

});
