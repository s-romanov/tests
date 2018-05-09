var wd = require('wd');
var assert = require('assert');
var asserters = wd.asserters;
var capabilities = {
 'device' : 'Google Nexus 9',
 'os_version' : '5.1'
}

Object.assign(capabilities, {
  'browserstack.user' : 'admin155',
  'browserstack.key' : 'ZnMdsqXawiRu4ypQFRiw',
  'build' : 'Node Android',
  'name': 'force_touch_test',
  'app' : 'bs://99055b0c9ea2e2e95723b7a76c2a07be5526b7ea',
  'browserstack.debug' : true
});

driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");
 
driver
  .init(capabilities)
  .then(function () {
    return driver.waitForElementByAccessibilityId('location_field', asserters.isDisplayed, 3000);
  }).
  then(function(locationField){
    return locationField.click();
  }).
  then(function () {
    return driver.waitForElementByAccessibilityId('location_field', asserters.isDisplayed, 5000);
  }).
  then(function(inputfield) {
    return inputfield.sendKeys("Lon");
  }).
  then(function () {
    return driver.waitForElementByAccessibilityId('location_field', asserters.isDisplayed, 5000);
  }).
  then(function(inputfield) {
    return inputfield.sendKeys("don");
  }).then(function () {
    return driver.waitForElementByAccessibilityId('London', asserters.isDisplayed, 10000).
    then(function(el){
      return el.click()
    });
  })
  .then(function(londonResult) {
    return londonResult.click();
  })
  .then(function () {
    return driver.waitForElementByAccessibilityId('search_button', asserters.isDisplayed, 5000);
  })
  .then(function(searchButton) {
    return searchButton.click();
  })
  .then(function () {
    return driver.waitForElementByAccessibilityId('search_button', asserters.isDisplayed, 5000);
  })
  .fin(function() { return driver.quit(); })
  .done();