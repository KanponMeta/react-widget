import _ from "lodash";
import axiosRequest from "./request";

async function request(url: string, params?: any): Promise<any> {
  let response: any = null;
  if (!_.isObject(params)) {
    return new Promise((_, reject) => {
      reject("params is not object");
    });
  }

  if (process.env.NODE_ENV === "production") {
    let criteria = "";

    Object.entries(params).forEach(([key, value]) => {
      if (criteria !== "") {
        criteria += "&&";
      }
      criteria += `${key}==${value}`;
    });

    const config =
      criteria === ""
        ? {
            reportName: url,
            page: 1,
            pageSize: 200,
          }
        : {
            reportName: url,
            criteria: `"(${criteria})"`,
            page: 1,
            pageSize: 200,
          };

    response = await ZOHO.CREATOR.API.getAllRecords(config);
  } else {
    const getConfig = params
      ? {
          params: params,
        }
      : undefined;
    const responseObj = await axiosRequest.get(url, getConfig);

    response = responseObj.data;
  }

  return new Promise((resolve) => {
    resolve(response);
  });
}

export default request;
