import writeVideosData2CSV from '../src/utils/writeVideosData2CSV';

describe('test writeVideosData2CSV function', () => {
  it('should return undefined if the input is empty array', async () => {
    expect(await writeVideosData2CSV([])).toBe(undefined);
  });
});