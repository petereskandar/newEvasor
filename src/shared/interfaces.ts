/**
 * Created by eskandar.peter on 06/03/2017.
 */
export interface DenunciaData {
  placeName: string;
  placeAddress: string;
  location: Location;
  dateCreated: string;
  tipologiaLocale:string;
  descrizione:string;
  userEmail: string;
}

export interface UserLocation{
  latitude:string;
  longitude:string;
  country:string;
  city:string;
  address:string;
  postalCode:string;
}

export interface IUser {
  userID: string;
  displayName: string;
  userEmail: string;
  picture: string;
  accessToken: string;
}

export interface Location {
  latitue:string;
  longitude:string;
}
