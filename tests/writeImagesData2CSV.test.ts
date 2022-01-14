import { createObjectCsvWriter } from 'csv-writer';
import writeImagesData2CSV from '../src/utils/writeImagesData2CSV';

describe('test writeImagesData2CSV function', () => {
  afterEach(() => {    
    jest.clearAllMocks();
  });

  it('should return undefined if the input is empty array', async () => {
    expect(await writeImagesData2CSV([])).toBe(undefined);
  });

  it('should console log error when writing fails', async () => {
    const csvWriter = createObjectCsvWriter({
      path: 'generated_files/imageUrl.csv',
      header: [
        { id: 'imageUrl', title: 'IMAGE_URL' }
      ]
    });

    const mockedWrite = jest.spyOn(csvWriter, 'writeRecords').mockImplementation(() => Promise.reject('error'));

    try {
      await writeImagesData2CSV(['imageUrl1', 'imageUrl2']);
    } catch (error) {
      expect(error).toBe('error');
    }
  });
})