proc reverse*(s: string): string =
  var result = ""
  for c in s:
    result = c & result
  return result