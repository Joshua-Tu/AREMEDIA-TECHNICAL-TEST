import { createObjectCsvWriter } from 'csv-writer';
import { ExtractedVideoDetails } from '../types/extractedData.type';

const csvWriter = createObjectCsvWriter({
  path: 'generated_files/videoUrl.csv',
  header: [
    { id: 'videoId', title: 'VIDEO_ID' },
    { id: 'title',title: 'TITLE' },
    { id: 'link', title: 'LINK'},
    { id: 'videoUrl', title: 'VIDEO_URL' },
  ]
});

async function writeVideosData2CSV(videoData: ExtractedVideoDetails[]): Promise<any> {
  try {
    if (videoData.length == 0) {
      console.log('...No video info found in the input');
      return;
    }
    await csvWriter.writeRecords(videoData);

    console.log('...all video urls written into the generated_files/videoUrl.csv');
  } catch (error: any) {
    console.log(error.message);
  }
}

export default writeVideosData2CSV;