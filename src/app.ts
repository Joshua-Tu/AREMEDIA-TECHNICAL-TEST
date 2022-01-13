import sampleInput from './sample_input.json';
import extractImages from './utils/extractImages';
import extractVideos from './utils/extractVideos';
import writeImagesData2CSV from './utils/writeImagesData2CSV';
import fetchVideoDetails from './utils/fetchVideoDetails';
import writeVideosData2CSV from './utils/writeVideosData2CSV';

const extractedImageUrls = extractImages(sampleInput);
const extractedVideoIDs = extractVideos(sampleInput);

(writeImagesData2CSV)(extractedImageUrls);

(async function fetchVideoDataAndWrite2CSV(extractedVideoIDs) {
  try {
    const extractedVideos = await fetchVideoDetails(extractedVideoIDs);

    await writeVideosData2CSV(extractedVideos);
  } catch (error) {
    console.log(error);
  }
})(extractedVideoIDs);
