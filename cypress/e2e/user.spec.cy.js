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
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dataCloseButton: ".--close",
    submitButton: "[type='submit']"
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
    cy.get(selectorsList.firstNameField).clear().type('FistNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('EmployeeId')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherId')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseNumber')
    cy.get(selectorsList.genericField).eq(7).clear().type('2026-02-23') 
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert).contains('Invalid credentials')
  })
})
