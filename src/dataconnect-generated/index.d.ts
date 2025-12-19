import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddFavoriteData {
  favorite_insert: Favorite_Key;
}

export interface AddFavoriteVariables {
  modelId: UUIDString;
}

export interface BodyType_Key {
  id: UUIDString;
  __typename?: 'BodyType_Key';
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface Favorite_Key {
  userId: UUIDString;
  modelId: UUIDString;
  __typename?: 'Favorite_Key';
}

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

export interface ListModelsData {
  models: ({
    id: UUIDString;
    name: string;
    year: number;
    imageUrl?: string | null;
  } & Model_Key)[];
}

export interface Model_Key {
  id: UUIDString;
  __typename?: 'Model_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface ListModelsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListModelsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListModelsData, undefined>;
  operationName: string;
}
export const listModelsRef: ListModelsRef;

export function listModels(): QueryPromise<ListModelsData, undefined>;
export function listModels(dc: DataConnect): QueryPromise<ListModelsData, undefined>;

interface AddFavoriteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddFavoriteVariables): MutationRef<AddFavoriteData, AddFavoriteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddFavoriteVariables): MutationRef<AddFavoriteData, AddFavoriteVariables>;
  operationName: string;
}
export const addFavoriteRef: AddFavoriteRef;

export function addFavorite(vars: AddFavoriteVariables): MutationPromise<AddFavoriteData, AddFavoriteVariables>;
export function addFavorite(dc: DataConnect, vars: AddFavoriteVariables): MutationPromise<AddFavoriteData, AddFavoriteVariables>;

interface GetFavoritesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetFavoritesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetFavoritesData, undefined>;
  operationName: string;
}
export const getFavoritesRef: GetFavoritesRef;

export function getFavorites(): QueryPromise<GetFavoritesData, undefined>;
export function getFavorites(dc: DataConnect): QueryPromise<GetFavoritesData, undefined>;

