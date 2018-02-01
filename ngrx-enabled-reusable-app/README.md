# Working with multiple apps

This project is using angular cli to create angular app and trying to demonstrate how can we create our custom library and use it in example application.

## Working in lib

### Running Test Single Time

```
npm run test:lib
```

### Running Test in Watch Mode
```
npm run test:lib:watch
```

### Building Lib

```
npm run build:lib
```

### Creating Module in Lib

```
 ng g m items --app=lib
```

### Creating Component in Lib

```
 ng g c containers\product-image-container --app=lib
```

### Consuming library Module

This module is a feature library therefore import in appmodule 

```typescript
import { ProductManagementModule } from '@wonderful/product-management';

@NgModule({
  imports: [
    ...
    ProductManagementModule.forFeature({ baseUrl: 'someurl' }),
  ],
  ...
})
export class AppModule { }
```

### Consuming library components

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <add-product-container></add-product-container>
  `,
  styles: []
})
export class HomeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

```


## Working in example-app

### Start Example App

In order to start example app please run below cli command and navigate to `http://localhost:4210/` url.
```
npm run example:start
```

### Test Example App

```
npm run example:test
```

### Creating a module

Suppose I want to create products module in eample app. Here is the cli command:

```
ng g m products
```

### Creating a container component

suppose I have a feature module called as `products` and now I want to create an `add product container component` inside it. Here is the cli command for that:

```
ng g c products/containers/add-product-container 
```

### Creating a component

```
ng g c products\components\product-image
```
