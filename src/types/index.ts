export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  meetingPoint: string;
}

export interface MapConfig {
  center: [number, number];
  zoom: number;
  markerText: string;
}

export interface Social {
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
}