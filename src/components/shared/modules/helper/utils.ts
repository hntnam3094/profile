import moment from "moment";

export function dateTimeFormat (dateTime: string, format: string = 'll') {
  return moment(dateTime).format(format);
}

export function handlerImageUrl (url: string) {
  if (url) {
    return process.env.NEXT_PUBLIC_API_URL + url
  }
  return ''
}

export function handlerWebUrl (url: string) {
  if (url) {
    return process.env.NEXT_PUBLIC_WEB_URL + url
  }
  return ''
}