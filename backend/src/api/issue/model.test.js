import { Issue } from '.'

let issue

beforeEach(async () => {
  issue = await Issue.create({ submitter: 'test', description: 'test', other_info: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = issue.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(issue.id)
    expect(view.submitter).toBe(issue.submitter)
    expect(view.description).toBe(issue.description)
    expect(view.other_info).toBe(issue.other_info)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = issue.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(issue.id)
    expect(view.submitter).toBe(issue.submitter)
    expect(view.description).toBe(issue.description)
    expect(view.other_info).toBe(issue.other_info)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
