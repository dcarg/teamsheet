export type SuccessfulAction<T> = {
  success: true,
  data: T,
}

export type FailedAction = {
  success: false,
  error: string
}