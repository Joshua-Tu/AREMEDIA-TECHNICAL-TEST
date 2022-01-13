import { SampleJSONData } from "../types/jsonDataType.type";

const extractVideos = (sampleInput: SampleJSONData): string[] => {
  let videosData: string[] = [];

  sampleInput.data.forEach(article => {
    if (article.contentHasVideo) {
      videosData.push(article.contentVideo!.id);
    };

    if (article.contentGallery?.length) {
      article.contentGallery.forEach(content => {
        if (content.mediaType === 'video') videosData.push(content.videoId!);
      })
    }
  });

  const videoSet = new Set(videosData);

  return [...videosData];
};

export default extractVideos;