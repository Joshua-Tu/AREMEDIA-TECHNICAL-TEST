import axios from 'axios';
import fetchVideoDetails, { selectHighestResolutionUrl } from '../src/utils/fetchVideoDetails';

describe('test vedio fetching related functions', () => {
  const videoSources = [
    {
      "file": "0",
      "type": "bad_type"
    },
    {
      "file": "1",
      "type": "video/mp4",
      "filesize": 1
    },
    {
      "file": "2",
      "type": "video/mp4",
      "filesize": 3
    },
    {
      "file": "3",
      "type": "video/mp4",
      "filesize": 2
    },
    {
      "file": "4",
      "type": "audio/mp4",
      "filesize": 4
    }
  ];

  const playlist = {
    playlist: [
      {
        title: 'title',
        mediaid: 'mediaid',
        link: 'link',
        sources: videoSources,
      }
    ]
  }
  
  afterEach(() => {    
    jest.clearAllMocks();
  });
  
  it('should return the file url "2" - Highest resolution url - selectHighestResolutionUrl function', () => {
    expect(selectHighestResolutionUrl(videoSources)).toBe('2');
  });

  it('should call the api url with the input media ID - fetchVideoDetails function', async () => {
    const mockedGet = jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: playlist}));

    await fetchVideoDetails(['mediaid1', 'mediaid2']);

    expect(mockedGet).toBeCalledWith('https://cdn.jwplayer.com/v2/media/mediaid1');
    expect(mockedGet).toBeCalledWith('https://cdn.jwplayer.com/v2/media/mediaid2');
    expect(mockedGet).toHaveBeenCalledTimes(2);
  });

  it('should return a valid video url info array - fetchVideoDetails function', async () => {
    const anotherPlaylist = {
      playlist: [
        {
          title: 'title1',
          mediaid: 'mediaid1',
          link: 'link1',
          sources: videoSources,
        }
      ]
    }
    const mockedGet1 = jest.spyOn(axios, 'get').mockImplementationOnce(() => Promise.resolve({ data: playlist }));
    const result =   {
      videoId: 'yV3sKWI6',
      title: 'Tristan MacManus and Pamela Anderson perform on The View',
      link: 'https://cdn.jwplayer.com/previews/yV3sKWI6',
      videoUrl: 'https://cdn.jwplayer.com/videos/yV3sKWI6-lUTv4n5l.mp4'
    }
    
    await fetchVideoDetails(['mediaid1', 'mediaid2']);
  })
});