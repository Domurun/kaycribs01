const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'kay-cribs',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
};

const getPropertiesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProperties');
}
getPropertiesRef.operationName = 'GetProperties';
exports.getPropertiesRef = getPropertiesRef;

exports.getProperties = function getProperties(dc) {
  return executeQuery(getPropertiesRef(dc));
};

const createInquiryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInquiry', inputVars);
}
createInquiryRef.operationName = 'CreateInquiry';
exports.createInquiryRef = createInquiryRef;

exports.createInquiry = function createInquiry(dcOrVars, vars) {
  return executeMutation(createInquiryRef(dcOrVars, vars));
};

const getMySavedPropertiesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMySavedProperties');
}
getMySavedPropertiesRef.operationName = 'GetMySavedProperties';
exports.getMySavedPropertiesRef = getMySavedPropertiesRef;

exports.getMySavedProperties = function getMySavedProperties(dc) {
  return executeQuery(getMySavedPropertiesRef(dc));
};
