const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'porscheforyou',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dc) {
  return executeMutation(createUserRef(dc));
};

const listModelsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListModels');
}
listModelsRef.operationName = 'ListModels';
exports.listModelsRef = listModelsRef;

exports.listModels = function listModels(dc) {
  return executeQuery(listModelsRef(dc));
};

const addFavoriteRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddFavorite', inputVars);
}
addFavoriteRef.operationName = 'AddFavorite';
exports.addFavoriteRef = addFavoriteRef;

exports.addFavorite = function addFavorite(dcOrVars, vars) {
  return executeMutation(addFavoriteRef(dcOrVars, vars));
};

const getFavoritesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetFavorites');
}
getFavoritesRef.operationName = 'GetFavorites';
exports.getFavoritesRef = getFavoritesRef;

exports.getFavorites = function getFavorites(dc) {
  return executeQuery(getFavoritesRef(dc));
};
