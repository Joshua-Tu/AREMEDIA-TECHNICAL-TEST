import { createObjectCsvWriter } from 'csv-writer';

const csvWriter = createObjectCsvWriter({
  path: 'generated_files/imageUrl.csv',
  header: [
    { id: 'imageUrl', title: 'IMAGE_URL' }
  ]
});

async function writeImagesData2CSV(imagesData: string[] = []): Promise<any> {
  try {
    if (!imagesData || imagesData.length == 0) {
      console.log('...No image urls found in the input')
      return ;
    };

    const records = imagesData.map((imageUrl: string): {imageUrl: string} => ({ imageUrl }));

    await csvWriter.writeRecords(records);

    console.log('...all image urls written into the generated_files/imageUrl.csv');
  } catch (error: any) {
    console.log(error);
  }
}

export default writeImagesData2CSV;