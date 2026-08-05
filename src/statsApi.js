const COUNTER_BASE_URLS = ["https://countapi.xyz", "https://api.countapi.xyz"];
const COUNTER_NAMESPACE = "ali-haider-portfolio";

const VISITOR_KEY = "visitors";
const DOWNLOAD_KEY = "downloads";

const LOCAL_PREFIX = "portfolio-counter:";

function getLocalValue(key) {
  const value = Number(window.localStorage.getItem(`${LOCAL_PREFIX}${key}`) ?? 0);
  return Number.isFinite(value) ? value : 0;
}

function setLocalValue(key, value) {
  window.localStorage.setItem(`${LOCAL_PREFIX}${key}`, String(value));
}

async function fetchFromAnyBase(path) {
  let lastError = null;

  for (const baseUrl of COUNTER_BASE_URLS) {
    try {
      const response = await fetch(`${baseUrl}${path}`);

      if (response.ok) {
        return response;
      }

      const error = new Error(`Counter API request failed with status ${response.status}`);
      error.status = response.status;
      throw error;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError ?? new Error("Counter API request failed");
}

async function requestCount(path) {
  const response = await fetchFromAnyBase(path);
  const data = await response.json();
  return Number(data.value ?? 0);
}

async function ensureCounterExists(key) {
  try {
    return await requestCount(`/get/${COUNTER_NAMESPACE}/${key}`);
  } catch (error) {
    if (error?.status === 404) {
      return requestCount(`/set/${COUNTER_NAMESPACE}/${key}?value=0`);
    }

    throw error;
  }
}

export async function getVisitorsCount() {
  try {
    const count = await ensureCounterExists(VISITOR_KEY);
    setLocalValue(VISITOR_KEY, count);
    return count;
  } catch {
    return getLocalValue(VISITOR_KEY);
  }
}

export async function incrementVisitorsCount() {
  try {
    const count = await requestCount(`/hit/${COUNTER_NAMESPACE}/${VISITOR_KEY}`);
    setLocalValue(VISITOR_KEY, count);
    return count;
  } catch {
    const next = getLocalValue(VISITOR_KEY) + 1;
    setLocalValue(VISITOR_KEY, next);
    return next;
  }
}

export async function getDownloadsCount() {
  try {
    const count = await ensureCounterExists(DOWNLOAD_KEY);
    setLocalValue(DOWNLOAD_KEY, count);
    return count;
  } catch {
    return getLocalValue(DOWNLOAD_KEY);
  }
}

export async function incrementDownloadsCount() {
  try {
    const count = await requestCount(`/hit/${COUNTER_NAMESPACE}/${DOWNLOAD_KEY}`);
    setLocalValue(DOWNLOAD_KEY, count);
    return count;
  } catch {
    const next = getLocalValue(DOWNLOAD_KEY) + 1;
    setLocalValue(DOWNLOAD_KEY, next);
    return next;
  }
}
