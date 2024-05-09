import { constants } from "../constants";

class WikiPage {
    getElement = (field) =>cy.get(field).first().should('be.visible').scrollIntoView();;
    clickOn = (field) => this.getElement(field).click();
    checkRedirection = (expectedUrl) => cy.url().should('include', expectedUrl);
    checkText = (text) => this.getElement(constants.WIKI_PARAGRAPH(text));
    screenshotPage = () => cy.screenshot({ capture: 'viewport' }) ;
}

export default WikiPage;