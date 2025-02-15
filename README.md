# CatWiki exercise by Brendan Murty

## Summary

An example solution for the CatWiki technical challenge.

![Screenshot](docs/assets/screenshot1.png)

## Author

Brendan Murty

- Email: [brendan@murty.au](mailto:brendan@murty.au)
- GitHub: [brendanmurty](https://github.com/brendanmurty)
- Website: [murty.au](https://murty.au)

## Included Features

- List cat breeds and allow a user to select a cat breed
- Show details of the selected cat breed
- List photos for the selected cat breed

## Thoughts and Future Improvement Ideas

- I have focussed on technical quality here over a more aesthetically pleasing design
- Tests would need to be added
  - For this example project, I have not included tests
  - Generally, tests should be made at the start of work on a feature
  - Each test should be written based on the agreed requirements of the feature
  - For this project, I would at least include tests for
    - API results are suitable
    - API authentication errors are handled
    - The API key is set and a sample request using it returns valid data
    - Photos are returned when given valid request data
- A UI library would probably be required
  - For this example project, I've applied my own basic styling via CSS files in the [client/src/styles](client/src/styles) directory
  - For a more complex system, a UI library like [Bootstrap](https://getbootstrap.com/) would likely save a lot of time
- Each different page should have it's own `view` directory
  - Implement the component nature of React for the pages themselves too
  - Makes it easier for larger teams to work together on the same repository without often causing merge conflicts
- A code style should be established
  - The engineering team should work together to create a set of code style rules together
  - This should then be documented and finalised by implementing linting configuration in the repository
  - Local environments must use this configuration in a pre-commit Git hook
  - Each Pull Request must then check changed code meets the code style rules
  - This will lower the risk of low-value Pull Request discussions about minor code style issues
- For this example project, I've been committing directly to the `main` branch
  - Working in an engineering team is often best served by using the [GitFlow branching model](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

## Initial setup

After installing [Node and NPM](https://nodejs.org/) on your local machine, open a Terminal window, navigate to the directory containing a local clone of this repository, then run: 

```
npm run setup
```

Then edit `.env` and add your [Cat API key](https://thecatapi.com/signup) as the value for the `CATWIKI_SERVER_CATAPI_KEY` variable.

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
