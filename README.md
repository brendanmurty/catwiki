# CatWiki exercise by Brendan Murty

This is a basic template to get you started with the CatWiki challenge.
It contains a frontend and a backend, with some very basic interaction
between them. Feel free to modify whatever you wish, or to start 
completely from scratch! :smiley_cat:

## Author

Brendan Murty

Email: [brendan@murty.au](mailto:brendan@murty.au)

GitHub: [brendanmurty](https://github.com/brendanmurty)

Website [murty.au](https://murty.au)

## Included Features

- 

## Thoughts and Future Improvement Ideas

- Each different page should have it's own `view` directory
  - Implement the component nature of React for the pages themselves too
  - Makes it easier for larger teams to work together on the same repository without often causing merge conflicts
- A code style should be established
  - The engineering team should work together to create a set of code style rules together
  - This should then be documented and finalised by implementing linting configuration in the repository
  - Local environments must use this configuration in a pre-commit Git hook
  - Each Pull Request must then check changed code meets the code style rules
  - This will lower the risk of low-value Pull Request discussions about minor code style issues
- 

## Initial setup

After installing [Node and NPM](https://nodejs.org/) on your local machine, open a Terminal window, navigate to the directory containing a local clone of this repository, then run: 

```
npm install
cd client
npm install
```

## Starting the backend

To start up the backend Node.js server, run the following command in your
terminal (note: you'll need to have Node v16.x or above installed):

```
npm start
```

The server will run on port 3001 by default. You can test it by running
something like this:

```
curl localhost:3001/api
{"message":"Hello from CatWiki!"}
```

## Starting the frontend

Open a new tab, and run the following commands in your terminal:

```
cd client
npm start
```

This should open up a new page in your default web browser at `localhost:3000`.
At this point, you should see the placeholder CatWiki app homepage.

## Running frontend tests

From the `client` directory, run the following:

```
npm test
```

This will run the test suite for you.

## Deploying to Heroku

First, make sure you have a Heroku account, and have successfully logged
in to Heroku on the command line via `heroku login`.

You'll need to create a new Heroku app (if you haven't already). You can
do this with the following (replace `${insert-your-app-name-here}` with the
word `catwiki` followed by your actual name, e.g. `catwiki-johnsmith`):

```
heroku app:create ${insert-your-app-name-here}
```

Next we need to add a Git remote for Heroku and commit any changes:

```
heroku git:remote -a ${insert-your-app-name-here}
git add .
git commit -am "Deploy app to Heroku"
```

Finally we can push our code to the Heroku remote, which will automatically
build and run our app for us. 

```
git push heroku master
```

You'll then be able to access your app at 
`http://${insert-your-app-name-here}.herokuapp.com`! :tada:

## Pushing changes to your GitHub repository

```
git remote add origin git@github.com:${your-github-username}/catwiki.git
git push origin master
```
