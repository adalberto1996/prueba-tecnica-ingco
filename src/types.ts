export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  status?: boolean
  birthday?: Date
  skills?: string[]
  avatar?: Avatar[]
}

export interface Avatar {
  name: string
  percent: number
  size: number
  status: Status
  type: Type
  uid: Uid
  url: string
}

export enum Status {
  Done = 'done',
}

export enum Type {
  ImageJPEG = 'image/jpeg',
}

export enum Uid {
  RCUpload1681905840519 = 'rc-upload-1681905840519',
  RCUpload1681905840520 = 'rc-upload-1681905840520',
  RCUpload1681905840521 = 'rc-upload-1681905840521',
  RCUpload1681905840522 = 'rc-upload-1681905840522',
  RCUpload1681905840523 = 'rc-upload-1681905840523',
}
