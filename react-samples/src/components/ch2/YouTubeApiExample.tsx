import React, { useState, useEffect } from 'react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channelTitle: string;
}

// For demonstration purposes only - in a real app, you would not hardcode this data
// but rather fetch it from the YouTube API
const mockVideoData: Video[] = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
    description: 'The official music video for "Never Gonna Give You Up" by Rick Astley',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    channelTitle: 'Rick Astley'
  },
  {
    id: '9bZkp7q19f0',
    title: 'PSY - GANGNAM STYLE(강남스타일) M/V',
    description: 'PSY - GANGNAM STYLE(강남스타일) | ⓒ 2012 YG Entertainment',
    thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/mqdefault.jpg',
    channelTitle: 'officialpsy'
  },
  {
    id: 'kXYiU_JCYtU',
    title: 'Numb [Official Music Video] - Linkin Park',
    description: 'Linkin Park "Numb" off of the album METEORA',
    thumbnail: 'https://i.ytimg.com/vi/kXYiU_JCYtU/mqdefault.jpg',
    channelTitle: 'Linkin Park'
  }
];

const YouTubeApiExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // This would normally be an API call, but we're using mock data
    setVideos(mockVideoData);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      // Filter videos by search term (case insensitive)
      const filteredVideos = mockVideoData.filter(
        video => video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                 video.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setVideos(filteredVideos);
      setSelectedVideo(null);
      setIsLoading(false);
    }, 800);
  };

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">YouTube API Example</h1>
      <p className="text-gray-600 mb-8">
        This component demonstrates how to create a simple YouTube video browser using the YouTube API. 
        (Note: This example uses mock data for demonstration purposes only.)
      </p>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex mb-8">
        <input
          type="text"
          placeholder="Search for videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-r-md hover:bg-red-700 transition-colors"
        >
          Search
        </button>
      </form>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Video List */}
          <div className={`${selectedVideo ? 'hidden md:block' : ''} md:col-span-1`}>
            <h2 className="text-xl font-semibold mb-4">Videos</h2>
            {videos.length === 0 ? (
              <p>No videos found</p>
            ) : (
              <div className="space-y-4">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className={`flex cursor-pointer p-2 hover:bg-gray-100 rounded ${
                      selectedVideo?.id === video.id ? 'bg-gray-100 border-l-4 border-red-600' : ''
                    }`}
                    onClick={() => handleVideoSelect(video)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-32 h-24 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="font-medium text-sm line-clamp-2">{video.title}</h3>
                      <p className="text-gray-600 text-xs mt-1">{video.channelTitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Video Player */}
          <div className={`${selectedVideo ? 'md:col-span-2' : 'md:col-span-3'}`}>
            {selectedVideo ? (
              <div>
                <div className="relative pb-[56.25%] h-0 mb-4">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h2 className="text-xl font-bold mb-2">{selectedVideo.title}</h2>
                <p className="text-gray-600 mb-4">{selectedVideo.channelTitle}</p>
                <p>{selectedVideo.description}</p>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                <p className="text-gray-500">Select a video to watch</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Working with the YouTube API</h2>
        <p className="mb-4">
          In a real application, you would need to:
        </p>
        <ol className="list-decimal ml-6 mb-4 space-y-2">
          <li>Create a project in the Google Developers Console</li>
          <li>Enable the YouTube Data API</li>
          <li>Obtain an API key</li>
          <li>Make requests to the API endpoint: <code className="bg-gray-200 px-2 py-1 rounded">https://www.googleapis.com/youtube/v3/search</code></li>
        </ol>
        <p>
          A typical API request would look like:
        </p>
        <pre className="bg-gray-200 p-3 rounded-md overflow-x-auto mt-2">
{`fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=react+js&type=video&key=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    // Process the video data
    const videos = data.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url,
        channelTitle: item.snippet.channelTitle
      };
    });
    setVideos(videos);
  });`}
        </pre>
      </div>
    </div>
  );
};

export default YouTubeApiExample;