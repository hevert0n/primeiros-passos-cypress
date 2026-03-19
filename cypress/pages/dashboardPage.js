class DashboardPage {
    selectorsList() {
        const selects = {
            dashboardGrid: ".orangehrm-dashboard-grid",

        }

        return selects
    }

    checkDashboardPage() {
            cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
            cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }
}        

export default DashboardPage