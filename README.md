# Hackaton for Payments and CRM

Hello! Time for hackaton!

Vi använder oss av **React** för att rendera GUI:t och **Enzyme** och **Jest** för att skriva tester.

Just nu finns 2 komponenter, **RandomQuote** och **RadioButtons**. Blir ni klara med dessa två får ni gärna skapa egna komponenter och testa dessa med!

Börja med att klona detta repo.

Vänligen installera node (> v8) och npm (> v5). Detta görs enklast med [nvm](https://github.com/creationix/nvm).

Efter det kan man köra

```bash
yarn install
```

Följt av

```bash
yarn start
```

Då startar projektet på localhost:3000.

Vill man köra testerna skriver man

```bash
yarn test
```

Och vill man lägga till nya tester skapar man en testfil som heter t.ex. **ComponentName.test.js**

## Testfall

Vi har definierat 4 olika testfall:

#### RandomQuote:

- Klicka på knapp och få upp ett quote
- Om quotet är från uggla skall en bild visas upp

#### RadioButtons

- Se till att flera inte kan vara ikryssade samtidigt
- Om checkboxen uggla är ikryssad och man skriver Magnus i textboxen skall uggla komma upp

## Länkar

[Enzyme docs](https://airbnb.io/enzyme/docs/api/)

[Jest docs](https://jestjs.io/docs/en/getting-started)

[Användbar snabbgenomgång vid behov](https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675)
