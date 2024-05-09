Feature: "Automatization" Wikipedia Search
    This automate test checks the first automatization on the wikipedia.


Background:
    Given A user is on Google home page

    @focus
    Scenario: Successfully automatizated 

        Given the user entered search "automatizacion"      
        And the user see the search results
        When the user clicks on the Wikipedia link 
        Then on the Wikipedia page the user search "primer proceso" and makes a screenshot



