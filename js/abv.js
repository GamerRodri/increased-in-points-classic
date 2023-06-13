let abv = (number, decPlaces) => {
  if (!decPlaces) {decPlaces = 3}
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces)

  // Enumerate number abbreviations, now up to qtV!
  var abbrev = ['K', 'M', 'B', 'T','qd','Qn','Sx','Sp','O','N','de','Ud','DD','tdD','qdD','Qnd','SxD','SpD','OcD','NvD','Vgn','UVg','DVg','qtV','QnV','SeV','SPG','OVG','NVG','TGN','UTG','DTG','tsTG','qtTG','QnTG']
  if (number >= Math.pow(10,abbrev.length)) {
    return number
  }
    
  // Go through the array backwards, so we do the largest first
  for (var i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    var size = Math.pow(10, (i + 1) * 3)

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.round((number * decPlaces) / size) / decPlaces

      // Handle special case where we round up to the next abbreviation
      if (number == 1000 && i < abbrev.length - 1) {
        number = 1
        i++
      }

      // Add the letter for the abbreviation
        number += abbrev[i]

      // We are done... stop
      break
    }
  }

  return number
}
