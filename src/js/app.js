import CatFlip from './CatFlip';

document.addEventListener('DOMContentLoaded', () => {
  const catFlip = new CatFlip();
  const flip = catFlip.flip.bind(catFlip);
  setInterval(flip, 2000);
});
