class MenuPage {
    
    selectorsList(){
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceBotton: "[href='/web/index.php/performance/viewPerformanceModule']"

        }

        return selectors

    }

    accessMyInfo(){
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessPerformance(){
        cy.get(this.selectorsList().performanceBotton).click()
    }
}

export default MenuPage