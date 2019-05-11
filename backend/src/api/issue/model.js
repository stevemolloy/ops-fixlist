import mongoose, { Schema } from 'mongoose'

const issueSchema = new Schema({
  submitter: {
    type: String
  },
  description: {
    type: String
  },
  other_info: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

issueSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      submitter: this.submitter,
      description: this.description,
      other_info: this.other_info,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Issue', issueSchema)

export const schema = model.schema
export default model
