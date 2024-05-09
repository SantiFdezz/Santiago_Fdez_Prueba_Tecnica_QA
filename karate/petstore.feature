Feature: Petstore API


#crear class user
    Background:
        * url baseUrl
        

    Scenario: Create a new user
        * def data = read('./data/newUser.json')
        And path '/user'
        And request data
        When method post
        Then status 200
    
    Scenario: Retrieve a user by username
        * def data = read('./data/newUser.json')
        * def username = data.username
        And path `/user/${username}`
        When method get
        Then status 200


    Scenario: Find pets by status
        * def printPets = read('./utils/printPets.js')
        Given path '/pet/findByStatus'
        And param status = 'sold'
        And method get
        When status 200
        Then printPets(response)
