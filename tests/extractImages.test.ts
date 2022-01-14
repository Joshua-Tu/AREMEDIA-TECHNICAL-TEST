import extractImages from '../src/utils/extractImages';

describe('test sample input data image urls extraction function', () => {
  const testInput = {
    data: [
      {
        contentImageUrl: 'imageUrl0',
        contentBody: [
          {
            type: 'nonImage',
            content: 'itemContent',
          },
          {
            type: 'image',
            content: {
              url: 'imageUrl1',
            },
          },
          {
            type: 'nonImage',
            content: {
              url: 'itemContent'
            }
          },
          {
            type: 'image',
            content: {
              url: 'imageUrl2',
            }
          },
          {
            type: 'nonImage',
            content: 'itemContent',
            contentGallery: [
              {
                mediaType: 'nonImage',
                url: 'itemContent'
              }
            ]
          },
        ]
      }
    ]
  } as any;
  
  it('should return a valid result of image url list', () => {
    const result = extractImages(testInput);

    expect(result).toEqual([
      'imageUrl0', 'imageUrl1', 'imageUrl2'
    ]);
  });

  it('should return an array of unique image url', () => {
    const testInputs = {
      data: [
        ...testInput.data,
        {
          contentImageUrl: 'imageUrl2',
          contentFacebookImageUrl: {
            url: 'imageUrl0'
          },
          contentBody: [
            {
              type: 'nonImage',
              content: 'itemContent',
            },
            {
              type: 'image',
              content: {
                url: 'imageUrl1',
              },
            },
          ]
        }
      ]
    } as any;

    const result = extractImages(testInput);

    expect(result).toEqual([
      'imageUrl0', 'imageUrl1', 'imageUrl2'
    ]);
  })
})