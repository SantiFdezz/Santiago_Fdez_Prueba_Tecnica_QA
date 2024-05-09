import { constants } from "../constants";
import CommonPages from '../utils/common_page.js';
const Common = new CommonPages();

class WikiPage {
    checkText = (text) => Common.getElement(constants.WIKI_PARAGRAPH(text));
    screenshotPage = () => cy.screenshot({ capture: 'viewport' }) ;
}

export default WikiPage;