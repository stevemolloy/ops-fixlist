import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Issue } from '.'

const app = () => express(apiRoot, routes)

let issue

beforeEach(async () => {
  issue = await Issue.create({})
})

test('POST /issues 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ submitter: 'test', description: 'test', other_info: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.submitter).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.other_info).toEqual('test')
})

test('GET /issues 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /issues/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${issue.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(issue.id)
})

test('GET /issues/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /issues/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${issue.id}`)
    .send({ submitter: 'test', description: 'test', other_info: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(issue.id)
  expect(body.submitter).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.other_info).toEqual('test')
})

test('PUT /issues/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ submitter: 'test', description: 'test', other_info: 'test' })
  expect(status).toBe(404)
})
