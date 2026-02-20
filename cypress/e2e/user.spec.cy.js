import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {
  
  //constantes (seletores) criadas para facilitar usar no script
  const selectorsList ={
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']"
  }

  //comando da automatização
  it.only('User Info Update - Success', () => {
        cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    //poderia também user o cy.visit para ir a pagina depois do login (cy.visit('/pim/viewPersonalDetails/empNumber/7'))
  })


  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert).contains('Invalid credentials')
  })
})
