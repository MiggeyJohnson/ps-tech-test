# Poker Stars Test

## Usage 

Make sure you have node and npm installed first 

- run `npm install` 
- run `npm run test`

The test will run in the console along with the output.

The 'test' script lives in the package.json and has the following params:
- Browser - what browser to run tests in
- Reporter - whichever reporting to output test results to - I used junit and mocha reporting as the results .xml file can be used in Jenkins to display results.

## Scenarios 
Both scenarios are in the file `cypress/integration/pokerStarsTechTest/scenario1and2tests.spec.js`. 

## Commands
Custom cypress commands are under cypress/support/commands.js

## Notes
These test scenarios were written using live data, as days go on the data may not exist. I have tried to mitigate this by changing leagues and using sports with a busy calendar, so you will see that the first test will look for Darts premier league for example.

