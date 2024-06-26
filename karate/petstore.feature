Feature: Petstore API
    
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
        Given path `/user/${username}`
        And method get
        When status 200
        Then match response == data


    Scenario: Find pets by status and print data
        * def printPets = read('./utils/printPets.js')
        Given path '/pet/findByStatus'
        And param status = 'sold'
        And method get
        When status 200
        * def petsList = printPets(response)
        Then print(JSON.stringify(petsList))

    Scenario: Get pets by status and count by name
        * def printPets = read('./utils/printPets.js')
        * def petCounter = read('./utils/counterPets.js')
        Given path '/pet/findByStatus'
        And param status = 'sold'
        And method get
        When status 200
        * def petCount = petCounter(response)
        Then print(JSON.stringify(petCount))