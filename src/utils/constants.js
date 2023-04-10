export const GOOGLE_API_KEY = "AIzaSyBpXOktS9jbh_fJbXbU-xET6vB3FQpsaFk";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&regionCode=IN&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const YOUTUBE_CATEGORY_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
  GOOGLE_API_KEY;

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
