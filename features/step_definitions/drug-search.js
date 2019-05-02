const { Given, When, Then } = require('cucumber');
const Selector = require('testcafe').Selector;

Given('I navigate to the WellRx drug search page', async function() {
    await testController.navigateTo('https://wellrx.com');
});

When(/^I search for "([^"]*)" at location "([^"]*)"$/, function (drug, address) {

    return 'pending';
});

Then(/^I should see results for "([^"]*)"$/, function (drug) {
    return 'pending';
});