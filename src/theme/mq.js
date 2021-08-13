import facepaint from 'facepaint';

// Todo 지원범위 결정 필요
const deviceWidth = {
  xs: 420,
  s: 920,
  m: 1120
}

const mq = (breakpoints = deviceWidth) => {
  const mediaQueries = Object.values(breakpoints)
    .sort((curr, next) => curr - next)
    .map(breakpoint => `@media(min-width: ${breakpoint}px)`);

  return facepaint(mediaQueries, { overlap: true});
}

export default mq;
