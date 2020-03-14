import Http from './http'

export const getLessons = params => Http({
  method: 'GET',
  url: '/lesson',
  params
})

export const createLessons = (params) => Http({
  method: 'POST',
  data: params,
  url: '/lessons'
})

export const updateLesson = data => Http({
  method: 'PUT',
  data,
  url: `/lessons`
})

export const deleteLesson = id => Http({
  method: 'DELETE',
  url: `/Lessons/${id}`
})

export const getLiving = params => Http({
  method: 'GET',
  url: '/living',
  params
})

export const createLiving = (params) => Http({
  method: 'POST',
  data: params,
  url: '/living'
})

export const updateLiving = data => Http({
  method: 'PUT',
  data,
  url: `/living`
})

export const deleteLiving = id => Http({
  method: 'DELETE',
  url: `/livings/${id}`
})

export const getTimeline = params => Http({
  method: 'GET',
  url: '/timeline',
  params
})

export const createTimeline = (params) => Http({
  method: 'POST',
  data: params,
  url: '/timeline'
})

export const updateTimeline = data => Http({
  method: 'PUT',
  data,
  url: `/timeline`
})

export const deleteTimeine = id => Http({
  method: 'DELETE',
  url: `/timelines/${id}`
})
