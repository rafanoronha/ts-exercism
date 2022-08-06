type BandsEncoding = {
  [key: string]: number
}

const encoding: BandsEncoding = {
  'brown black': 10,
  'blue grey': 68,
  'yellow violet': 47,
  'orange orange': 33,
  'green brown': 51
} 

export function decodedValue(bands: Array<string>) {
  return encoding[bands.slice(0, 2).join(' ')]
}
