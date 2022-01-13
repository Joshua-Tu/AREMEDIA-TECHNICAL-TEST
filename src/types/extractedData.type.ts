export interface ExtractedVideoDetails {
  videoId: string;
  title: string;
  link: string;
  videoUrl: string;
}

export interface VideoPlaylistSource {
  file: string;
  type: string;
  height?: number;
  width?: number;
  label?: string;
  filesize?: number;
}