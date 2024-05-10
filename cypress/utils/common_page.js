class CommonPages {
    // This method checks if the current URL includes the provided expectedUrl.
    checkRedirection = (expectedUrl) => cy.url().should('include', expectedUrl);
    // This method gets the first visible element on the page that matches the field selector and then ensures that the element is in the user's view.
    getElement = (field) => cy.get(field).first().should('be.visible').scrollIntoView().then(null, (error) => {
        // Here w esee if there is an element not visible
        console.error(`Error obtaining the field: ${field}`, error);
    });
    // This method first gets the element using the getElement(field) method and then types the provided text
    typeOn = (field, text) => this.getElement(field).type(text);
    //  This method gets the first element that matches the field selector and then clicks on it. If the forced parameter is true
    clickOn = (field, forced) => this.getElement(field).click({force: forced});
}

export default CommonPages;