const baseUrl = (
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api"
).replace(/\/$/, "");

function friendlyError(data) {
  if (typeof data === "string")
    return "The server could not complete this request.";
  if (data.detail) return data.detail;
  return Object.entries(data)
    .map(
      ([field, message]) =>
        `${field.replaceAll("_", " ")}: ${Array.isArray(message) ? message.join(" ") : message}`,
    )
    .join(" • ");
}

export async function api(path, { method = "GET", body, signal } = {}) {
  const token = localStorage.getItem("freshmart_token");
  const isFile = body instanceof FormData;
  let response;
  try {
    response = await fetch(`${baseUrl}${path}`, {
      method,
      signal: signal || AbortSignal.timeout(15000),
      headers: {
        ...(token ? { Authorization: `Token ${token}` } : {}),
        ...(!isFile && body ? { "Content-Type": "application/json" } : {}),
      },
      body: body ? (isFile ? body : JSON.stringify(body)) : undefined,
    });
  } catch (error) {
    if (error.name === "AbortError" && signal) throw error;
    if (error.name === "TimeoutError")
      throw new Error("Fresh Mart took too long to respond. Please try again.");
    throw new Error(
      "Cannot reach Fresh Mart. Check that the backend is running and try again.",
    );
  }
  if (response.status === 204) return null;
  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error(
      "The server could not complete this request. Please try again.",
    );
  }
  if (!response.ok) {
    const error = new Error(friendlyError(data));
    error.status = response.status;
    throw error;
  }
  return data;
}

export async function getHealth(signal) {
  const response = await fetch(`${baseUrl}/health/`, { signal });
  const data = await response.json();
  if (!response.ok && response.status !== 503)
    throw new Error("Unable to check the API.");
  return data;
}
