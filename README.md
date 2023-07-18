# Full-Stack Take Home — REST

This is the starter-code for our full-stack take home assessment. This project is split into two directories:

- `api/` is the Ruby on Rails API server.
- `console/` is the React/TS frontend.

The API comes with the following models:

| Model        | Description                                                                |
| ------------ | -------------------------------------------------------------------------- |
| `Chatroom`   | Chatrooms represent conversations with 9-1-1 callers during an emergency.  |
| `NatureCode` | Nature codes represent categories that describe the nature of a 9-1-1 call |

The console has been set up with [Material UI](https://mui.com/material-ui/getting-started/usage/) and [React Router](https://reactrouter.com/en/main).

## Assignment

### Gotchas

Before you get started, here are a few things to remember:

- This project uses Material UI's [`Box`](https://mui.com/system/react-box/) component which relies on MUI's [`sx` prop](https://mui.com/system/getting-started/the-sx-prop/).
  - This can be useful for providing consistent styling according to the project's theme
  - Feel free to use `Box`, other MUI components, or, create a CSS file. It's entirely up to you!
- This project contains examples of how to do everything that is required as part of the assignment.
  - If you can't find what you're looking for in the documentation of the tools used in this project, try looking through the repo for some examples!

Alright, let's get started! 🚀

### Part 1 - Updating Chatroom Descriptions

Users should be able to update a chatroom's description

- Add an "Edit" button to chatroom list item descriptions
- Clicking the "Edit" button should make the description editable and add two buttons: (1) cancel, and (2) save
- If saved, the chatroom's description should be updated

### Part 2 - Resolving Chatrooms

Users should be able to resolve chatrooms.

- Add a "Resolve" button to chatroom list items
- Clicking on the "Resolve" button should prompt the user to confirm they want to resolve the chatroom
- If confirmed, the chatroom's `archived` field should be updated to `true` and should be removed from the chatrooms page

## Expectations

- Correctness and completeness of the implemented features.
- Code quality, including readability, maintainability, and adherence to best practices.
- Proper use of Ruby on Rails, React, and TypeScript.
- Error handling and validation.
- Test coverage and quality.
- Git usage and commit history.

## Deliverables

- Fork the provided GitHub repository and create a new branch for your changes.
- Implement the required backend and frontend changes.
- Commit your code to the branch with clear commit messages.
- Push the branch to your forked repository.
- Submit the link via email to your forked repository for evaluation.

## Getting Started

### Running the API

Make sure you have [ruby installed](https://www.ruby-lang.org/en/documentation/installation/)!

#### Installation + Set Up

First, let's install all of the necessary dependencies

```sh
cd api
bundle install
```

Next, let's set up the database

```sh
cd api
bundle exec rails db:migrate db:seed
```

Finally, we can run the server!

```sh
cd api
bundle exec rails s
```

#### Running Tests

```sh
cd api
bundle exec rspec
```

### Running the console

This project uses [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable), so make sure you've got it installed!

#### Installation + Set Up

First, let's install all of the necessary dependencies

```sh
cd console
yarn install
```

All we need to do now is run the dev server!

```sh
cd console
yarn start
```
