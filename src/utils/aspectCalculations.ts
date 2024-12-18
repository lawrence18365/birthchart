export const calculateAspects = (degree1: number, degree2: number) => {
  const angle = Math.abs(degree1 - degree2);
  const orb = 8; // Maximum orb in degrees

  if (Math.abs(angle - 0) <= orb || Math.abs(angle - 360) <= orb) {
    return { aspect: 'Conjunction', orb: Math.min(angle, Math.abs(angle - 360)) };
  }
  if (Math.abs(angle - 60) <= orb) {
    return { aspect: 'Sextile', orb: Math.abs(angle - 60) };
  }
  if (Math.abs(angle - 90) <= orb) {
    return { aspect: 'Square', orb: Math.abs(angle - 90) };
  }
  if (Math.abs(angle - 120) <= orb) {
    return { aspect: 'Trine', orb: Math.abs(angle - 120) };
  }
  if (Math.abs(angle - 180) <= orb) {
    return { aspect: 'Opposition', orb: Math.abs(angle - 180) };
  }
  return null;
};