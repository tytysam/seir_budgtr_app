[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Budgtr

Build an express app to help you budget by letting you...

- See a full list of your income and expenditures
- See an individual income/expenditure item at a time
- Create a new income/expenditure item

**Learning Objectives**

- Practice building an express app
- Practice making an index route
- Practice making a show route
- Practice making new/create routes
- Practice adding static assets (CSS)

**Prerequisites**

- Express Basics (Create/Read/Static Assets)

---

## Getting Set Up

### Setting up our project with MVC Format

- In today's homework folder, create a `budgtr` folder
- `cd` into that folder and make all the folders and files needed for MVC
  - Create your `server.js` file in the root of the folder
  - **M**odels folder:
    - In today's homework folder, we provided a `budget.js` file that will act as your model. Move that file into the models folder you create
  - **V**iews folder:
    - Create all your JSX files in here
  - **C**ontrollers:
    - **For now, we actually don't need a controllers folder yet.** All your routes should be within `server.js`
  - Public folder:
    - Your CSS file(s) should go here

### Initiating our project

In terminal, make sure you're in the root of the `budgtr` folder, then...

  - `npm init`
  - `npm i express express-react-views react@16 react-dom@16`
  - `touch .gitignore`

Open `.gitignore` in your code editor and add `node_modules`

  - Why? So that you do not push up the node_modules folder to your github repo
  - Technically, you do not need it right now because the classroom repo already has one _but_ it's good practice to get in the habit of doing this now, because you _will_ need to do this any time you make a standalone express project in the future

Now you're all set up and ready to go! Want to double your file structure? Click below to see what it should look like

<details><summary>Expected file structure</summary><p>

![](https://imgur.com/Tv7CZ2l.png)

</p></details>

### Recognizing our routes

You will create the following four routes for this app:

- **Index** GET `/budgets`
- **Show** GET `/budgets/:id`
- **New** GET `/budgets/new`
- **Create** POST `/budgets`

---

## Building the app

### Getting Started

1. Set up a basic express server in `server.js` with an index route that `res.send('hello world')`

1. Once you're sure your server is working correctly, create an `Index.jsx` in the views folder and have it display an `h1` of Hello World

1. In your `server.js` file, configure it to use `express.static('public')`

1. Create a `css` folder in your `public` folder.

1. Then add a `styles.css` file within that `css` folder and add some style to your `h1` to make sure it's working correctly

1. Create a  `components` folder inside your `views` folder, and within the components folder, a `Layout.jsx`. Set it up to include your CSS file.

    - Don't remember how? Check the [JSX Review Markdown](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Arete/blob/master/unit_2/w05d02/morning_exercise/JSX_Review.md) from today, ask a friend or check back at your code along or take a look at Arthur's example in instructor_examples

1. Require the `Layout.jsx` component in your `Index.jsx` file and wrap everything in your `return` with the `<Layout>` component. Your `h1` should now be styled

Now that you're sure everything's working correctly, let's build the actual app functionality!

### Index

First, let's make it so that we can see all our data

1. We need to `require` all our data from the `./models/budget.js` file. Save it to a variable named `Budget`
1. Now, display all that data on your index page as a `<table>`

    - Each income/expenditure should be its own row `<tr>`
    - Each piece of data within that `<tr>` row should be its own table cell `<td>`
      - Just show the following properties: date, name, from, amount
      - Ignore the tags, those are for hungry for more bonuses!
    - The name of each income/expenditure should also be wrapped in an `<a>` tag.
      - Make sure you link to the item's show page
      - For now, these links will give you an error if you click on it. We'll fix that soon!

<details><summary>Expected appearance at this point</summary><p>

  ![](https://imgur.com/qxXxVrB.png)

</p></details>

### Show

We now want to make it so that when we click on one of the names, it'll take us to a show page. So let's do that

1. Create a show route in your `server.js`
1. Create a `Show.jsx` in your `views` folder, and `res.render` it
1. The show page should display...

    - The name of the item in an `<h1>`
    - A link that takes you back to the index view
    - The rest of the item's details (date, from, amount)! Feel free to organize and style those however you like
      - Ignore the tags, those are for hungry for more bonuses!

1. Don't forget to require the Layout component and wrap everything in your `return` with it

<details><summary>Sample appearance of the show page at this point</summary><p>

  ![](https://i.imgur.com/CAbXaXR.png)

</p></details>

### New

Now, we want to be able to add new items to the budget list. Let's first create the new page that will render a form for us to fill out

1. Create a new route in your `server.js`
1. Create a `New.jsx` in your `views` folder, and `res.render` it
1. The new page should display...

    - A descriptive title with `<h1>`
    - A link that takes you back to the index view
    - A `<form>` with the appropriate `action` and `method` and input fields within it for ...

        - date
        - name
        - amount
        - from
        - a submit button

1. Go back to the index view and add a link beneath the title that will take us to this new view
1. Don't forget to require the Layout component and wrap everything in your `return` with it

<details><summary>Expected appearance of the new page at this point</summary><p>

  ![](https://i.imgur.com/fy2cRzT.png)

</p></details>

### Post

Cool, we have a form -- let's make it post!

1. Create a post route in your `server.js`, for now just make it `res.send(req.body)` so you can make sure you're getting back the correct data
    - Uh oh, are you getting an error? If you are, here's a hint: don't forget to configure some middleware first!
1. Once you're sure you're getting back the correct data, `.push(req.body)` to the `Budget` variable that holds all the data
1. Then make it so that the route `res.redirect`'s back to the index, and you should be able to see the newly created item at the bottom of the page
    - If you click on the new item, it should also render the show page correctly

### Innovation Time

Sweet, you now have a fully functioning budget tracker! It is quite basic however, so let's add one more neat little function that you haven't quite done in class yet - hence, innovation time!

Remember, this is all still just JavaScript, so you can write as much JS logic as you want to make the app more useful beyond just showing the data as is.

#### The feature

Let's make it so that at the top of the index view, we can see the total amount of money we have in the bank based on all our data.

1. In the index route of your `server.js`, somehow sum of all the item amounts from the `Budget` data and save it to a variable called `bankAccount`
1. Pass that variable to your index view and display it somewhere at the top in an `h2`
1. Make sure this value is updating every time you add a new item as well
1. Make it so that if the value is less than 0, the color the `h2` is red
1. Make it so that if the value is greater than 0, the color of the `h2` is green

<details><summary>Expected appearance of the index page at this point</summary><p>

  ## When bankAccount > 0

  ![](https://i.imgur.com/onrs7EL.png)

  ## When bankAccount < 0

  ![](https://i.imgur.com/znQffJs.png)

</p></details>

#### Tips

1. Pseudocode on your own, figure out YOUR way of solving it
1. Have a code graveyard so we can see what you attempted - and so can you, to keep track of what didn't work and why
1. Talk it through with fellow students
1. Collaborate - have a friend help you solve it your way or help a friend solve it their way
1. If you research online, make sure you link the helpful articles on stack overflow/elsewhere

---

## Submission Guidelines

- Must be submitted no later than the start of the next class

## Technical Requirements

1. Must be able to run without syntax errors
2. Must have index, show, create, new routes, using REST
3. Must have basic MVC structure

---

## Hungry for More?

<details><summary>Click to see some possibilities!</summary><p>

  ### Styling

1. Now that your app functions, go back and try to add some styling! Feel free to use a CSS framework if you prefer

### More Logic

1. If you look at the given data, you'll notice there are tags

    - Render them as list items in an unordered list on the show page of the item
    - Update your form so that the user can add tags to items that they create
      - Hmm, how can you make sure they're saved as elements of an array instead of one long string?

1. Add logic to check whether the item is an expenditure or income and display it accordingly

    - Render expenditures with a red background on the index page
    - Render incomes with a green background on the index page

1. On the form, make it so that the user can check a checkbox saying whether the item they're adding is an expenditure or an income

    - That way, they can just enter a number into the amount input, and you will handle in the backend whether the number should be negative or positive

### More Apps

1. You know how to build an application now! What are you waiting for? Come up with a theme and build your own app for more reps! 

### Super Bonus

  - Currently, because we're not connected to an actual database, newly added data does not persist. We will learn how to do it properly with a mongo database soon, but there is one way you can circumvent that for now - [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API). Try using it to make your newly added data persist

  </p></details>

  ---

  *Copyright 2020, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
