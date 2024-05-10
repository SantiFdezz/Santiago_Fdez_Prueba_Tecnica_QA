import { constants } from "../constants";
import CommonPages from '../utils/common_page.js';
const Common = new CommonPages();

class WikiPage {
    // Finds an element with the specified text in a Wikipedia paragraph.
    checkText = (text) => Common.getElement(constants.WIKI_PARAGRAPH(text));
    // Takes a screenshot of the current viewport.
    screenshotPage = () => cy.screenshot({ capture: 'viewport' }) ;
}

export default WikiPage;