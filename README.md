# React Covid App [1]

## Objectives

- Make use of `React.useState` to set and get state
- Make use of `React.useEffect` to trigger side-effects
- Build upon previous learning: mapping state to props
- Build upon previous learning: updating state via functions passed as props

## The Task

![Covid App](../../img/covid.png)

Build a simple app to show confirmed covid cases from a chosen country.

We'll be getting our data from a public API and will make use of two endpoints:

- `https://api.covid19api.com/countries` - Gets a list of countries
- `https://api.covid19api.com/total/country/${slug}/status/confirmed` - Gets cases for a country

- Create a new codepen from this [template](https://codepen.io/jcwrightson/pen/oNBQYRJ)
- Think about how many components you will design and where state will live
- On app mount, fetch a list of countries and render them in a select box
- On user select, fetch the cases for the chosen country and render those
- _Stretch_: Style with CSS
- _Bonus_: Show loading feedback to the user
- _Bonus_: Cache API results

## Running the solution (Instructor)

- Create a new codepen from this [template](https://codepen.io/jcwrightson/pen/oNBQYRJ)
- Copy and paste the contents of `../solutions/react-2/solution.js` into the `js` box, and `../solutions/react-2/solution.css` into the `css` box
