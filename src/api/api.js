import axios from 'axios'

const api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/',
})

export async function getData(table) {
  return api.get(`${table}`)
}

export async function addData(table, payload) {
  return api.post(`${table}`, payload)
}

export async function editData(table, id, payload) {
  return api.put(`${table}/${id}`, payload)
}

export async function deleteData(table, id) {
  return api.delete(`${table}/${id}`)
}

export async function deleteAll(table) {
  return api.delete(`${table}`)
}
