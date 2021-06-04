/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNutrient = /* GraphQL */ `
  subscription OnCreateNutrient($owner: String) {
    onCreateNutrient(owner: $owner) {
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
export const onUpdateNutrient = /* GraphQL */ `
  subscription OnUpdateNutrient($owner: String) {
    onUpdateNutrient(owner: $owner) {
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
export const onDeleteNutrient = /* GraphQL */ `
  subscription OnDeleteNutrient($owner: String) {
    onDeleteNutrient(owner: $owner) {
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
export const onCreateContactForm = /* GraphQL */ `
  subscription OnCreateContactForm {
    onCreateContactForm {
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
export const onUpdateContactForm = /* GraphQL */ `
  subscription OnUpdateContactForm {
    onUpdateContactForm {
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
export const onDeleteContactForm = /* GraphQL */ `
  subscription OnDeleteContactForm {
    onDeleteContactForm {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($owner: String) {
    onCreateProfile(owner: $owner) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($owner: String) {
    onUpdateProfile(owner: $owner) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($owner: String) {
    onDeleteProfile(owner: $owner) {
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
export const onCreatePlant = /* GraphQL */ `
  subscription OnCreatePlant {
    onCreatePlant {
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
export const onUpdatePlant = /* GraphQL */ `
  subscription OnUpdatePlant {
    onUpdatePlant {
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
export const onDeletePlant = /* GraphQL */ `
  subscription OnDeletePlant {
    onDeletePlant {
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
export const onCreatePest = /* GraphQL */ `
  subscription OnCreatePest {
    onCreatePest {
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
export const onUpdatePest = /* GraphQL */ `
  subscription OnUpdatePest {
    onUpdatePest {
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
export const onDeletePest = /* GraphQL */ `
  subscription OnDeletePest {
    onDeletePest {
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
export const onCreateDisease = /* GraphQL */ `
  subscription OnCreateDisease {
    onCreateDisease {
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
export const onUpdateDisease = /* GraphQL */ `
  subscription OnUpdateDisease {
    onUpdateDisease {
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
export const onDeleteDisease = /* GraphQL */ `
  subscription OnDeleteDisease {
    onDeleteDisease {
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
export const onCreateRack = /* GraphQL */ `
  subscription OnCreateRack {
    onCreateRack {
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
export const onUpdateRack = /* GraphQL */ `
  subscription OnUpdateRack {
    onUpdateRack {
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
export const onDeleteRack = /* GraphQL */ `
  subscription OnDeleteRack {
    onDeleteRack {
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
export const onCreateNutrientTerminology = /* GraphQL */ `
  subscription OnCreateNutrientTerminology {
    onCreateNutrientTerminology {
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
export const onUpdateNutrientTerminology = /* GraphQL */ `
  subscription OnUpdateNutrientTerminology {
    onUpdateNutrientTerminology {
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
export const onDeleteNutrientTerminology = /* GraphQL */ `
  subscription OnDeleteNutrientTerminology {
    onDeleteNutrientTerminology {
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
export const onCreateStation = /* GraphQL */ `
  subscription OnCreateStation($owner: String) {
    onCreateStation(owner: $owner) {
      id
      water_schedule {
        cron
        duration
      }
      fertilizer_schedule {
        cron
        duration
      }
      station_name
      station_id
      user_id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateStation = /* GraphQL */ `
  subscription OnUpdateStation($owner: String) {
    onUpdateStation(owner: $owner) {
      id
      water_schedule {
        cron
        duration
      }
      fertilizer_schedule {
        cron
        duration
      }
      station_name
      station_id
      user_id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteStation = /* GraphQL */ `
  subscription OnDeleteStation($owner: String) {
    onDeleteStation(owner: $owner) {
      id
      water_schedule {
        cron
        duration
      }
      fertilizer_schedule {
        cron
        duration
      }
      station_name
      station_id
      user_id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateStationData = /* GraphQL */ `
  subscription OnCreateStationData {
    onCreateStationData {
      station_id
      sample_time
      station_data
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStationData = /* GraphQL */ `
  subscription OnUpdateStationData {
    onUpdateStationData {
      station_id
      sample_time
      station_data
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStationData = /* GraphQL */ `
  subscription OnDeleteStationData {
    onDeleteStationData {
      station_id
      sample_time
      station_data
      createdAt
      updatedAt
    }
  }
`;
