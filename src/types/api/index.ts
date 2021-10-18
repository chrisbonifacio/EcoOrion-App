/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlantInput = {
  id?: string | null,
  name: string,
  type: string,
  scientific_name: string,
  name_bm: string,
  name_cn?: string | null,
  temperature?: RangeInput | null,
  height?: RangeInput | null,
  seed_planting_depth?: RangeInput | null,
  planting_distance_between_plants?: RangeInput | null,
  pruning_requirement: string,
  soil_moisture: string,
  sunlight?: RangeInput | null,
  germination?: RangeInput | null,
  harvest_day?: RangeInput | null,
  harvest_month?: RangeInput | null,
  water_amount: string,
  watering_frequency: string,
  watering_duration: string,
  plant_nature: string,
  pest_info: string,
  disease_info: string,
  image_url?: Array< ImageInput | null > | null,
};

export type RangeInput = {
  min?: number | null,
  max?: number | null,
  scale_unit?: string | null,
};

export type ImageInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelPlantConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  scientific_name?: ModelStringInput | null,
  name_bm?: ModelStringInput | null,
  name_cn?: ModelStringInput | null,
  pruning_requirement?: ModelStringInput | null,
  soil_moisture?: ModelStringInput | null,
  water_amount?: ModelStringInput | null,
  watering_frequency?: ModelStringInput | null,
  watering_duration?: ModelStringInput | null,
  plant_nature?: ModelStringInput | null,
  pest_info?: ModelStringInput | null,
  disease_info?: ModelStringInput | null,
  and?: Array< ModelPlantConditionInput | null > | null,
  or?: Array< ModelPlantConditionInput | null > | null,
  not?: ModelPlantConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Plant = {
  __typename: "Plant",
  id: string,
  name: string,
  type: string,
  scientific_name: string,
  name_bm: string,
  name_cn?: string | null,
  temperature?: Range | null,
  height?: Range | null,
  seed_planting_depth?: Range | null,
  planting_distance_between_plants?: Range | null,
  pruning_requirement: string,
  soil_moisture: string,
  sunlight?: Range | null,
  germination?: Range | null,
  harvest_day?: Range | null,
  harvest_month?: Range | null,
  water_amount: string,
  watering_frequency: string,
  watering_duration: string,
  plant_nature: string,
  pest_info: string,
  disease_info: string,
  image_url?:  Array<Image | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type Range = {
  __typename: "Range",
  min?: number | null,
  max?: number | null,
  scale_unit?: string | null,
};

export type Image = {
  __typename: "Image",
  bucket: string,
  region: string,
  key: string,
};

export type UpdatePlantInput = {
  id: string,
  name?: string | null,
  type?: string | null,
  scientific_name?: string | null,
  name_bm?: string | null,
  name_cn?: string | null,
  temperature?: RangeInput | null,
  height?: RangeInput | null,
  seed_planting_depth?: RangeInput | null,
  planting_distance_between_plants?: RangeInput | null,
  pruning_requirement?: string | null,
  soil_moisture?: string | null,
  sunlight?: RangeInput | null,
  germination?: RangeInput | null,
  harvest_day?: RangeInput | null,
  harvest_month?: RangeInput | null,
  water_amount?: string | null,
  watering_frequency?: string | null,
  watering_duration?: string | null,
  plant_nature?: string | null,
  pest_info?: string | null,
  disease_info?: string | null,
  image_url?: Array< ImageInput | null > | null,
};

export type DeletePlantInput = {
  id: string,
};

export type CreatePestInput = {
  id?: string | null,
  name: string,
  description: string,
  detection: string,
  management: string,
  notes: string,
  image_url: Array< ImageInput | null >,
};

export type ModelPestConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  detection?: ModelStringInput | null,
  management?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelPestConditionInput | null > | null,
  or?: Array< ModelPestConditionInput | null > | null,
  not?: ModelPestConditionInput | null,
};

export type Pest = {
  __typename: "Pest",
  id: string,
  name: string,
  description: string,
  detection: string,
  management: string,
  notes: string,
  image_url:  Array<Image | null >,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePestInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  detection?: string | null,
  management?: string | null,
  notes?: string | null,
  image_url?: Array< ImageInput | null > | null,
};

export type DeletePestInput = {
  id: string,
};

export type CreateDiseaseInput = {
  id?: string | null,
  name: string,
  description: string,
  detection: string,
  management: string,
  notes: string,
  image_url?: Array< ImageInput | null > | null,
};

export type ModelDiseaseConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  detection?: ModelStringInput | null,
  management?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelDiseaseConditionInput | null > | null,
  or?: Array< ModelDiseaseConditionInput | null > | null,
  not?: ModelDiseaseConditionInput | null,
};

export type Disease = {
  __typename: "Disease",
  id: string,
  name: string,
  description: string,
  detection: string,
  management: string,
  notes: string,
  image_url?:  Array<Image | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDiseaseInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  detection?: string | null,
  management?: string | null,
  notes?: string | null,
  image_url?: Array< ImageInput | null > | null,
};

export type DeleteDiseaseInput = {
  id: string,
};

export type CreateRackInput = {
  id?: string | null,
  name: string,
  description: string,
  image_url: Array< ImageInput | null >,
  price: number,
};

export type ModelRackConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelRackConditionInput | null > | null,
  or?: Array< ModelRackConditionInput | null > | null,
  not?: ModelRackConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Rack = {
  __typename: "Rack",
  id: string,
  name: string,
  description: string,
  image_url:  Array<Image | null >,
  price: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRackInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  image_url?: Array< ImageInput | null > | null,
  price?: number | null,
};

export type DeleteRackInput = {
  id: string,
};

export type CreateNutrientTerminologyInput = {
  id?: string | null,
  name: string,
  meaning: string,
  image_url: Array< ImageInput | null >,
};

export type ModelNutrientTerminologyConditionInput = {
  name?: ModelStringInput | null,
  meaning?: ModelStringInput | null,
  and?: Array< ModelNutrientTerminologyConditionInput | null > | null,
  or?: Array< ModelNutrientTerminologyConditionInput | null > | null,
  not?: ModelNutrientTerminologyConditionInput | null,
};

export type NutrientTerminology = {
  __typename: "NutrientTerminology",
  id: string,
  name: string,
  meaning: string,
  image_url:  Array<Image | null >,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNutrientTerminologyInput = {
  id: string,
  name?: string | null,
  meaning?: string | null,
  image_url?: Array< ImageInput | null > | null,
};

export type DeleteNutrientTerminologyInput = {
  id: string,
};

export type CreateNutrientInput = {
  id?: string | null,
  name: string,
  short_name: string,
  type: string,
  importance: string,
  deficient_symptom: string,
  leaf_position: string,
  deficient_image: Array< ImageInput | null >,
  worsen: string,
  solution: string,
  toxic_symptom: string,
  toxic_image: Array< ImageInput | null >,
};

export type ModelNutrientConditionInput = {
  name?: ModelStringInput | null,
  short_name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  importance?: ModelStringInput | null,
  deficient_symptom?: ModelStringInput | null,
  leaf_position?: ModelStringInput | null,
  worsen?: ModelStringInput | null,
  solution?: ModelStringInput | null,
  toxic_symptom?: ModelStringInput | null,
  and?: Array< ModelNutrientConditionInput | null > | null,
  or?: Array< ModelNutrientConditionInput | null > | null,
  not?: ModelNutrientConditionInput | null,
};

export type Nutrient = {
  __typename: "Nutrient",
  id: string,
  name: string,
  short_name: string,
  type: string,
  importance: string,
  deficient_symptom: string,
  leaf_position: string,
  deficient_image:  Array<Image | null >,
  worsen: string,
  solution: string,
  toxic_symptom: string,
  toxic_image:  Array<Image | null >,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateNutrientInput = {
  id: string,
  name?: string | null,
  short_name?: string | null,
  type?: string | null,
  importance?: string | null,
  deficient_symptom?: string | null,
  leaf_position?: string | null,
  deficient_image?: Array< ImageInput | null > | null,
  worsen?: string | null,
  solution?: string | null,
  toxic_symptom?: string | null,
  toxic_image?: Array< ImageInput | null > | null,
};

export type DeleteNutrientInput = {
  id: string,
};

export type UpdateContactFormInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  message?: string | null,
};

export type ModelContactFormConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactFormConditionInput | null > | null,
  or?: Array< ModelContactFormConditionInput | null > | null,
  not?: ModelContactFormConditionInput | null,
};

export type ContactForm = {
  __typename: "ContactForm",
  id: string,
  name: string,
  email: string,
  phone: string,
  message: string,
  createdAt: string,
  updatedAt: string,
};

export type DeleteContactFormInput = {
  id: string,
};

export type CreateProfileInput = {
  email: string,
  name: string,
  phone: string,
  address_1: string,
  address_2: string,
  address_3: string,
  city: string,
  state: string,
  postcode: string,
};

export type ModelProfileConditionInput = {
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address_1?: ModelStringInput | null,
  address_2?: ModelStringInput | null,
  address_3?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postcode?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type Profile = {
  __typename: "Profile",
  email: string,
  name: string,
  phone: string,
  address_1: string,
  address_2: string,
  address_3: string,
  city: string,
  state: string,
  postcode: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateProfileInput = {
  email: string,
  name?: string | null,
  phone?: string | null,
  address_1?: string | null,
  address_2?: string | null,
  address_3?: string | null,
  city?: string | null,
  state?: string | null,
  postcode?: string | null,
};

export type DeleteProfileInput = {
  email: string,
};

export type CreateContactFormInput = {
  id?: string | null,
  name: string,
  email: string,
  phone: string,
  message: string,
};

export type CreateStationInput = {
  id?: string | null,
  water_schedule: SchedulerInput,
  fertilizer_schedule: SchedulerInput,
  station_name: string,
  station_id: string,
  user_id: string,
};

export type SchedulerInput = {
  cron: string,
  duration: number,
};

export type ModelStationConditionInput = {
  station_name?: ModelStringInput | null,
  station_id?: ModelStringInput | null,
  user_id?: ModelStringInput | null,
  and?: Array< ModelStationConditionInput | null > | null,
  or?: Array< ModelStationConditionInput | null > | null,
  not?: ModelStationConditionInput | null,
};

export type Station = {
  __typename: "Station",
  id: string,
  water_schedule: Scheduler,
  fertilizer_schedule: Scheduler,
  station_name: string,
  station_id: string,
  user_id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Scheduler = {
  __typename: "Scheduler",
  cron: string,
  duration: number,
};

export type UpdateStationInput = {
  id: string,
  water_schedule?: SchedulerInput | null,
  fertilizer_schedule?: SchedulerInput | null,
  station_name?: string | null,
  station_id?: string | null,
  user_id?: string | null,
};

export type DeleteStationInput = {
  id: string,
};

export type CreateStationDataInput = {
  station_id: string,
  sample_time: number,
  station_data: string,
};

export type ModelStationDataConditionInput = {
  station_id?: ModelStringInput | null,
  station_data?: ModelStringInput | null,
  and?: Array< ModelStationDataConditionInput | null > | null,
  or?: Array< ModelStationDataConditionInput | null > | null,
  not?: ModelStationDataConditionInput | null,
};

export type StationData = {
  __typename: "StationData",
  station_id: string,
  sample_time: number,
  station_data: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStationDataInput = {
  station_id?: string | null,
  sample_time: number,
  station_data?: string | null,
};

export type DeleteStationDataInput = {
  sample_time: number,
};

export type ModelNutrientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  short_name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  importance?: ModelStringInput | null,
  deficient_symptom?: ModelStringInput | null,
  leaf_position?: ModelStringInput | null,
  worsen?: ModelStringInput | null,
  solution?: ModelStringInput | null,
  toxic_symptom?: ModelStringInput | null,
  and?: Array< ModelNutrientFilterInput | null > | null,
  or?: Array< ModelNutrientFilterInput | null > | null,
  not?: ModelNutrientFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelNutrientConnection = {
  __typename: "ModelNutrientConnection",
  items?:  Array<Nutrient | null > | null,
  nextToken?: string | null,
};

export type ModelContactFormFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelContactFormFilterInput | null > | null,
  or?: Array< ModelContactFormFilterInput | null > | null,
  not?: ModelContactFormFilterInput | null,
};

export type ModelContactFormConnection = {
  __typename: "ModelContactFormConnection",
  items?:  Array<ContactForm | null > | null,
  nextToken?: string | null,
};

export type ModelProfileFilterInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address_1?: ModelStringInput | null,
  address_2?: ModelStringInput | null,
  address_3?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postcode?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items?:  Array<Profile | null > | null,
  nextToken?: string | null,
};

export type ModelPlantFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  scientific_name?: ModelStringInput | null,
  name_bm?: ModelStringInput | null,
  name_cn?: ModelStringInput | null,
  pruning_requirement?: ModelStringInput | null,
  soil_moisture?: ModelStringInput | null,
  water_amount?: ModelStringInput | null,
  watering_frequency?: ModelStringInput | null,
  watering_duration?: ModelStringInput | null,
  plant_nature?: ModelStringInput | null,
  pest_info?: ModelStringInput | null,
  disease_info?: ModelStringInput | null,
  and?: Array< ModelPlantFilterInput | null > | null,
  or?: Array< ModelPlantFilterInput | null > | null,
  not?: ModelPlantFilterInput | null,
};

export type ModelPlantConnection = {
  __typename: "ModelPlantConnection",
  items?:  Array<Plant | null > | null,
  nextToken?: string | null,
};

export type ModelPestFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  detection?: ModelStringInput | null,
  management?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelPestFilterInput | null > | null,
  or?: Array< ModelPestFilterInput | null > | null,
  not?: ModelPestFilterInput | null,
};

export type ModelPestConnection = {
  __typename: "ModelPestConnection",
  items?:  Array<Pest | null > | null,
  nextToken?: string | null,
};

export type ModelDiseaseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  detection?: ModelStringInput | null,
  management?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelDiseaseFilterInput | null > | null,
  or?: Array< ModelDiseaseFilterInput | null > | null,
  not?: ModelDiseaseFilterInput | null,
};

export type ModelDiseaseConnection = {
  __typename: "ModelDiseaseConnection",
  items?:  Array<Disease | null > | null,
  nextToken?: string | null,
};

export type ModelRackFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelRackFilterInput | null > | null,
  or?: Array< ModelRackFilterInput | null > | null,
  not?: ModelRackFilterInput | null,
};

export type ModelRackConnection = {
  __typename: "ModelRackConnection",
  items?:  Array<Rack | null > | null,
  nextToken?: string | null,
};

export type ModelNutrientTerminologyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  meaning?: ModelStringInput | null,
  and?: Array< ModelNutrientTerminologyFilterInput | null > | null,
  or?: Array< ModelNutrientTerminologyFilterInput | null > | null,
  not?: ModelNutrientTerminologyFilterInput | null,
};

export type ModelNutrientTerminologyConnection = {
  __typename: "ModelNutrientTerminologyConnection",
  items?:  Array<NutrientTerminology | null > | null,
  nextToken?: string | null,
};

export type ModelStationFilterInput = {
  id?: ModelIDInput | null,
  station_name?: ModelStringInput | null,
  station_id?: ModelStringInput | null,
  user_id?: ModelStringInput | null,
  and?: Array< ModelStationFilterInput | null > | null,
  or?: Array< ModelStationFilterInput | null > | null,
  not?: ModelStationFilterInput | null,
};

export type ModelStationConnection = {
  __typename: "ModelStationConnection",
  items?:  Array<Station | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStationDataFilterInput = {
  station_id?: ModelStringInput | null,
  sample_time?: ModelIntInput | null,
  station_data?: ModelStringInput | null,
  and?: Array< ModelStationDataFilterInput | null > | null,
  or?: Array< ModelStationDataFilterInput | null > | null,
  not?: ModelStationDataFilterInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStationDataConnection = {
  __typename: "ModelStationDataConnection",
  items?:  Array<StationData | null > | null,
  nextToken?: string | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type CreatePlantMutationVariables = {
  input: CreatePlantInput,
  condition?: ModelPlantConditionInput | null,
};

export type CreatePlantMutation = {
  createPlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    type: string,
    scientific_name: string,
    name_bm: string,
    name_cn?: string | null,
    temperature?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    height?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    seed_planting_depth?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    planting_distance_between_plants?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    pruning_requirement: string,
    soil_moisture: string,
    sunlight?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    germination?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_day?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_month?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    water_amount: string,
    watering_frequency: string,
    watering_duration: string,
    plant_nature: string,
    pest_info: string,
    disease_info: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlantMutationVariables = {
  input: UpdatePlantInput,
  condition?: ModelPlantConditionInput | null,
};

export type UpdatePlantMutation = {
  updatePlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    type: string,
    scientific_name: string,
    name_bm: string,
    name_cn?: string | null,
    temperature?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    height?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    seed_planting_depth?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    planting_distance_between_plants?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    pruning_requirement: string,
    soil_moisture: string,
    sunlight?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    germination?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_day?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_month?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    water_amount: string,
    watering_frequency: string,
    watering_duration: string,
    plant_nature: string,
    pest_info: string,
    disease_info: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlantMutationVariables = {
  input: DeletePlantInput,
  condition?: ModelPlantConditionInput | null,
};

export type DeletePlantMutation = {
  deletePlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    type: string,
    scientific_name: string,
    name_bm: string,
    name_cn?: string | null,
    temperature?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    height?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    seed_planting_depth?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    planting_distance_between_plants?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    pruning_requirement: string,
    soil_moisture: string,
    sunlight?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    germination?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_day?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_month?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    water_amount: string,
    watering_frequency: string,
    watering_duration: string,
    plant_nature: string,
    pest_info: string,
    disease_info: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePestMutationVariables = {
  input: CreatePestInput,
  condition?: ModelPestConditionInput | null,
};

export type CreatePestMutation = {
  createPest?:  {
    __typename: "Pest",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePestMutationVariables = {
  input: UpdatePestInput,
  condition?: ModelPestConditionInput | null,
};

export type UpdatePestMutation = {
  updatePest?:  {
    __typename: "Pest",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePestMutationVariables = {
  input: DeletePestInput,
  condition?: ModelPestConditionInput | null,
};

export type DeletePestMutation = {
  deletePest?:  {
    __typename: "Pest",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDiseaseMutationVariables = {
  input: CreateDiseaseInput,
  condition?: ModelDiseaseConditionInput | null,
};

export type CreateDiseaseMutation = {
  createDisease?:  {
    __typename: "Disease",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDiseaseMutationVariables = {
  input: UpdateDiseaseInput,
  condition?: ModelDiseaseConditionInput | null,
};

export type UpdateDiseaseMutation = {
  updateDisease?:  {
    __typename: "Disease",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDiseaseMutationVariables = {
  input: DeleteDiseaseInput,
  condition?: ModelDiseaseConditionInput | null,
};

export type DeleteDiseaseMutation = {
  deleteDisease?:  {
    __typename: "Disease",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRackMutationVariables = {
  input: CreateRackInput,
  condition?: ModelRackConditionInput | null,
};

export type CreateRackMutation = {
  createRack?:  {
    __typename: "Rack",
    id: string,
    name: string,
    description: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRackMutationVariables = {
  input: UpdateRackInput,
  condition?: ModelRackConditionInput | null,
};

export type UpdateRackMutation = {
  updateRack?:  {
    __typename: "Rack",
    id: string,
    name: string,
    description: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRackMutationVariables = {
  input: DeleteRackInput,
  condition?: ModelRackConditionInput | null,
};

export type DeleteRackMutation = {
  deleteRack?:  {
    __typename: "Rack",
    id: string,
    name: string,
    description: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNutrientTerminologyMutationVariables = {
  input: CreateNutrientTerminologyInput,
  condition?: ModelNutrientTerminologyConditionInput | null,
};

export type CreateNutrientTerminologyMutation = {
  createNutrientTerminology?:  {
    __typename: "NutrientTerminology",
    id: string,
    name: string,
    meaning: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNutrientTerminologyMutationVariables = {
  input: UpdateNutrientTerminologyInput,
  condition?: ModelNutrientTerminologyConditionInput | null,
};

export type UpdateNutrientTerminologyMutation = {
  updateNutrientTerminology?:  {
    __typename: "NutrientTerminology",
    id: string,
    name: string,
    meaning: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNutrientTerminologyMutationVariables = {
  input: DeleteNutrientTerminologyInput,
  condition?: ModelNutrientTerminologyConditionInput | null,
};

export type DeleteNutrientTerminologyMutation = {
  deleteNutrientTerminology?:  {
    __typename: "NutrientTerminology",
    id: string,
    name: string,
    meaning: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNutrientMutationVariables = {
  input: CreateNutrientInput,
  condition?: ModelNutrientConditionInput | null,
};

export type CreateNutrientMutation = {
  createNutrient?:  {
    __typename: "Nutrient",
    id: string,
    name: string,
    short_name: string,
    type: string,
    importance: string,
    deficient_symptom: string,
    leaf_position: string,
    deficient_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    worsen: string,
    solution: string,
    toxic_symptom: string,
    toxic_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNutrientMutationVariables = {
  input: UpdateNutrientInput,
  condition?: ModelNutrientConditionInput | null,
};

export type UpdateNutrientMutation = {
  updateNutrient?:  {
    __typename: "Nutrient",
    id: string,
    name: string,
    short_name: string,
    type: string,
    importance: string,
    deficient_symptom: string,
    leaf_position: string,
    deficient_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    worsen: string,
    solution: string,
    toxic_symptom: string,
    toxic_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNutrientMutationVariables = {
  input: DeleteNutrientInput,
  condition?: ModelNutrientConditionInput | null,
};

export type DeleteNutrientMutation = {
  deleteNutrient?:  {
    __typename: "Nutrient",
    id: string,
    name: string,
    short_name: string,
    type: string,
    importance: string,
    deficient_symptom: string,
    leaf_position: string,
    deficient_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    worsen: string,
    solution: string,
    toxic_symptom: string,
    toxic_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateContactFormMutationVariables = {
  input: UpdateContactFormInput,
  condition?: ModelContactFormConditionInput | null,
};

export type UpdateContactFormMutation = {
  updateContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    phone: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContactFormMutationVariables = {
  input: DeleteContactFormInput,
  condition?: ModelContactFormConditionInput | null,
};

export type DeleteContactFormMutation = {
  deleteContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    phone: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    email: string,
    name: string,
    phone: string,
    address_1: string,
    address_2: string,
    address_3: string,
    city: string,
    state: string,
    postcode: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    email: string,
    name: string,
    phone: string,
    address_1: string,
    address_2: string,
    address_3: string,
    city: string,
    state: string,
    postcode: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    email: string,
    name: string,
    phone: string,
    address_1: string,
    address_2: string,
    address_3: string,
    city: string,
    state: string,
    postcode: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateContactFormMutationVariables = {
  input: CreateContactFormInput,
  condition?: ModelContactFormConditionInput | null,
};

export type CreateContactFormMutation = {
  createContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    phone: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStationMutationVariables = {
  input: CreateStationInput,
  condition?: ModelStationConditionInput | null,
};

export type CreateStationMutation = {
  createStation?:  {
    __typename: "Station",
    id: string,
    water_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    fertilizer_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    station_name: string,
    station_id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStationMutationVariables = {
  input: UpdateStationInput,
  condition?: ModelStationConditionInput | null,
};

export type UpdateStationMutation = {
  updateStation?:  {
    __typename: "Station",
    id: string,
    water_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    fertilizer_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    station_name: string,
    station_id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStationMutationVariables = {
  input: DeleteStationInput,
  condition?: ModelStationConditionInput | null,
};

export type DeleteStationMutation = {
  deleteStation?:  {
    __typename: "Station",
    id: string,
    water_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    fertilizer_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    station_name: string,
    station_id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStationDataMutationVariables = {
  input: CreateStationDataInput,
  condition?: ModelStationDataConditionInput | null,
};

export type CreateStationDataMutation = {
  createStationData?:  {
    __typename: "StationData",
    station_id: string,
    sample_time: number,
    station_data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStationDataMutationVariables = {
  input: UpdateStationDataInput,
  condition?: ModelStationDataConditionInput | null,
};

export type UpdateStationDataMutation = {
  updateStationData?:  {
    __typename: "StationData",
    station_id: string,
    sample_time: number,
    station_data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStationDataMutationVariables = {
  input: DeleteStationDataInput,
  condition?: ModelStationDataConditionInput | null,
};

export type DeleteStationDataMutation = {
  deleteStationData?:  {
    __typename: "StationData",
    station_id: string,
    sample_time: number,
    station_data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetNutrientQueryVariables = {
  id: string,
};

export type GetNutrientQuery = {
  getNutrient?:  {
    __typename: "Nutrient",
    id: string,
    name: string,
    short_name: string,
    type: string,
    importance: string,
    deficient_symptom: string,
    leaf_position: string,
    deficient_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    worsen: string,
    solution: string,
    toxic_symptom: string,
    toxic_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNutrientsQueryVariables = {
  filter?: ModelNutrientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNutrientsQuery = {
  listNutrients?:  {
    __typename: "ModelNutrientConnection",
    items?:  Array< {
      __typename: "Nutrient",
      id: string,
      name: string,
      short_name: string,
      type: string,
      importance: string,
      deficient_symptom: string,
      leaf_position: string,
      deficient_image:  Array< {
        __typename: "Image",
        bucket: string,
        region: string,
        key: string,
      } | null >,
      worsen: string,
      solution: string,
      toxic_symptom: string,
      toxic_image:  Array< {
        __typename: "Image",
        bucket: string,
        region: string,
        key: string,
      } | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetContactFormQueryVariables = {
  id: string,
};

export type GetContactFormQuery = {
  getContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    phone: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContactFormsQueryVariables = {
  filter?: ModelContactFormFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactFormsQuery = {
  listContactForms?:  {
    __typename: "ModelContactFormConnection",
    items?:  Array< {
      __typename: "ContactForm",
      id: string,
      name: string,
      email: string,
      phone: string,
      message: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  email: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    email: string,
    name: string,
    phone: string,
    address_1: string,
    address_2: string,
    address_3: string,
    city: string,
    state: string,
    postcode: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProfilesQueryVariables = {
  email?: string | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items?:  Array< {
      __typename: "Profile",
      email: string,
      name: string,
      phone: string,
      address_1: string,
      address_2: string,
      address_3: string,
      city: string,
      state: string,
      postcode: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPlantQueryVariables = {
  id: string,
};

export type GetPlantQuery = {
  getPlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    type: string,
    scientific_name: string,
    name_bm: string,
    name_cn?: string | null,
    temperature?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    height?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    seed_planting_depth?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    planting_distance_between_plants?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    pruning_requirement: string,
    soil_moisture: string,
    sunlight?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    germination?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_day?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_month?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    water_amount: string,
    watering_frequency: string,
    watering_duration: string,
    plant_nature: string,
    pest_info: string,
    disease_info: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlantsQueryVariables = {
  filter?: ModelPlantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlantsQuery = {
  listPlants?:  {
    __typename: "ModelPlantConnection",
    items?:  Array< {
      __typename: "Plant",
      id: string,
      name: string,
      type: string,
      scientific_name: string,
      name_bm: string,
      name_cn?: string | null,
      temperature?:  {
        __typename: "Range",
        min?: number | null,
        max?: number | null,
        scale_unit?: string | null,
      } | null,
      height?:  {
        __typename: "Range",
        min?: number | null,
        max?: number | null,
        scale_unit?: string | null,
      } | null,
      seed_planting_depth?:  {
        __typename: "Range",
        min?: number | null,
        max?: number | null,
        scale_unit?: string | null,
      } | null,
      planting_distance_between_plants?:  {
        __typename: "Range",
        min?: number | null,
        max?: number | null,
        scale_unit?: string | null,
      } | null,
      pruning_requirement: string,
      soil_moisture: string,
      sunlight?:  {
        __typename: "Range",
        min?: number | null,
        max?: number | null,
        scale_unit?: string | null,
      } | null,
      germination?:  {
        __typename: "Range",
        min?: number | null,
        max?: number | null,
        scale_unit?: string | null,
      } | null,
      harvest_day?:  {
        __typename: "Range",
        min?: number | null,
        max?: number | null,
        scale_unit?: string | null,
      } | null,
      harvest_month?:  {
        __typename: "Range",
        min?: number | null,
        max?: number | null,
        scale_unit?: string | null,
      } | null,
      water_amount: string,
      watering_frequency: string,
      watering_duration: string,
      plant_nature: string,
      pest_info: string,
      disease_info: string,
      image_url?:  Array< {
        __typename: "Image",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPestQueryVariables = {
  id: string,
};

export type GetPestQuery = {
  getPest?:  {
    __typename: "Pest",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPestsQueryVariables = {
  filter?: ModelPestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPestsQuery = {
  listPests?:  {
    __typename: "ModelPestConnection",
    items?:  Array< {
      __typename: "Pest",
      id: string,
      name: string,
      description: string,
      detection: string,
      management: string,
      notes: string,
      image_url:  Array< {
        __typename: "Image",
        bucket: string,
        region: string,
        key: string,
      } | null >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDiseaseQueryVariables = {
  id: string,
};

export type GetDiseaseQuery = {
  getDisease?:  {
    __typename: "Disease",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDiseasesQueryVariables = {
  filter?: ModelDiseaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiseasesQuery = {
  listDiseases?:  {
    __typename: "ModelDiseaseConnection",
    items?:  Array< {
      __typename: "Disease",
      id: string,
      name: string,
      description: string,
      detection: string,
      management: string,
      notes: string,
      image_url?:  Array< {
        __typename: "Image",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRackQueryVariables = {
  id: string,
};

export type GetRackQuery = {
  getRack?:  {
    __typename: "Rack",
    id: string,
    name: string,
    description: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRacksQueryVariables = {
  filter?: ModelRackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRacksQuery = {
  listRacks?:  {
    __typename: "ModelRackConnection",
    items?:  Array< {
      __typename: "Rack",
      id: string,
      name: string,
      description: string,
      image_url:  Array< {
        __typename: "Image",
        bucket: string,
        region: string,
        key: string,
      } | null >,
      price: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetNutrientTerminologyQueryVariables = {
  id: string,
};

export type GetNutrientTerminologyQuery = {
  getNutrientTerminology?:  {
    __typename: "NutrientTerminology",
    id: string,
    name: string,
    meaning: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNutrientTerminologysQueryVariables = {
  filter?: ModelNutrientTerminologyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNutrientTerminologysQuery = {
  listNutrientTerminologys?:  {
    __typename: "ModelNutrientTerminologyConnection",
    items?:  Array< {
      __typename: "NutrientTerminology",
      id: string,
      name: string,
      meaning: string,
      image_url:  Array< {
        __typename: "Image",
        bucket: string,
        region: string,
        key: string,
      } | null >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetStationQueryVariables = {
  id: string,
};

export type GetStationQuery = {
  getStation?:  {
    __typename: "Station",
    id: string,
    water_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    fertilizer_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    station_name: string,
    station_id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStationsQueryVariables = {
  filter?: ModelStationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStationsQuery = {
  listStations?:  {
    __typename: "ModelStationConnection",
    items?:  Array< {
      __typename: "Station",
      id: string,
      water_schedule:  {
        __typename: "Scheduler",
        cron: string,
        duration: number,
      },
      fertilizer_schedule:  {
        __typename: "Scheduler",
        cron: string,
        duration: number,
      },
      station_name: string,
      station_id: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type StationByUserIDQueryVariables = {
  user_id?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StationByUserIDQuery = {
  StationByUserID?:  {
    __typename: "ModelStationConnection",
    items?:  Array< {
      __typename: "Station",
      id: string,
      water_schedule:  {
        __typename: "Scheduler",
        cron: string,
        duration: number,
      },
      fertilizer_schedule:  {
        __typename: "Scheduler",
        cron: string,
        duration: number,
      },
      station_name: string,
      station_id: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type StationByStationIDQueryVariables = {
  station_id?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StationByStationIDQuery = {
  StationByStationID?:  {
    __typename: "ModelStationConnection",
    items?:  Array< {
      __typename: "Station",
      id: string,
      water_schedule:  {
        __typename: "Scheduler",
        cron: string,
        duration: number,
      },
      fertilizer_schedule:  {
        __typename: "Scheduler",
        cron: string,
        duration: number,
      },
      station_name: string,
      station_id: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type StationByStationIDAndUserIDQueryVariables = {
  station_id?: string | null,
  user_id?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StationByStationIDAndUserIDQuery = {
  StationByStationIDAndUserID?:  {
    __typename: "ModelStationConnection",
    items?:  Array< {
      __typename: "Station",
      id: string,
      water_schedule:  {
        __typename: "Scheduler",
        cron: string,
        duration: number,
      },
      fertilizer_schedule:  {
        __typename: "Scheduler",
        cron: string,
        duration: number,
      },
      station_name: string,
      station_id: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type StationByStationIDAndStationNameQueryVariables = {
  station_id?: string | null,
  station_name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StationByStationIDAndStationNameQuery = {
  StationByStationIDAndStationName?:  {
    __typename: "ModelStationConnection",
    items?:  Array< {
      __typename: "Station",
      id: string,
      water_schedule:  {
        __typename: "Scheduler",
        cron: string,
        duration: number,
      },
      fertilizer_schedule:  {
        __typename: "Scheduler",
        cron: string,
        duration: number,
      },
      station_name: string,
      station_id: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetStationDataQueryVariables = {
  sample_time: number,
};

export type GetStationDataQuery = {
  getStationData?:  {
    __typename: "StationData",
    station_id: string,
    sample_time: number,
    station_data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStationDatasQueryVariables = {
  sample_time?: number | null,
  filter?: ModelStationDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListStationDatasQuery = {
  listStationDatas?:  {
    __typename: "ModelStationDataConnection",
    items?:  Array< {
      __typename: "StationData",
      station_id: string,
      sample_time: number,
      station_data: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type StationDataByStationIDQueryVariables = {
  station_id?: string | null,
  sample_time?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStationDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StationDataByStationIDQuery = {
  StationDataByStationID?:  {
    __typename: "ModelStationDataConnection",
    items?:  Array< {
      __typename: "StationData",
      station_id: string,
      sample_time: number,
      station_data: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateNutrientSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateNutrientSubscription = {
  onCreateNutrient?:  {
    __typename: "Nutrient",
    id: string,
    name: string,
    short_name: string,
    type: string,
    importance: string,
    deficient_symptom: string,
    leaf_position: string,
    deficient_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    worsen: string,
    solution: string,
    toxic_symptom: string,
    toxic_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNutrientSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateNutrientSubscription = {
  onUpdateNutrient?:  {
    __typename: "Nutrient",
    id: string,
    name: string,
    short_name: string,
    type: string,
    importance: string,
    deficient_symptom: string,
    leaf_position: string,
    deficient_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    worsen: string,
    solution: string,
    toxic_symptom: string,
    toxic_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNutrientSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteNutrientSubscription = {
  onDeleteNutrient?:  {
    __typename: "Nutrient",
    id: string,
    name: string,
    short_name: string,
    type: string,
    importance: string,
    deficient_symptom: string,
    leaf_position: string,
    deficient_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    worsen: string,
    solution: string,
    toxic_symptom: string,
    toxic_image:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateContactFormSubscription = {
  onCreateContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    phone: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactFormSubscription = {
  onUpdateContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    phone: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactFormSubscription = {
  onDeleteContactForm?:  {
    __typename: "ContactForm",
    id: string,
    name: string,
    email: string,
    phone: string,
    message: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    email: string,
    name: string,
    phone: string,
    address_1: string,
    address_2: string,
    address_3: string,
    city: string,
    state: string,
    postcode: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    email: string,
    name: string,
    phone: string,
    address_1: string,
    address_2: string,
    address_3: string,
    city: string,
    state: string,
    postcode: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    email: string,
    name: string,
    phone: string,
    address_1: string,
    address_2: string,
    address_3: string,
    city: string,
    state: string,
    postcode: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePlantSubscription = {
  onCreatePlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    type: string,
    scientific_name: string,
    name_bm: string,
    name_cn?: string | null,
    temperature?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    height?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    seed_planting_depth?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    planting_distance_between_plants?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    pruning_requirement: string,
    soil_moisture: string,
    sunlight?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    germination?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_day?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_month?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    water_amount: string,
    watering_frequency: string,
    watering_duration: string,
    plant_nature: string,
    pest_info: string,
    disease_info: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlantSubscription = {
  onUpdatePlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    type: string,
    scientific_name: string,
    name_bm: string,
    name_cn?: string | null,
    temperature?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    height?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    seed_planting_depth?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    planting_distance_between_plants?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    pruning_requirement: string,
    soil_moisture: string,
    sunlight?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    germination?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_day?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_month?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    water_amount: string,
    watering_frequency: string,
    watering_duration: string,
    plant_nature: string,
    pest_info: string,
    disease_info: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlantSubscription = {
  onDeletePlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    type: string,
    scientific_name: string,
    name_bm: string,
    name_cn?: string | null,
    temperature?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    height?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    seed_planting_depth?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    planting_distance_between_plants?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    pruning_requirement: string,
    soil_moisture: string,
    sunlight?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    germination?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_day?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    harvest_month?:  {
      __typename: "Range",
      min?: number | null,
      max?: number | null,
      scale_unit?: string | null,
    } | null,
    water_amount: string,
    watering_frequency: string,
    watering_duration: string,
    plant_nature: string,
    pest_info: string,
    disease_info: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePestSubscription = {
  onCreatePest?:  {
    __typename: "Pest",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePestSubscription = {
  onUpdatePest?:  {
    __typename: "Pest",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePestSubscription = {
  onDeletePest?:  {
    __typename: "Pest",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDiseaseSubscription = {
  onCreateDisease?:  {
    __typename: "Disease",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDiseaseSubscription = {
  onUpdateDisease?:  {
    __typename: "Disease",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDiseaseSubscription = {
  onDeleteDisease?:  {
    __typename: "Disease",
    id: string,
    name: string,
    description: string,
    detection: string,
    management: string,
    notes: string,
    image_url?:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRackSubscription = {
  onCreateRack?:  {
    __typename: "Rack",
    id: string,
    name: string,
    description: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRackSubscription = {
  onUpdateRack?:  {
    __typename: "Rack",
    id: string,
    name: string,
    description: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRackSubscription = {
  onDeleteRack?:  {
    __typename: "Rack",
    id: string,
    name: string,
    description: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNutrientTerminologySubscription = {
  onCreateNutrientTerminology?:  {
    __typename: "NutrientTerminology",
    id: string,
    name: string,
    meaning: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNutrientTerminologySubscription = {
  onUpdateNutrientTerminology?:  {
    __typename: "NutrientTerminology",
    id: string,
    name: string,
    meaning: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNutrientTerminologySubscription = {
  onDeleteNutrientTerminology?:  {
    __typename: "NutrientTerminology",
    id: string,
    name: string,
    meaning: string,
    image_url:  Array< {
      __typename: "Image",
      bucket: string,
      region: string,
      key: string,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStationSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateStationSubscription = {
  onCreateStation?:  {
    __typename: "Station",
    id: string,
    water_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    fertilizer_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    station_name: string,
    station_id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStationSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateStationSubscription = {
  onUpdateStation?:  {
    __typename: "Station",
    id: string,
    water_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    fertilizer_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    station_name: string,
    station_id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStationSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteStationSubscription = {
  onDeleteStation?:  {
    __typename: "Station",
    id: string,
    water_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    fertilizer_schedule:  {
      __typename: "Scheduler",
      cron: string,
      duration: number,
    },
    station_name: string,
    station_id: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStationDataSubscription = {
  onCreateStationData?:  {
    __typename: "StationData",
    station_id: string,
    sample_time: number,
    station_data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStationDataSubscription = {
  onUpdateStationData?:  {
    __typename: "StationData",
    station_id: string,
    sample_time: number,
    station_data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStationDataSubscription = {
  onDeleteStationData?:  {
    __typename: "StationData",
    station_id: string,
    sample_time: number,
    station_data: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
