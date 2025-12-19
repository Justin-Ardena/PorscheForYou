# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListModels*](#listmodels)
  - [*GetFavorites*](#getfavorites)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*AddFavorite*](#addfavorite)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListModels
You can execute the `ListModels` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listModels(): QueryPromise<ListModelsData, undefined>;

interface ListModelsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListModelsData, undefined>;
}
export const listModelsRef: ListModelsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listModels(dc: DataConnect): QueryPromise<ListModelsData, undefined>;

interface ListModelsRef {
  ...
  (dc: DataConnect): QueryRef<ListModelsData, undefined>;
}
export const listModelsRef: ListModelsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listModelsRef:
```typescript
const name = listModelsRef.operationName;
console.log(name);
```

### Variables
The `ListModels` query has no variables.
### Return Type
Recall that executing the `ListModels` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListModelsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListModelsData {
  models: ({
    id: UUIDString;
    name: string;
    year: number;
    imageUrl?: string | null;
  } & Model_Key)[];
}
```
### Using `ListModels`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listModels } from '@dataconnect/generated';


// Call the `listModels()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listModels();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listModels(dataConnect);

console.log(data.models);

// Or, you can use the `Promise` API.
listModels().then((response) => {
  const data = response.data;
  console.log(data.models);
});
```

### Using `ListModels`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listModelsRef } from '@dataconnect/generated';


// Call the `listModelsRef()` function to get a reference to the query.
const ref = listModelsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listModelsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.models);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.models);
});
```

## GetFavorites
You can execute the `GetFavorites` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getFavorites(): QueryPromise<GetFavoritesData, undefined>;

interface GetFavoritesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetFavoritesData, undefined>;
}
export const getFavoritesRef: GetFavoritesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getFavorites(dc: DataConnect): QueryPromise<GetFavoritesData, undefined>;

interface GetFavoritesRef {
  ...
  (dc: DataConnect): QueryRef<GetFavoritesData, undefined>;
}
export const getFavoritesRef: GetFavoritesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getFavoritesRef:
```typescript
const name = getFavoritesRef.operationName;
console.log(name);
```

### Variables
The `GetFavorites` query has no variables.
### Return Type
Recall that executing the `GetFavorites` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetFavoritesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetFavoritesData {
  favorites: ({
    model: {
      id: UUIDString;
      name: string;
      year: number;
      imageUrl?: string | null;
    } & Model_Key;
  })[];
}
```
### Using `GetFavorites`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getFavorites } from '@dataconnect/generated';


// Call the `getFavorites()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getFavorites();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getFavorites(dataConnect);

console.log(data.favorites);

// Or, you can use the `Promise` API.
getFavorites().then((response) => {
  const data = response.data;
  console.log(data.favorites);
});
```

### Using `GetFavorites`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getFavoritesRef } from '@dataconnect/generated';


// Call the `getFavoritesRef()` function to get a reference to the query.
const ref = getFavoritesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getFavoritesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.favorites);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.favorites);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation has no variables.
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser } from '@dataconnect/generated';


// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef } from '@dataconnect/generated';


// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## AddFavorite
You can execute the `AddFavorite` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addFavorite(vars: AddFavoriteVariables): MutationPromise<AddFavoriteData, AddFavoriteVariables>;

interface AddFavoriteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddFavoriteVariables): MutationRef<AddFavoriteData, AddFavoriteVariables>;
}
export const addFavoriteRef: AddFavoriteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addFavorite(dc: DataConnect, vars: AddFavoriteVariables): MutationPromise<AddFavoriteData, AddFavoriteVariables>;

interface AddFavoriteRef {
  ...
  (dc: DataConnect, vars: AddFavoriteVariables): MutationRef<AddFavoriteData, AddFavoriteVariables>;
}
export const addFavoriteRef: AddFavoriteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addFavoriteRef:
```typescript
const name = addFavoriteRef.operationName;
console.log(name);
```

### Variables
The `AddFavorite` mutation requires an argument of type `AddFavoriteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddFavoriteVariables {
  modelId: UUIDString;
}
```
### Return Type
Recall that executing the `AddFavorite` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddFavoriteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddFavoriteData {
  favorite_insert: Favorite_Key;
}
```
### Using `AddFavorite`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addFavorite, AddFavoriteVariables } from '@dataconnect/generated';

// The `AddFavorite` mutation requires an argument of type `AddFavoriteVariables`:
const addFavoriteVars: AddFavoriteVariables = {
  modelId: ..., 
};

// Call the `addFavorite()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addFavorite(addFavoriteVars);
// Variables can be defined inline as well.
const { data } = await addFavorite({ modelId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addFavorite(dataConnect, addFavoriteVars);

console.log(data.favorite_insert);

// Or, you can use the `Promise` API.
addFavorite(addFavoriteVars).then((response) => {
  const data = response.data;
  console.log(data.favorite_insert);
});
```

### Using `AddFavorite`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addFavoriteRef, AddFavoriteVariables } from '@dataconnect/generated';

// The `AddFavorite` mutation requires an argument of type `AddFavoriteVariables`:
const addFavoriteVars: AddFavoriteVariables = {
  modelId: ..., 
};

// Call the `addFavoriteRef()` function to get a reference to the mutation.
const ref = addFavoriteRef(addFavoriteVars);
// Variables can be defined inline as well.
const ref = addFavoriteRef({ modelId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addFavoriteRef(dataConnect, addFavoriteVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.favorite_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.favorite_insert);
});
```

