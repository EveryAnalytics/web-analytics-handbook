import facepaint, { DynamicStyleFunction } from 'facepaint';

// Todo 지원범위 결정 필요
const deviceWidth = {
  xs: 420,
  s: 920,
  m: 1120
}

const mq = (breakpoints = deviceWidth): DynamicStyleFunction => {
  const mediaQueries: string[] = Object.values(breakpoints)
    .sort((curr: number, next: number) => curr - next)
    .map((breakpoint: number) => `@media(min-width: ${breakpoint}px)`);

  return facepaint(mediaQueries, { overlap: true});
}

export default mq;
