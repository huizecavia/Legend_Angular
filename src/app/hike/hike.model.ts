export interface HikeModel {
      titel: string;
      route: string;
      beschrijving: any;
      datumuitvoering: string;
      pictures: string[];
}

export interface Place {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  lat: number;
  lon: number;
}