class MyInfoPage {
    selectorsList() {
        const selects = {
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

        return selects
    }


        fillPersonalDetails(fisrtName, lastName){
            cy.get(this.selectorsList().firstNameField).clear().type(fisrtName)
            cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        }
        
        fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, licenceDateExpiry) {
            cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
            cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
            cy.get(this.selectorsList().genericField).eq(6).clear({force:true}).type(licenceDateExpiry) 
        }

        saveForm(){
            cy.get(this.selectorsList().submitButton).eq(1).click({force: true})
            cy.get('body').should('contain', 'Successfully Saved')
            cy.get('.oxd-toast-close')
        }

        fillStatus() {
            cy.get(this.selectorsList().dataCloseButton).click()
            cy.get(this.selectorsList().genericComboBox).eq(0).click()
            cy.get(this.selectorsList().secondIdComboBox).click()
            cy.get(this.selectorsList().genericComboBox).eq(1).click()
            cy.get(this.selectorsList().thirdIdComboBox).click()

           
            
}       
}
export default MyInfoPage