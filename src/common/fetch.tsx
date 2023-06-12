import axios, { AxiosResponse } from 'axios'
const apiUrl = {
  0: process.env.NEXT_PUBLIC_API_URL,
  1: process.env.NEXT_PUBLIC_API_URL_UK_Free
}
const commonParams = {}
type Methods = "head" | "options" | "put" | "post" | "patch" | "delete" | "get";
export default function Fetch(endPoint: any, params: any = {}, option: any = {}) {
  const method: Methods = option?.method ?? 'get'
  const inFormData: any = option?.inFormData ?? false // formType === true
  const isToken: boolean = option?.isToken ?? true;
  const url: string = option?.url
  const baseURL = option?.baseURL ? apiUrl[1] : apiUrl[0]
  let parameters = {
    ...commonParams,
    ...params,
  }
  const FetchHeader = (token: any) => {
    const headers = {
      'Content-Type': inFormData ? 'multipart/form-data' : 'application/json',
      // Authorization: `Bearer ${token || ''}`,
    }
    // if (!isToken) {
    //   delete headers['Authorization']
    // }
    return {
      headers,
    }
  }
  const convertToForm = () => {
    let formData = new FormData()
    for (let name in parameters) {
      if (typeof parameters[name] === 'object' && !parameters[name]?.type?.length) {
        formData.append(name, JSON.stringify(parameters[name]))
      } else {
        formData.append(name, parameters[name])
      }
    }
    return formData
  }
  // const optionList:any = {
  //   method:method,
  //   url:url ? url : baseURL + endPoint,
  //   inFormData
  //   ? convertToForm()
  //   : Object.keys(parameters)?.length
  //     ? parameters
  //     : FetchHeader('')
  // }
  const fetch = (token: any) => {
    return axios[method](
      url ? url : baseURL + endPoint,
      inFormData
        ? convertToForm()
        : Object.keys(parameters)?.length
          ? parameters
          : FetchHeader(token),
      FetchHeader(token),
    )
      .then((d: AxiosResponse) => {
        const dataParse = { data: d.data, status: true }
        return dataParse
      })
      .catch((err: any) => {
        return { ...err?.response?.data, status: false }
      })
  }
  if (isToken === false) {
    return fetch(isToken);
  }
  return fetch(null)
}