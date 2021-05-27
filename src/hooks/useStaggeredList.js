import { useTrail } from 'react-spring';

export default function useStaggeredList(number) {
  const trailAnimes = useTrail(number, {
    transform: 'translate3d(0px, 0px, 0px)',
    from: { transform: 'translate3d(-50px, 0px, 0px)' },
    config: {
      mass: 0.8,
      tension: 280,
      friction: 20,
    },
    delay: 200,
  });

  return trailAnimes;
}
