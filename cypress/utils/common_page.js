class CommonPages {
    checkRedirection = (expectedUrl) => cy.url().should('include', expectedUrl);
    getElement = (field) =>cy.get(field).first().should('be.visible').scrollIntoView();;
    typeOn = (field, text) => this.getElement(field).type(text);
    clickOn = (field, forced) => this.getElement(field).first().click({force: forced});

}

export default CommonPages;