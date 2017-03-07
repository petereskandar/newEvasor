/**
 * Created by eskandar.peter on 06/03/2017.
 */
export interface DenunciaAnteprima {
  key: string;
  title: string;
  question: string;
  category: string;
  dateCreated: string;
  user: IUser;
  comments: number;
}

export interface DenunciaData {
  key?: string;
  thread: string;
  text: string;
  user: IUser;
  dateCreated: string;
  votesUp: number;
  votesDown: number;
}


export interface UserLocation{
  latitude:string,
  longitude:string,
  country:string,
  city:string,
  address:string,
  postalCode:string
}

export interface IUser {
  userID: string,
  displayName: string,
  userEmail: string,
  picture: string,
  accessToken: string
}
