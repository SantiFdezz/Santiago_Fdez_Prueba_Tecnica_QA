import { constants } from "../constants";
import CommonPages from '../utils/common_page.js';
const Common = new CommonPages();

class GooglePages {
    //T This method open the url sent and accept the cookies.
    visitPage(url){
        cy.visit(url);
        Common.clickOn(constants.ACCEPT_COOKIES);
    }
}

export default GooglePages;