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
    submitButton: "[type='submit']",
    genericComboBox: ".oxd-select-text--active",
    secondIdComboBox:'.oxd-select-dropdown > :nth-child(11)',
    thirdIdComboBox:'.oxd-select-dropdown > :nth-child(3)'
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
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherId')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseNumber')
    cy.get(selectorsList.genericField).eq(6).clear({force:true}).type('2026-02-23') 
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.get(selectorsList.secondIdComboBox).click()
    cy.get(selectorsList.genericComboBox).eq(1).click()
    cy.get(selectorsList.thirdIdComboBox).click()
    
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
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
