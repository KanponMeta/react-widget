import axios from "axios";

export const login = () => {
  const request = axios.create({
    timeout: 60000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request.request({
    url: "/login",
    method: "POST",
    params: {
      refresh_token:
        "1000.d4f7fe09843339444497f567a648cc3a.04bb1a70cc5cd8f066db8b09af545d63",
      client_id: "1000.08LTFJHKNQLNA5KI2MR3C6L5Z8QRUH",
      client_secret: "2542fa518679ba8cea5226c33a8e0a8e6a6d8be171",
      grant_type: "refresh_token",
    },
  });
};

export default login;
