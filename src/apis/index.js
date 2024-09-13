import axios from "axios";
export function fetchData() {
  return axios.get('https://relic.ylgj.net/api/v1/latest')
}