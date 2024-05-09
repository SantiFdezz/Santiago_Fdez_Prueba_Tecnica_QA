import WikiPage from '../../pages/wikipedia_page.js';
import GooglePages from '../../pages/google_page.js';
import {constants} from "../../constants.js"
const WikipediaPage = new WikiPage();
const GooglePage = new GooglePages();

Given("A user is on Google home page", () => {
    GooglePage.visitPage(constants.HOME_URL);
}); 
Given('the user entered search "automatizacion"', () => {
    GooglePage.clickOn(constants.SEARCH_INPUT);         
    GooglePage.typeOn(constants.SEARCH_INPUT, constants.SEARCH_WORD);
});
Given('the user see the search results', () => {
    GooglePage.checkRedirection(constants.SEARCH_URL)
});
When('the user clicks on the Wikipedia link', () => {
    GooglePage.accesLink(constants.WIKI_RESULT(constants.LINK_NAME));
    WikipediaPage.checkRedirection(constants.WIKI_URL);
});

Then('on the Wikipedia page the user search "primer proceso" and makes a screenshot', () => {
    WikipediaPage.checkText(constants.FIRST_AUTOM);
    WikipediaPage.screenshotPage();
});

