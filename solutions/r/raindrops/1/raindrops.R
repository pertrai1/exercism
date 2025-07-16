raindrops <- function(number) {
  drops <- list('3' = "Pling", '5' = "Plang", '7' = "Plong")
  result <- ""

  for (key in names(drops)) {
    if (number %% as.integer(key) == 0) {
      result <- paste0(result, drops[[key]])
    }
  }

  if (nchar(result) == 0) {
    return(as.character(number))
  } else {
    return(result)
  }
}
