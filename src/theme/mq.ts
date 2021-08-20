import facepaint, { DynamicStyleFunction } from 'facepaint';

type DeviceSize = 'm';

type DeviceWidth = {
  [key in DeviceSize]: number;
};

const deviceWidth: DeviceWidth = {
  m: 1000,
};

const mq = (breakpoints = deviceWidth): DynamicStyleFunction => {
  const mediaQueries: string[] = Object.values(breakpoints)
    .sort((curr: number, next: number) => curr - next)
    .map((breakpoint: number) => `@media(min-width: ${breakpoint}px)`);

  return facepaint(mediaQueries, { overlap: true });
};

export default mq;
