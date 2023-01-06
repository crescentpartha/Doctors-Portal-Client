## Final Project

### Table of Contents

- [M71: Final Project Part-1 (Home page)](#m71-final-project-part-1-home-page)
  - [71.1 Module introduction and project setup](#711-module-introduction-and-project-setup)
  - [Environment Variables](#environment-variables)
  - [API Naming Convention](#api-naming-convention)

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
```

**[🔼Back to Top](#table-of-contents)**

## API Naming Convention

``` JavaScript
/* API Naming Convention */

app.get('/booking') // get all booking in this collection | get more than one | by filter/query
app.get('/booking/:id') // get a specific booking
app.post('/booking') // add a new booking
app.patch('/booking/:id') // specific one (for update)
app.delete('/booking/:id') // specific one
```

**[🔼Back to Top](#table-of-contents)**
