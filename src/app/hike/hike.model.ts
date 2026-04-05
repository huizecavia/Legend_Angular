import { Document } from '@contentful/rich-text-types';

export interface HikeModel {
      titel: string;
      routes: string[];
      beschrijving: string;
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