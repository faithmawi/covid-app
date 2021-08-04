# React Covid App [4]

## Objectives

- Refactor code from previous exercise to use a router
- Make use of `useParams` and `useHistory` hooks to get data from the `url` and to programmatically change the `url`

## The Task

![Covid App](../../img/covid.png)

Refactor current covid-19 app

- Add a `BrowserRouter` at the top of your app
- Add a main route `/` and a `/:slug` route to handle the following:
    - When the user selects a country, change the route to be it's `slug`
    - When the user loads the app with the `slug` populated, display the correct result
    - _stretch_: Add an extra route to change the `status` to query. i.e: `/sweden/recovered`

## Running the solution (Instructor)

- CD into `../solutions/react-4` and look at the readme
