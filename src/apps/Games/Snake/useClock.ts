import {useCallback, useEffect, useRef} from 'react';

interface Props {
  precision?: number;
  frequency?: number;
  onUpdate: (time: number) => void;
}

type State = 'off' | 'on';

export const useClock = ({precision = 16, frequency = 60, onUpdate}: Props) => {
  const state = useRef<State>('off');
  const prev = useRef(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const loop = useCallback(() => {
    timeout.current = setTimeout(() => {
      let time = Date.now();
      if (time - prev.current >= frequency) {
        prev.current = time;
        onUpdate(time);
      }
      loop();
    }, precision);
  }, [frequency, precision, onUpdate]);

  const stop = useCallback(() => {
    state.current = 'off';
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }, []);

  const start = useCallback(() => {
    stop();
    state.current = 'on';
    let time = Date.now();
    prev.current = time;
    onUpdate(time);
    loop();
  }, [stop, loop, onUpdate]);

  useEffect(() => {
    return () => stop();
  }, [stop]);

  return {stop, start};
};