export const sliceEmail = (email: string) => {
  const atIndex = email.indexOf('@')

  return email.slice(0, atIndex)
}
