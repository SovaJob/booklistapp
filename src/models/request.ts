enum ERequestMethod {
  POST,
  GET,
  PUT,
  DELETE,
  PATCH
}

export type TRequestMethod = keyof typeof ERequestMethod;