import { CreateUserData, ListModelsData, AddFavoriteData, AddFavoriteVariables, GetFavoritesData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useListModels(options?: useDataConnectQueryOptions<ListModelsData>): UseDataConnectQueryResult<ListModelsData, undefined>;
export function useListModels(dc: DataConnect, options?: useDataConnectQueryOptions<ListModelsData>): UseDataConnectQueryResult<ListModelsData, undefined>;

export function useAddFavorite(options?: useDataConnectMutationOptions<AddFavoriteData, FirebaseError, AddFavoriteVariables>): UseDataConnectMutationResult<AddFavoriteData, AddFavoriteVariables>;
export function useAddFavorite(dc: DataConnect, options?: useDataConnectMutationOptions<AddFavoriteData, FirebaseError, AddFavoriteVariables>): UseDataConnectMutationResult<AddFavoriteData, AddFavoriteVariables>;

export function useGetFavorites(options?: useDataConnectQueryOptions<GetFavoritesData>): UseDataConnectQueryResult<GetFavoritesData, undefined>;
export function useGetFavorites(dc: DataConnect, options?: useDataConnectQueryOptions<GetFavoritesData>): UseDataConnectQueryResult<GetFavoritesData, undefined>;
