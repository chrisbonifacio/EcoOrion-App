import {API, graphqlOperation} from 'aws-amplify';

import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
// import * as subscriptions from "../graphql/subscriptions";

export const listPlants = async () => {
  return API.graphql({query: queries.listPlants});
};
export const getPlant = async id => {
  return API.graphql(graphqlOperation(queries.getPlant, {id}));
};
export const createPlant = async plantDetail => {
  return API.graphql(
    graphqlOperation(mutations.createPlant, {input: plantDetail}),
  );
};
export const updatePlant = async plantDetail => {
  return API.graphql(
    graphqlOperation(mutations.updatePlant, {input: plantDetail}),
  );
};
export const deletePlant = async id => {
  return API.graphql(graphqlOperation(mutations.deletePlant, {input: {id}}));
};

export const listDiseases = async () => {
  return API.graphql({query: queries.listDiseases});
};
export const getDisease = async id => {
  return API.graphql(graphqlOperation(queries.getDisease, {id}));
};
export const createDisease = async diseaseDetail => {
  return API.graphql(
    graphqlOperation(mutations.createDisease, {input: diseaseDetail}),
  );
};
export const updateDisease = async diseaseDetail => {
  return API.graphql(
    graphqlOperation(mutations.updateDisease, {input: diseaseDetail}),
  );
};
export const deleteDisease = async id => {
  return API.graphql(graphqlOperation(mutations.deleteDisease, {input: {id}}));
};

export const listPests = async () => {
  return API.graphql({query: queries.listPests});
};
export const getPest = async id => {
  return API.graphql(graphqlOperation(queries.getPest, {id}));
};
export const createPest = async pestDetail => {
  return API.graphql(
    graphqlOperation(mutations.createPest, {input: pestDetail}),
  );
};
export const updatePest = async pestDetail => {
  return API.graphql(
    graphqlOperation(mutations.updatePest, {input: pestDetail}),
  );
};
export const deletePest = async id => {
  return API.graphql(graphqlOperation(mutations.deletePest, {input: {id}}));
};

export const listRacks = async () => {
  return API.graphql({query: queries.listRacks});
};
export const getRack = async id => {
  return API.graphql(graphqlOperation(queries.getRack, {id}));
};
export const createRack = async rackDetail => {
  return API.graphql(
    graphqlOperation(mutations.createRack, {input: rackDetail}),
  );
};
export const updateRack = async rackDetail => {
  return API.graphql(
    graphqlOperation(mutations.updateRack, {input: rackDetail}),
  );
};
export const deleteRack = async id => {
  return API.graphql(graphqlOperation(mutations.deleteRack, {input: {id}}));
};

export const listNutrients = async () => {
  return API.graphql({query: queries.listNutrients});
};
export const getNutrient = async id => {
  return API.graphql(graphqlOperation(queries.getNutrient, {id}));
};
export const createNutrient = async nutrientDetail => {
  return API.graphql(
    graphqlOperation(mutations.createNutrient, {input: nutrientDetail}),
  );
};
export const updateNutrient = async nutrientDetail => {
  return API.graphql(
    graphqlOperation(mutations.updateNutrient, {input: nutrientDetail}),
  );
};
export const deleteNutrient = async id => {
  return API.graphql(graphqlOperation(mutations.deleteNutrient, {input: {id}}));
};

export const listNutrientTerminologys = async () => {
  return API.graphql({query: queries.listNutrientTerminologys});
};
export const getNutrientTerminology = async id => {
  return API.graphql(graphqlOperation(queries.getNutrientTerminology, {id}));
};
export const createNutrientTerminology = async nutrientTerminologyDetail => {
  return API.graphql(
    graphqlOperation(mutations.createNutrientTerminology, {
      input: nutrientTerminologyDetail,
    }),
  );
};
export const updateNutrientTerminology = async nutrientTerminologyDetail => {
  return API.graphql(
    graphqlOperation(mutations.updateNutrientTerminology, {
      input: nutrientTerminologyDetail,
    }),
  );
};
export const deleteNutrientTerminology = async id => {
  return API.graphql(
    graphqlOperation(mutations.deleteNutrientTerminology, {input: {id}}),
  );
};

export const listProfiles = async () => {
  return API.graphql({query: queries.listProfiles});
};
export const getProfile = async email => {
  return API.graphql(graphqlOperation(queries.getProfile, {email}));
};
export const createProfile = async profileDetail => {
  return API.graphql(
    graphqlOperation(mutations.createProfile, {input: profileDetail}),
  );
};
export const updateProfile = async profileDetail => {
  return API.graphql(
    graphqlOperation(mutations.updateProfile, {input: profileDetail}),
  );
};
export const deleteProfile = async email => {
  return API.graphql(
    graphqlOperation(mutations.deleteProfile, {input: {email}}),
  );
};

export const listStations = async () => {
  return API.graphql({query: queries.listStations});
};
export const getStation = async id => {
  return API.graphql(graphqlOperation(queries.getStation, {id}));
};
export const createStation = async stationDetail => {
  return API.graphql(
    graphqlOperation(mutations.createStation, {input: stationDetail}),
  );
};
export const updateStation = async stationDetail => {
  return API.graphql(
    graphqlOperation(mutations.updateStation, {input: stationDetail}),
  );
};
export const deleteStation = async id => {
  return API.graphql(graphqlOperation(mutations.deleteStation, {input: {id}}));
};
