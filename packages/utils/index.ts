export const formatName = (name: string) => {
  return name.replace(/[\s\d]/g, '').toLowerCase() + ' hardcoded last names';
}
