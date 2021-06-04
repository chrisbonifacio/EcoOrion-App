/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlant = /* GraphQL */ `
  mutation CreatePlant(
    $input: CreatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    createPlant(input: $input, condition: $condition) {
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
export const updatePlant = /* GraphQL */ `
  mutation UpdatePlant(
    $input: UpdatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    updatePlant(input: $input, condition: $condition) {
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
export const deletePlant = /* GraphQL */ `
  mutation DeletePlant(
    $input: DeletePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    deletePlant(input: $input, condition: $condition) {
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
export const createPest = /* GraphQL */ `
  mutation CreatePest(
    $input: CreatePestInput!
    $condition: ModelPestConditionInput
  ) {
    createPest(input: $input, condition: $condition) {
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
export const updatePest = /* GraphQL */ `
  mutation UpdatePest(
    $input: UpdatePestInput!
    $condition: ModelPestConditionInput
  ) {
    updatePest(input: $input, condition: $condition) {
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
export const deletePest = /* GraphQL */ `
  mutation DeletePest(
    $input: DeletePestInput!
    $condition: ModelPestConditionInput
  ) {
    deletePest(input: $input, condition: $condition) {
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
export const createDisease = /* GraphQL */ `
  mutation CreateDisease(
    $input: CreateDiseaseInput!
    $condition: ModelDiseaseConditionInput
  ) {
    createDisease(input: $input, condition: $condition) {
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
export const updateDisease = /* GraphQL */ `
  mutation UpdateDisease(
    $input: UpdateDiseaseInput!
    $condition: ModelDiseaseConditionInput
  ) {
    updateDisease(input: $input, condition: $condition) {
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
export const deleteDisease = /* GraphQL */ `
  mutation DeleteDisease(
    $input: DeleteDiseaseInput!
    $condition: ModelDiseaseConditionInput
  ) {
    deleteDisease(input: $input, condition: $condition) {
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
export const createRack = /* GraphQL */ `
  mutation CreateRack(
    $input: CreateRackInput!
    $condition: ModelRackConditionInput
  ) {
    createRack(input: $input, condition: $condition) {
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
export const updateRack = /* GraphQL */ `
  mutation UpdateRack(
    $input: UpdateRackInput!
    $condition: ModelRackConditionInput
  ) {
    updateRack(input: $input, condition: $condition) {
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
export const deleteRack = /* GraphQL */ `
  mutation DeleteRack(
    $input: DeleteRackInput!
    $condition: ModelRackConditionInput
  ) {
    deleteRack(input: $input, condition: $condition) {
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
export const createNutrientTerminology = /* GraphQL */ `
  mutation CreateNutrientTerminology(
    $input: CreateNutrientTerminologyInput!
    $condition: ModelNutrientTerminologyConditionInput
  ) {
    createNutrientTerminology(input: $input, condition: $condition) {
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
export const updateNutrientTerminology = /* GraphQL */ `
  mutation UpdateNutrientTerminology(
    $input: UpdateNutrientTerminologyInput!
    $condition: ModelNutrientTerminologyConditionInput
  ) {
    updateNutrientTerminology(input: $input, condition: $condition) {
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
export const deleteNutrientTerminology = /* GraphQL */ `
  mutation DeleteNutrientTerminology(
    $input: DeleteNutrientTerminologyInput!
    $condition: ModelNutrientTerminologyConditionInput
  ) {
    deleteNutrientTerminology(input: $input, condition: $condition) {
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
export const createNutrient = /* GraphQL */ `
  mutation CreateNutrient(
    $input: CreateNutrientInput!
    $condition: ModelNutrientConditionInput
  ) {
    createNutrient(input: $input, condition: $condition) {
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
export const updateNutrient = /* GraphQL */ `
  mutation UpdateNutrient(
    $input: UpdateNutrientInput!
    $condition: ModelNutrientConditionInput
  ) {
    updateNutrient(input: $input, condition: $condition) {
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
export const deleteNutrient = /* GraphQL */ `
  mutation DeleteNutrient(
    $input: DeleteNutrientInput!
    $condition: ModelNutrientConditionInput
  ) {
    deleteNutrient(input: $input, condition: $condition) {
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
export const updateContactForm = /* GraphQL */ `
  mutation UpdateContactForm(
    $input: UpdateContactFormInput!
    $condition: ModelContactFormConditionInput
  ) {
    updateContactForm(input: $input, condition: $condition) {
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
export const deleteContactForm = /* GraphQL */ `
  mutation DeleteContactForm(
    $input: DeleteContactFormInput!
    $condition: ModelContactFormConditionInput
  ) {
    deleteContactForm(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createContactForm = /* GraphQL */ `
  mutation CreateContactForm(
    $input: CreateContactFormInput!
    $condition: ModelContactFormConditionInput
  ) {
    createContactForm(input: $input, condition: $condition) {
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
export const createStation = /* GraphQL */ `
  mutation CreateStation(
    $input: CreateStationInput!
    $condition: ModelStationConditionInput
  ) {
    createStation(input: $input, condition: $condition) {
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
export const updateStation = /* GraphQL */ `
  mutation UpdateStation(
    $input: UpdateStationInput!
    $condition: ModelStationConditionInput
  ) {
    updateStation(input: $input, condition: $condition) {
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
export const deleteStation = /* GraphQL */ `
  mutation DeleteStation(
    $input: DeleteStationInput!
    $condition: ModelStationConditionInput
  ) {
    deleteStation(input: $input, condition: $condition) {
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
export const createStationData = /* GraphQL */ `
  mutation CreateStationData(
    $input: CreateStationDataInput!
    $condition: ModelStationDataConditionInput
  ) {
    createStationData(input: $input, condition: $condition) {
      station_id
      sample_time
      station_data
      createdAt
      updatedAt
    }
  }
`;
export const updateStationData = /* GraphQL */ `
  mutation UpdateStationData(
    $input: UpdateStationDataInput!
    $condition: ModelStationDataConditionInput
  ) {
    updateStationData(input: $input, condition: $condition) {
      station_id
      sample_time
      station_data
      createdAt
      updatedAt
    }
  }
`;
export const deleteStationData = /* GraphQL */ `
  mutation DeleteStationData(
    $input: DeleteStationDataInput!
    $condition: ModelStationDataConditionInput
  ) {
    deleteStationData(input: $input, condition: $condition) {
      station_id
      sample_time
      station_data
      createdAt
      updatedAt
    }
  }
`;
