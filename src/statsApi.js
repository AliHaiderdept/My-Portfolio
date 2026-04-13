const COUNTER_BASE_URL = "https://api.countapi.xyz";
const COUNTER_NAMESPACE = "ali-haider-portfolio";

const VISITOR_KEY = "visitors";
const DOWNLOAD_KEY = "downloads";

async function requestCount(path) {
  const response = await fetch(`${COUNTER_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Counter API request failed with status ${response.status}`);
  }

  const data = await response.json();
  return Number(data.value ?? 0);
}

export async function getVisitorsCount() {
  return requestCount(`/get/${COUNTER_NAMESPACE}/${VISITOR_KEY}`);
}

export async function incrementVisitorsCount() {
  return requestCount(`/hit/${COUNTER_NAMESPACE}/${VISITOR_KEY}`);
}

export async function getDownloadsCount() {
  return requestCount(`/get/${COUNTER_NAMESPACE}/${DOWNLOAD_KEY}`);
}

export async function incrementDownloadsCount() {
  return requestCount(`/hit/${COUNTER_NAMESPACE}/${DOWNLOAD_KEY}`);
}
