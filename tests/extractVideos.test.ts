import extractVideos from '../src/utils/extractVideos';

describe('test sample input data video info extraction function', () => {
  const testInput = {
    data: [
      {
        contentHasVideo: true,
        contentVideo: {
          id: 'videoId1'
        }
      },
      {
        contentHasVideo: false,
        contentGallery: [
          {
            mediaType: 'nonVideo'
          },
          {
            mediaType: 'video',
            videoId: 'videoId2'
          }
        ]
      },
      {
        contentHasVideo: true,
        contentVideo: {
          id: 'videoId3'
        }
      },
    ]
  } as any
  
  it('should return a valid result of video info list', () => {
    const result = extractVideos(testInput);
    expect(result).toEqual([
      'videoId1',
      'videoId2',
      'videoId3'
    ])
  });

  it('should return a valid result of video info list', () => {
    const testInputs = {
      data: [
        ...testInput.data,
        {
          contentHasVideo: true,
          contentVideo: {
            id: 'videoId1'
          }
        },
        {
          contentHasVideo: false,
          contentGallery: [
            {
              mediaType: 'video',
              videoId: 'videoId2'
            },
            {
              mediaType: 'nonVideo'
            },
            {
              mediaType: 'video',
              videoId: 'videoId4'
            }
          ]
        },
      ]
    } as any;

    const result = extractVideos(testInputs);
    expect(result).toEqual([
      'videoId1',
      'videoId2',
      'videoId3',
      'videoId4'
    ]);
  });
});