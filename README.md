<h1 align="center">Trillo Shop Client</h1>

<p align="center">
<img src="https://img.shields.io/badge/made%20by-krzysztoftalar-blue.svg" />

<img src="https://img.shields.io/badge/-React-blue?logo=react" />

<img src="https://img.shields.io/badge/-Redux-%23764abc?logo=redux" />

<img src="https://img.shields.io/badge/-TypeScript-blue?logo=typescript" alt="Icon"/>

<img src="https://img.shields.io/badge/css-Sass-%23c69?logo=sass" />

<img src="https://img.shields.io/badge/license-MIT-green" />
</p>

## About The Project

_This is the client-side of the Trillo Shop application. The project is under construction..._

_Go to **[Trillo Shop Server](https://github.com/krzysztoftalar/trillo-shop-server-net-core)**._

<br/>

<p align="center">
  <img src="./react-app/src/assets/img/trillo-1.png" width="70%" alt="Project">
</p>

<p align="center">
  <img src="./react-app/src/assets/img/trillo-2.png" width="70%" alt="Project">
</p>

<p align="center">
  <img src="./react-app/src/assets/img/trillo-3.png" width="70%" alt="Project">
</p>

## Features

- Shopping cart management
- Creating an order
- Payment with Stripe - for payment testing use this card number: `4242 4242 4242 4242`, future expiration date and three-number CVC.
- Login - test account: `email: bob@test.com` `password: Pa$$w0rd`

## Built With

| Client                                                                                                                                                                                      
| ---------------------------------------------------------------------------------------------------------------- 
| [React](https://reactjs.org/) 
| [Redux](https://redux.js.org/introduction/getting-started)
| [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
| [TypeScript](https://www.typescriptlang.org/)
| [Axios](https://github.com/axios/axios)
| [React Hook Form](https://react-hook-form.com/)
| [Sass](https://sass-lang.com/)
| [Stripe](https://stripe.com/en-pl)

## Getting Started

### Prerequisites

- Node.js
- Stripe account 

### Installation

1. **Navigate into your project directory and run the following command to download packages.**

```shell
npm install
```

2. **For Stripe payment set your public key in `.env.development` file**

```dotenv
STRIPE_PUBLIC_KEY="ENTER YOUR PUBLIC KEY" 
```
      
3. **Start the development environment.**

```shell
npm start
```

Your site is now running at `http://localhost:3000`

## License

This project is licensed under the MIT License.

## Contact

**Krzysztof Talar** - [Linkedin](https://www.linkedin.com/in/ktalar/) - krzysztoftalar@protonmail.com
