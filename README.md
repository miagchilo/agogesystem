# agogesystem (WIP)
online fitness coaching platform
with Google Login Authentication and Stripe for Payment

### Installing

Install Backend / server
```
cd server/
npm install
```
Install Frontend / client
```
cd server/client
npm install
```

### Starting
I use concurrently to start both client and server

In Server

```
cd client/
npm start dev
```

## Deployment

Deployed with heroku

https://dry-crag-64988.herokuapp.com/

## Built With

### CLIENT
* [REACT](https://reactjs.org/) - The web framework used
* [STYLED-COMPONENT](https://www.styled-components.com/) - for css Styling
### SERVER
* [NODE.JS](https://nodejs.org/en) - Javascript Engine
* [EXPRESS](https://expressjs.com/) - Node.js web application framework
* [STRIPE](https://stripe.com) - Payment Management
* [SENDGRID](https://sendgrid.com/) - Sending Emails
* [PASSPORT-google-oauth20](passport-google-oauth2) - Google Login Authentication
