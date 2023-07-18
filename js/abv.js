let abbrev = ['K', 'M', 'B', 'T','qd','Qn','Sx','Sp','O','N','de','Ud','DD','tdD','qdD','Qnd','SxD','SpD','OcD','NvD','Vgn','UVg','DVg','qtV','QnV','SeV','SPG','OVG','NVG','TGN','UTG','DTG','tsTG','qtTG','QnTG','ssTG','SpTG','OcTG','NoTG','QdDR','uQDR','dQDR','tQDR','qdQDR','QnQDR','SxQDR','SpQDR','OQDDR','NQDDR','QGNT','uQGNT','dQGNT','tQGNT','qdQGNT','QnQGNT','SxQGNT','SpQGNT','OQQGNT','NQQGNT','SXGNTL','uSXGNTL','dSXGNTL','tSXGNTL','qdSXGNTL','QnSXGNTL','SxSXGNTL','SpSXGNTL','OSXGNTL','NvSXGNTL','SPTGNTL','uSPTGNTL','dSPTGNTL','tSPTGNTL','qdSPTGNTL','QnSPTGNTL','SxSPTGNTL','SpSPTGNTL','OSPTGNTL','NvSPTGNTL','OTGNTL','uOTGNTL','dOTGNTL','tOTGNTL','qdOTGNTL','QnOTGNTL','SxOTGNTL','SpOTGNTL','OOTGNTL','NvOTGNTL','NONGNTL','uNONGNTL','dNONGNTL','tNONGNTL','qdNONGNTL','QnNONGNTL','SxNONGNTL','SpNONGNTL','ONONGNTL','NvNONGNTL','CENT','uCENT','dCENT','tCENT','qdCENT']
let abv = (number, startAbv, decPlaces) => {
  if (startAbv == null || startAbv >= 21) {
    startAbv = 21
  }
  let orNum = number
  if (!decPlaces) {decPlaces = 3}
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces)

  // Enumerate number abbreviations, now up to qtV!
  try {
  if (number >= Math.pow(10,(abbrev.length*3)+3)) {
    if (decPlaces <= 100) {
      return new Number(number).toFixed(decPlaces)
    } else {
      return new Number(number).toFixed(3)
    }
  }
  // Go through the array backwards, so we do the largest first
  for (var i = abbrev.length - 1; i >= 0; i--) {
    if (number >= Math.pow(10, startAbv)) {
      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10, (i + 1) * 3)
    } else {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

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
  } catch (e) {
    console.warn(`If you're seeing this, tell ming736 he absolutely screwed up the abv.js code because an error occured. Abbreviation Arguments:\n ${number}, ${decPlaces}\nError Details: \n ${e}`)
    return orNum
  } 
}
