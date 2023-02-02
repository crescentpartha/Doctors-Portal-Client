## Final Project

### Table of Contents

- [M71: Final Project Part-1 (Home page)](#m71-final-project-part-1-home-page)
  - [71.1 Module introduction and project setup](#711-module-introduction-and-project-setup)
  - [Environment Variables](#environment-variables)
  - [API Naming Convention](#api-naming-convention)
  - [Initial Setup of `React-Query`](#initial-setup-of-react-query)
  - [Fetching data using `useQuery` of `react-query`](#fetching-data-using-usequery-of-react-query)
  - [Server Deploy on `Vercel`](#server-deploy-on-vercel)

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
