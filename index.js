const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let ejs = require('ejs');

app.use(bodyParser.urlencoded())
app.set('view engine', 'ejs')

const USERS = [
  {
    "id": 1,
    "username": "george",
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id": 2,
    "username": "janet",
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "username": "emma",
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "username": "eve",
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "username": "charles",
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id": 6,
    "username": "tracey",
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
  }
]

app.get('/', (req, res) => {
  res.send('We are going to learn about EJS and Routing Parameters!')
})

app.get('/not-found', (req, res) => {
  res.sendFile(__dirname + '/pages/not-found.html')
})

app.get('/:username', (req, res) => {
  const { username } = req.params
  
  const user = USERS.find(user => user.username === username)

  if(!user) {
    return res.redirect('/not-found')
  }

  res.render('user', user)
})

app.listen(3000, () => {
  console.log('Server is up :)')
})



/*
  # EJS: Embedded JavaScript templating.
    - Access variable value:
      <%= variableName %>
    - Loop/condition body:
      <% %>

    # Routing Parameters:
      - Variables of URL


  # Extra code:
    app.get('/fruit', (req, res) => {
      res.render('test', {
        fruit: 'Pineapple',
        vegetable: 'Potato'
      })
    })

    app.get('/george', (req, res) => {
      res.render('user', {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg",
        isPremium: true,
        hobbies: ['Swimming', 'Dancing', 'Singing']
      })
    })

    app.get('/janet', (req, res) => {
      res.render('user', {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg",
        isPremium: false,
        hobbies: ['Reading Books', 'Singing', 'Coding', 'Cycling']
      })
    })

    app.get('/emma', (req, res) => {
      res.render('user', {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg",
        isPremium: true,
        hobbies: ['Coding']
      })
    })

    <% if(isPremium) { %>
      <span>👑 Premium</span>
    <% } %>

    <ul>
      <% hobbies.forEach(hobby => { %>
        <li><%= hobby %></li>
      <% }) %>
    </ul>

*/