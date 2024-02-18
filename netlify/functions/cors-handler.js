exports.handler = async function(event) {
  const origin = event.headers.origin;
  const allowedOrigins = ["https://cdpn.io", "https://codepen.io", "https://google.com"];
  const headers = {};

  if (allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    // Add other necessary CORS headers here
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ message: "CORS" })
  };
};
