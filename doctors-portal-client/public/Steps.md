## Final Project

### Table of Contents

- [M71: Final Project Part-1 (Home page)](#m71-final-project-part-1-home-page)
  - [71.1 Module introduction and project setup](#711-module-introduction-and-project-setup)
  - [Environment Variables](#environment-variables)
  - [API Naming Convention](#api-naming-convention)
  - [Initial Setup of `React-Query`](#initial-setup-of-react-query)
  - [Fetching data using `useQuery` of `react-query`](#fetching-data-using-usequery-of-react-query)
  - [Server Deploy on `Vercel`](#server-deploy-on-vercel)
  - [3 ways to store images](#3-ways-to-store-images)
  - [How to Send SMTP Emails in Node.js With SendGrid](#how-to-send-smtp-emails-in-nodejs-with-sendgrid)
  - [Payment Steps](#payment-steps)
    - [`Resources`](#resources)
    - [Basic Stipe setup with simple card form - `Steps 01`](#basic-stipe-setup-with-simple-card-form---steps-01)
    - [Handle payment processing error and success - `Steps 02`](#handle-payment-processing-error-and-success---steps-02)

# M71: Final Project Part-1 (Home page)

## 71.1 Module introduction and project setup

- `Install react-router-dom`

``` Terminal
npm i react-router-dom@6
```
- [Install Tailwind-CSS](https://tailwindcss.com/docs/guides/create-react-app)
- [Install daisyUI](https://daisyui.com/docs/install/)

__Decision making for CSS:__

1. Vanilla CSS
2. Own internal library
3. Own library of CSS (Bootstrap or Tailwind)
4. Component library (React-Bootstrap, Material-UI, DaisyUI)

> `Notes:` Component library depends on Vanilla CSS

**[🔼Back to Top](#table-of-contents)**

## Environment Variables

``` JavaScript
// In .env (from server repo)

DB_USER=doctor_admin
DB_PASS=SX0Lx89Dwptj7Eed
ACCESS_TOKEN_SECRET=9afeec896f27951228603f3c9c9d3a7f4ed1239f06caadcc53a10bf0d982815e876d3a9df4209fb7e24ad1cb70041a8ef185103df592097f4ed45a1759de344c
EMAIL_SENDER_KEY= Remove this API keys that have been found to be publicly exposed on GitHub | found from SendGrid/vercel (API keys)
EMAIL_SENDER= Remove this credentials that have been found to be publicly exposed on GitHub | found from SendGrid/vercel (Email)
STRIPE_SECRET_KEY= found from stripe.com/vercel
```

**[🔼Back to Top](#table-of-contents)**

## API Naming Convention

``` JavaScript
/* API Naming Convention */

app.get('/booking') // get all booking in this collection | get more than one | by filter/query
app.get('/booking/:id') // get a specific booking
app.post('/booking') // add a new booking
app.patch('/booking/:id') // specific one (for update)
app.put('/booking/:id') // upsert ==> update (if exists) or insert (if doesn't exist)
app.delete('/booking/:id') // specific one
```

**[🔼Back to Top](#table-of-contents)**

## Initial Setup of `React-Query`

> Performant and powerful data synchronization for React. <br /><br /> Fetch, cache and update data in your React and React Native applications all without touching any `global state`. <br /><br /> React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze.

- [React Query](https://react-query-v3.tanstack.com/ "About react-query")
- [Installation](https://react-query-v3.tanstack.com/installation "Installation of react-query")
- [Quick Start](https://react-query-v3.tanstack.com/quick-start "Initial setup of react-query")

``` JavaScript
// In src/index.js

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'; // Step-01

// Create a client
const queryClient = new QueryClient(); // Step-02

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> // Step-03
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
```

**[🔼Back to Top](#table-of-contents)**

## Fetching data using `useQuery` of `react-query`

- [Overview](https://react-query-v3.tanstack.com/overview "Overview and code example")
- [Devtools](https://react-query-v3.tanstack.com/devtools "Help visualize all of the inner workings of React Query and will likely save you hours of debugging if you find yourself in a pinch!")

``` JavaScript
const [services, setServices] = useState([]);

const formattedDate = format(date, 'PP');
useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
        .then(data => setServices(data));
}, [formattedDate]);

/* React-Query is used as a alternative of this */

// Use react-query to update slots automatically
const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => 
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res => res.json())
)

if (isLoading) {
    return <Loading></Loading>
}

{treatment && <BookingModal refetch={refetch}></BookingModal>}

// after destructuring, call the refetch to load data
const BookingModal = ({ refetch }) => {}
refetch();
```

**[🔼Back to Top](#table-of-contents)**

## Server Deploy on `Vercel`

- [Server Deploy on Vercel (documentation)](https://github.com/crescentpartha/warehouse-management-server-side-crescentpartha/blob/main/Steps.md#server-deploy-on-vercel)
- [How to deploy Express API without using vercel CLI (documentation)](https://github.com/crescentpartha/warehouse-management-server-side-crescentpartha/blob/main/Steps.md#how-to-deploy-express-api-without-using-vercel-cli)
- Vercel Deploy Link: [https://doctors-portal-server-crescentpartha.vercel.app/](https://doctors-portal-server-crescentpartha.vercel.app/)
- Live Website Link: [https://doctors-portal-63bdf.web.app/](https://doctors-portal-63bdf.web.app/)

**[🔼Back to Top](#table-of-contents)**

## 3 ways to store images

1. Third party storage like ___imgbb.com___ | Free open public storage is ok for practice project
2. Your own storage in your own server (file system)
3. Database: Mongodb (image verify & size content)
    - `YUP`: to validate file like ___type___, ___size___.
      - `keyword`: Yup file validation for react hook form

**[🔼Back to Top](#table-of-contents)**

## How to Send SMTP Emails in Node.js With SendGrid

- [NODEMAILER](https://nodemailer.com/about/)
- [SMTP TRANSPORT](https://nodemailer.com/smtp/)
- [SendGrid](https://app.sendgrid.com/ "Email marketing company for promotional & transactional emails")
- [How to Send SMTP Emails in Node.js With SendGrid](https://www.twilio.com/blog/send-smtp-emails-node-js-sendgrid)
- [SendGrid transport for Nodemailer (github)](https://github.com/nodemailer/nodemailer-sendgrid)
- [nodemailer-sendgrid (npm)](https://www.npmjs.com/package/nodemailer-sendgrid)
- [nodemailer-sendgrid-transport (npm)](https://www.npmjs.com/package/nodemailer-sendgrid-transport)

**[🔼Back to Top](#table-of-contents)**

## Payment Steps

### `Resources`

- [stripe.com](https://stripe.com/en-gb-us)
- [React Stripe.js reference](https://stripe.com/docs/stripe-js/react "Learn about React components for Stripe.js and Stripe Elements")
- [stripe/react-stripe-js](https://github.com/stripe/react-stripe-js "React components for Stripe.js and Stripe Elements")
- [stripe/react-stripe-js/examples/hooks/0-Card-Minimal.js](https://github.com/stripe/react-stripe-js/blob/master/examples/hooks/0-Card-Minimal.js "Full Example | How to set up React Stripe.js and use Elements - How to accept a payment using the official Stripe docs.")
- [Stripe Samples](https://github.com/stripe-samples)
- [stripe-samples/checkout-one-time-payments](https://github.com/stripe-samples/checkout-one-time-payments "Accept payments with Stripe Checkout | Use Checkout to quickly collect one-time payments")
- [stripe test cards](https://stripe.com/docs/testing "https://stripe.com/docs/testing")
- [Simple Payment Integration](https://stripe.com/docs/payments/quickstart "Simple Payment Integration | Custom payment flow")

**[🔼Back to Top](#table-of-contents)**

### Basic Stipe setup with simple card form - `Steps 01`

1. Install `stripe` and `react stripe.js`
2. Open ___stripe account___ on stripe website
3. Get ___publishable key___ `pk___`
4. Create ___Elements wrapper___ using ___publishable key___
5. Create ___Checkout Form___ using Card element, useStripe, useElements
6. Get card elements info (___credit card info___)

**[🔼Back to Top](#table-of-contents)**

### Handle payment processing error and success - `Steps 02`

1. Get credit card info/error + display card error (if any)
2. get client secret from backend via payment intent post API
3. Store client secret on the client side

**[🔼Back to Top](#table-of-contents)**
