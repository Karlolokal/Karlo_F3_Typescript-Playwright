Feature: GitHub search

  @testsample1
  Scenario: Searching GitHub
    Given I am on the GitHub homepage
    When I fill in the search field
    Then I should see the search results
