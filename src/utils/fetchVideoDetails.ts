import axios, { AxiosResponse, AxiosError } from 'axios';
import { ExtractedVideoDetails, VideoPlaylistSource } from '../types/extractedData.type';

function fetchVideoDetails(extractedVideos: string[]): Promise<ExtractedVideoDetails[]> {
  const fetchPromiseArray = extractedVideos.map(videoId => axios.get(`https://cdn.jwplayer.com/v2/media/${videoId}`));
  
  let fetchedVideoDetails: ExtractedVideoDetails[] = [];

  return new Promise((resolve, reject) =>{
    Promise.all(fetchPromiseArray)
    .then((response: AxiosResponse[]) => {

      response.forEach(response => {
        const { playlist } = response.data;
        const { title, mediaid, link, sources } = playlist[0];

        fetchedVideoDetails.push({
          videoId: mediaid,
          title,
          link,
          videoUrl: selectHighestResolutionUrl(sources),
        });
      })

      resolve(fetchedVideoDetails);
    })
    .catch((error: AxiosError<any>) => reject(error));
  });
}

export default fetchVideoDetails;

export function selectHighestResolutionUrl(sources: VideoPlaylistSource[]): string {
  const videoSources = sources.filter(source => source.type.includes('video'));
  
  // Make the video source the largest file size the first one in the array
  const sortedVideoSources = videoSources.sort((sourceA, sourceB) => sourceB.filesize! - sourceA.filesize! )

  return sortedVideoSources[0].file;
}