export type SuccessfulServerAction<T> = {
  success: true,
  data: T,
}

export type FailedServerAction = {
  success: false,
  error: string
}

export type ServerAction<T> = FailedServerAction | SuccessfulServerAction<T>