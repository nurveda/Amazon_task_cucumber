@wip
Feature: Create account on amazon


  Scenario: Navigating homepage of amazon.com
    Given user navigates to "amazon_url"
    And   homepage should display


  Scenario: Going to create an account page
    Given user navigates to "amazon_url"
    And   user should hover over to the "Hello, Sing in Account & Lists" box
    When  hits to "Start Here" link
    Then  title should change to "Amazon Registration"
    And   the header should be "Create account"


  Scenario Outline: Creating amazon account with regular way
    Given user navigates to "amazon_url"
    And   user should hover over to the "Hello, Sing in Account & Lists" box
    And   hits to "Start Here" link
    When  enters "<name>" to Your Name input box
    And   enters "<email>" to Email input box
    And   enters "<password>" to Password input box
    And   enters "<password>" to re-enter password input box
    And   hits the "Create your Amazon account" button
    Then  the title changed to "Authentication required"
    Examples:
      | name   | email                     | password                            |
      | Ramiz  | ramizKaraeski@gmail.com   | gucBizdenGelirYegen                 |
      | Polat  | polatAleemdar@hotmail.com | sonunuDusunenKahramanOlamaz         |
      | Cengiz | cengizAtay@gmail.com      | benCengizAtayMahallenizinKaraKedisi |
