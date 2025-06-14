Feature: TechGlobal Core Vrification

	Feature Description: Anything you type here is not considered as gherkin steps and will not executed

	Background:
		Given I am on "https://www.techglobal-training.com/"
		When I hover "Testing" menu item
		And I click "Frontend Testing" header option

	@Smoke @FrontendTesting
	Scenario: Fronted Testing verification
		Then I see "Frontend Testing" page
		And I see 10 practice cards
		And I see 10 project cards


#	@Smoke @FrontendTesting
#	Scenario: Fronted Testing HTML Elements verification
#		And I click "HTML Element" link
#		Then I see "HTML Element" page
#
#	@Smoke @FrontendTesting
#	Scenario: Fronted Testing Actions verification
#
#		And I click "Actions" link
#		Then I see "Actions" page