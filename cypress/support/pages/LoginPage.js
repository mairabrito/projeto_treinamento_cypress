class LoginPage {
  acessar() {
    cy.visit('/');
  }

  validaLogo() {
    cy.get('.login_logo').should('be.visible');
  }

  preencherUsuario(usuario) {
    cy.get('[data-test="username"]').type(usuario);
  }

  preencherSenha(senha) {
    cy.get('[data-test="password"]').type(senha);
  }

  submeterFormulario() {
    cy.get('[data-test="login-button"]').click();
  }
}
  
export default new LoginPage();
  