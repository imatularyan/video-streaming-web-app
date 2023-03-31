export const GOOGLE_API_KEY = "AIzaSyDo7JQY5WfWC1kredar27izONSZV_1qmy0";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT =
  "https://youtube.googleapis.com/youtube/v3/search?q=+";

export const YOUTUBE_COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const list = [
  "Music",
  "Kapil Sharma",
  "Gaming",
  "Mixes",
  "Chill-out music",
  "Dramedy",
  "Fitness",
  "Instrumentals",
  "JavaScript",
  "Universe",
  "Computers",
  "Namaste JavaScript",
];

export const mainCategories = {
  Home: "home.svg",
  Shorts: "shorts.svg",
  Subscriptions: "subscription.svg",
};

export const categories = {
  Library: "library.png",
  History: "history.svg",
  "Your videos": "video.svg",
  "Your movies": "media.svg",
  "Watch Later": "clock.svg",
  "Show More": "downArrow.svg",
};
