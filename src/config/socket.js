var url = process.env.REACT_APP_API_URL;

if (url.endsWith("/api")) {
  url = url.slice(0, -4);
} else if (url.endsWith("/api/")) {
  url = url.slice(0, -5);
}

const socket = {
  url: url,
};

export default socket;
