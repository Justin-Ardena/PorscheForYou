import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'porscheforyou',
  location: 'us-east4'
};

export const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';

export function createUser(dc) {
  return executeMutation(createUserRef(dc));
}

export const listModelsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListModels');
}
listModelsRef.operationName = 'ListModels';

export function listModels(dc) {
  return executeQuery(listModelsRef(dc));
}

export const addFavoriteRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddFavorite', inputVars);
}
addFavoriteRef.operationName = 'AddFavorite';

export function addFavorite(dcOrVars, vars) {
  return executeMutation(addFavoriteRef(dcOrVars, vars));
}

export const getFavoritesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetFavorites');
}
getFavoritesRef.operationName = 'GetFavorites';

export function getFavorites(dc) {
  return executeQuery(getFavoritesRef(dc));
}

