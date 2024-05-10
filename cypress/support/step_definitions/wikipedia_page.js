import WikiPage from '../../pages/wikipedia_page.js';
import GooglePages from '../../pages/google_page.js';
import CommonPages from '../../utils/common_page.js';

import {constants} from "../../constants.js"
const WikipediaPage = new WikiPage();
const GooglePage = new GooglePages();
const Common = new CommonPages();

Given("A user is on Google home page", () => {
    GooglePage.visitPage(constants.HOME_URL);
}); 
Given('the user entered search "automatizacion"', () => {
    Common.clickOn(constants.SEARCH_INPUT, false);         
    Common.typeOn(constants.SEARCH_INPUT, (constants.SEARCH_WORD+constants.ENTER_TYPE));
});
Given('the user see the search results', () => {
    Common.checkRedirection(constants.SEARCH_URL)
});
When('the user clicks on the Wikipedia link', () => {
    Common.clickOn(constants.WIKI_RESULT(constants.LINK_NAME), true)
    Common.checkRedirection(constants.WIKI_URL);

});

Then('on the Wikipedia page the user search "primer proceso" and makes a screenshot', () => {
    WikipediaPage.checkText(constants.FIRST_AUTOM);
    WikipediaPage.screenshotPage();
});

