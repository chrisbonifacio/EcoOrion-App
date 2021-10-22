export type cronType = {
  [state: string]: string;
  cron: string;
  duration: string;
};
export type SettingStationFormState = {
  [state: string]: string | cronType | undefined;
  id: string | undefined;
  station_id: string;
  station_name: string;
  water_schedule: cronType;
  fertilizer_schedule: cronType;
  user_id: string;
};
