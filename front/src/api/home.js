import Http from './http'

export const getLessons = params => Http({
  method: 'GET',
  url: '/front/lesson',
  params
})

export const createLessons = (params) => Http({
  method: 'POST',
  data: params,
  url: '/front/lessons'
})

export const updateLesson = data => Http({
  method: 'PUT',
  data,
  url: `/front/lessons`
})

export const deleteLesson = id => Http({
  method: 'DELETE',
  url: `/front/Lessons/${id}`
})

export const getLiving = params => Http({
  method: 'GET',
  url: '/front/living',
  params
})

export const createLiving = (params) => Http({
  method: 'POST',
  data: params,
  url: '/front/living'
})

export const updateLiving = data => Http({
  method: 'PUT',
  data,
  url: `/front/living`
})

export const deleteLiving = id => Http({
  method: 'DELETE',
  url: `/front/livings/${id}`
})

export const getTimeline = params => Http({
  method: 'GET',
  url: '/front/timeline',
  params
})

export const createTimeline = (params) => Http({
  method: 'POST',
  data: params,
  url: '/front/timeline'
})

export const updateTimeline = data => Http({
  method: 'PUT',
  data,
  url: `/front/timeline`
})

export const deleteTimeine = id => Http({
  method: 'DELETE',
  url: `/front/timelines/${id}`
})

export const register = (params) => Http({
  method: 'POST',
  data: params,
  url: `/front/register`
})

export const login = (params) => Http({
  method: 'POST',
  data: params,
  url: `/front/login`
})

export const createLesson = (params) => Http({
  method: 'POST',
  data: params,
  url: '/admin/createLesson'
})

export const createChapter = (params) => Http({
  method: 'POST',
  data: params,
  url: '/admin/createChapter'
})

export const getChapters = (params) => Http({
  method: 'POST',
  data: params,
  url: '/admin/getChapters'
})
