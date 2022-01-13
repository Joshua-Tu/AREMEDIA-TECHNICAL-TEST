import data from '../sample_input.json';

export type SampleJSONData = typeof data;

export type ImageContentBody = {
  url: string;
  tags: string[];
  valid: boolean;
  width: number;
  height: number;
  source: string;
  caption: string;
  credits: number[];
  creditText: string;
}