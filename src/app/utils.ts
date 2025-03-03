export function formatDate(iso: string) {
  return new Date(iso).toLocaleString('sr-RS');
}

export function generateDestinationImage(dest: string) {
  return `https://img.pequla.com/destination/${dest.split(' ')[0].toLowerCase()}.jpg`
}
