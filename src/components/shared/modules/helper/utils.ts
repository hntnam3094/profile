import moment from "moment";

export function dateTimeFormat (dateTime: string, format: string = 'll') {
  return moment(dateTime).format(format);
}

export function handlerImageUrl (url: string) {
  if (url) {
    return process.env.API_URL + url
  }
  return ''
}

export function handlerWebUrl (url: string) {
  if (url) {
    return process.env.WEB_URL + url
  }
  return ''
}