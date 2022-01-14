export interface IActionType {
  [U: string]: string
}

export interface IAction<P> {
  type: string
  payload: P
  error?: string
}

export interface IActionParams<T> {
  payload: T,
  type: string
}

