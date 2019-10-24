# Friend Finder

This app is compatibility-based "FriendFinder" -- basically a dating app. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Live Link
 - https://safe-reef-40665.herokuapp.com/

## Usage

To use the website, simply go to the homepage and take the survey. Immediately after submitting the survey, your perfect best friend will pop up. There is also API access to the network's users and their personalized information. For research purposes.

## Requirements
- Modularity in the form of separate files for server logic, storing of friends, views, and routing
- 10-question survey to assess uniqueness of users
- Use `express`, `body-parser`, and `path` npm packages in the `server.js` file
- Separate JavaScript files for routing (`html-routes.js` and `api-routes.js`)
- Appropriate GET and POST routes for serving HTML pages and API calls
- Separate file for storing friends (`friends.js`)
- Calculate best match for user once survey is completed and return that match to the user

## Technologies Used

- JavaScript
- jQuery
- node.js
- Express.js
- HTML
- Bootstrap

## Code Explanation
- `server.js` file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
- There are 2 separate HTML files (`home.html` and `survey.html`) that serve as the front-end portion of the code; they determine what the user sees
- Our 2 routing files (`html-routes.js` and `api-routes.js`) determine the back-end logic
- Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
- A modal is then toggled, displaying the the best match to the person who just took the survey
- Friends are stored as such:

```js
{
	name: 'Michael',
    photo: 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png',
    scores: [5,5,4,4,2,3,3,5,5,5]
}
```