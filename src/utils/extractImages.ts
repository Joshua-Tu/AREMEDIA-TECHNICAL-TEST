import { SampleJSONData, ImageContentBody } from "../types/jsonDataType.type";

const extractImages = (sampleInput: SampleJSONData): string[] => {
  let imagesData: string[] = [];

  sampleInput.data.forEach(article => {
    imagesData.push(article.contentImageUrl);

    article.contentBody.forEach(body => {
      if (body.type.toLowerCase() === 'image') imagesData.push((body.content as ImageContentBody).url);
    })

    if (article.contentFacebookImageUrl?.url) imagesData.push(article.contentFacebookImageUrl.url);

    if (article.contentGallery?.length) {
      article.contentGallery.forEach(content => {
        if (content.mediaType.toLowerCase() === 'image' && content.url) {
          imagesData.push(content.url);
        }
      });
    }
  });

  const imagesSet = new Set(imagesData);

  return [...imagesSet];
};

export default extractImages;