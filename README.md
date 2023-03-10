# Product Demo App

This is a demo app for product lists and filtering on categories.

# Clone and run app

Clone the repo from https://github.com/ssanju01/product-app.git and follow the given instructions below

```bash
cd product-app
npm i
npm start
```

### `npm i`

Install all the npm packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Project structure

 - [README.md](README.md)
   - [package.json](package.json)
   - __public__
     - [favicon.ico](public/favicon.ico)
     - [index.html](public/index.html)
     - [logo192.png](public/logo192.png)
     - [logo512.png](public/logo512.png)
     - [manifest.json](public/manifest.json)
     - [robots.txt](public/robots.txt)
   - __src__
     - [App.css](src/App.css)
     - [App.test.tsx](src/App.test.tsx)
     - [App.tsx](src/App.tsx)
     - __Types__
       - [APIResponse.ts](src/Types/APIResponse.ts)
       - [IProduct.ts](src/Types/IProduct.ts)
       - [IProductReducerState.ts](src/Types/IProductReducerState.ts)
       - [IProductState.ts](src/Types/IProductState.ts)
       - [IReducerPayload.ts](src/Types/IReducerPayload.ts)
       - [IRequestPayload.ts](src/Types/IRequestPayload.ts)
     - __components__
       - [FilteredProductTable.tsx](src/components/FilteredProductTable.tsx)
       - [ProductCategorySelection.tsx](src/components/ProductCategorySelection.tsx)
       - [ProductRow.tsx](src/components/ProductRow.tsx)
       - [ProductTable.tsx](src/components/ProductTable.tsx)
     - [index.css](src/index.css)
     - [index.tsx](src/index.tsx)
     - [logo.svg](src/logo.svg)
     - __network__
       - [HttpService.ts](src/network/HttpService.ts)
     - [reportWebVitals.ts](src/reportWebVitals.ts)
     - [setupTests.ts](src/setupTests.ts)
     - __store__
       - [index.ts](src/store/index.ts)
       - [mutations.ts](src/store/mutations.ts)
       - __products__
         - [actions.ts](src/store/products/actions.ts)
         - [reducers.ts](src/store/products/reducers.ts)
   - [tsconfig.json](tsconfig.json)