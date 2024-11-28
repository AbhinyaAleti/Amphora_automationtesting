Feature: Test suite for Amphora website

Scenario: Search amphora, interact with product dropdowns,and newsletter signup
    Given the user is on the google website
    When user searches for amphora
    Then user clicks on the Amphora CTRM link
    And the user navigates to the amphora website