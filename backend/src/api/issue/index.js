import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update } from './controller'
import { schema } from './model'
export Issue, { schema } from './model'

const router = new Router()
const { submitter, description, other_info } = schema.tree

/**
 * @api {post} /issues Create issue
 * @apiName CreateIssue
 * @apiGroup Issue
 * @apiParam submitter Issue's submitter.
 * @apiParam description Issue's description.
 * @apiParam other_info Issue's other_info.
 * @apiSuccess {Object} issue Issue's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Issue not found.
 */
router.post('/',
  body({ submitter, description, other_info }),
  create)

/**
 * @api {get} /issues Retrieve issues
 * @apiName RetrieveIssues
 * @apiGroup Issue
 * @apiUse listParams
 * @apiSuccess {Object[]} issues List of issues.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /issues/:id Retrieve issue
 * @apiName RetrieveIssue
 * @apiGroup Issue
 * @apiSuccess {Object} issue Issue's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Issue not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /issues/:id Update issue
 * @apiName UpdateIssue
 * @apiGroup Issue
 * @apiParam submitter Issue's submitter.
 * @apiParam description Issue's description.
 * @apiParam other_info Issue's other_info.
 * @apiSuccess {Object} issue Issue's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Issue not found.
 */
router.put('/:id',
  body({ submitter, description, other_info }),
  update)

export default router
