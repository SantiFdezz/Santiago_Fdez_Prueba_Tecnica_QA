import { constants } from "../constants";
import CommonPages from '../utils/common_page.js';
const Common = new CommonPages();

class GooglePages {
    visitPage(url){
        cy.visit(url);
        Common.clickOn(constants.ACCEPT_COOKIES);
    }
    checkLink = (field) => cy.get(field).should('have.attr', 'href', WIKI_URL);
    accesLink = (field) =>cy.get(field).first().scrollIntoView().click({force:true});
}

export default GooglePages;