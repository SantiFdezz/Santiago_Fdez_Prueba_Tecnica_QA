import { constants } from "../constants";

class GooglePages {
    visitPage(url){
        cy.visit(url);
        this.clickOn(constants.ACCEPT_COOKIES);
    }
    checkRedirection = (expectedUrl) => cy.url().should('include', expectedUrl);
    getElement = (field) =>cy.get(field).first().should('be.visible').scrollIntoView();;
    checkLink = (field) => cy.get(field).should('have.attr', 'href', WIKI_URL);
    typeOn = (field, text) => this.getElement(field).type(text+constants.ENTER_TYPE);
    clickOn = (field) => this.getElement(field).click();
    accesLink = (field) =>cy.get(field).first().scrollIntoView().click({force:true});
}

export default GooglePages;