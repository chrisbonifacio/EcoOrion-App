/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNutrient = /* GraphQL */ `
  query GetNutrient($id: ID!) {
    getNutrient(id: $id) {
      id
      name
      short_name
      type
      importance
      deficient_symptom
      leaf_position
      deficient_image {
        bucket
        region
        key
      }
      worsen
      solution
      toxic_symptom
      toxic_image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNutrients = /* GraphQL */ `
  query ListNutrients(
    $filter: ModelNutrientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNutrients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        short_name
        type
        importance
        deficient_symptom
        leaf_position
        deficient_image {
          bucket
          region
          key
        }
        worsen
        solution
        toxic_symptom
        toxic_image {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getContactForm = /* GraphQL */ `
  query GetContactForm($id: ID!) {
    getContactForm(id: $id) {
      id
      name
      email
      phone
      message
      createdAt
      updatedAt
    }
  }
`;
export const listContactForms = /* GraphQL */ `
  query ListContactForms(
    $filter: ModelContactFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStationData = /* GraphQL */ `
  query GetStationData($id: ID!) {
    getStationData(id: $id) {
      id
      data_type
      value
      data_created
      createdAt
      updatedAt
    }
  }
`;
export const listStationDatas = /* GraphQL */ `
  query ListStationDatas(
    $filter: ModelStationDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStationDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        data_type
        value
        data_created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($email: String!) {
    getProfile(email: $email) {
      email
      name
      phone
      address_1
      address_2
      address_3
      city
      state
      postcode
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $email: String
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProfiles(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        name
        phone
        address_1
        address_2
        address_3
        city
        state
        postcode
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPlant = /* GraphQL */ `
  query GetPlant($id: ID!) {
    getPlant(id: $id) {
      id
      name
      type
      scientific_name
      name_bm
      name_cn
      temperature {
        min
        max
        scale_unit
      }
      height {
        min
        max
        scale_unit
      }
      seed_planting_depth {
        min
        max
        scale_unit
      }
      planting_distance_between_plants {
        min
        max
        scale_unit
      }
      pruning_requirement
      soil_moisture
      sunlight {
        min
        max
        scale_unit
      }
      germination {
        min
        max
        scale_unit
      }
      harvest_day {
        min
        max
        scale_unit
      }
      harvest_month {
        min
        max
        scale_unit
      }
      water_amount
      watering_frequency
      watering_duration
      plant_nature
      pest_info
      disease_info
      image_url {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPlants = /* GraphQL */ `
  query ListPlants(
    $filter: ModelPlantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        scientific_name
        name_bm
        name_cn
        temperature {
          min
          max
          scale_unit
        }
        height {
          min
          max
          scale_unit
        }
        seed_planting_depth {
          min
          max
          scale_unit
        }
        planting_distance_between_plants {
          min
          max
          scale_unit
        }
        pruning_requirement
        soil_moisture
        sunlight {
          min
          max
          scale_unit
        }
        germination {
          min
          max
          scale_unit
        }
        harvest_day {
          min
          max
          scale_unit
        }
        harvest_month {
          min
          max
          scale_unit
        }
        water_amount
        watering_frequency
        watering_duration
        plant_nature
        pest_info
        disease_info
        image_url {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPest = /* GraphQL */ `
  query GetPest($id: ID!) {
    getPest(id: $id) {
      id
      name
      description
      detection
      management
      notes
      image_url {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPests = /* GraphQL */ `
  query ListPests(
    $filter: ModelPestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        detection
        management
        notes
        image_url {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDisease = /* GraphQL */ `
  query GetDisease($id: ID!) {
    getDisease(id: $id) {
      id
      name
      description
      detection
      management
      notes
      image_url {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDiseases = /* GraphQL */ `
  query ListDiseases(
    $filter: ModelDiseaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiseases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        detection
        management
        notes
        image_url {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRack = /* GraphQL */ `
  query GetRack($id: ID!) {
    getRack(id: $id) {
      id
      name
      description
      image_url {
        bucket
        region
        key
      }
      price
      createdAt
      updatedAt
    }
  }
`;
export const listRacks = /* GraphQL */ `
  query ListRacks(
    $filter: ModelRackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image_url {
          bucket
          region
          key
        }
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNutrientTerminology = /* GraphQL */ `
  query GetNutrientTerminology($id: ID!) {
    getNutrientTerminology(id: $id) {
      id
      name
      meaning
      image_url {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listNutrientTerminologys = /* GraphQL */ `
  query ListNutrientTerminologys(
    $filter: ModelNutrientTerminologyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNutrientTerminologys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        meaning
        image_url {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStation = /* GraphQL */ `
  query GetStation($id: ID!) {
    getStation(id: $id) {
      id
      user_id
      water_schedule {
        cron
        duration
      }
      fertilizer_schedule {
        cron
        duration
      }
      station_name
      createdAt
      updatedAt
    }
  }
`;
export const listStations = /* GraphQL */ `
  query ListStations(
    $filter: ModelStationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_id
        water_schedule {
          cron
          duration
        }
        fertilizer_schedule {
          cron
          duration
        }
        station_name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
