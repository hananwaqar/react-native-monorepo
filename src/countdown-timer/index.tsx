import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import useMergeStyles from './theme';

export type CountdownTimerProps = {
  style?: CountdownTimerStyles;
  duration: number;
  onTimeChanged?: (sec: number) => void;
  onResend?: () => void;
  formatTime?: (sec: number) => string;
  endText?: string;
};

export type CountdownTimerStyles = {
  containerStyle?: StyleProp<ViewStyle>;
  runningTextStyle?: StyleProp<TextStyle>;
  endTextStyle?: StyleProp<TextStyle>;
};

export type CountDownTimerRef = {
  start: () => void;
  restart: () => void;
};

const CountdownTimer = forwardRef(
  ({ style, duration, onResend, onTimeChanged, formatTime, endText }: CountdownTimerProps, ref) => {
    const styles: CountdownTimerStyles = useMergeStyles(style);
    const [seconds, setSeconds] = useState(duration);
    const [done, setDone] = useState(false);
    const backgroundRef = useRef<any>();

    useImperativeHandle(
      ref,
      (): CountDownTimerRef => ({
        start,
        restart,
      })
    );

    useEffect(() => {
      start();
      return () => {
        BackgroundTimer.clearInterval(backgroundRef.current);
      };
    }, []);

    const start = () => {
      tick();
      backgroundRef.current = BackgroundTimer.setInterval(() => {
        tick();
      }, 1000);
    };

    const restart = () => {
      setDone(false);
      setSeconds(duration);
      start();
    };

    const tick = () => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    };

    useEffect(() => {
      if (seconds > 0) {
        onTimeChanged?.(seconds);
      }
      if (seconds === 0) {
        BackgroundTimer.clearInterval(backgroundRef.current);
        setDone(true);
      }
    }, [seconds]);

    function pad(n: number) {
      return n < 10 ? '0' + n : n;
    }

    const getFormatTimer = (sec: any) => {
      var h = Math.floor(sec / 3600);
      var m = Math.floor(sec / 60) - h * 60;
      var s = Math.floor(sec - h * 3600 - m * 60);
      return pad(m) + ':' + pad(s);
    };

    return (
      <View style={styles.containerStyle}>
        <Text
          onPress={() => {
            if (done) {
              onResend?.();
            }
          }}
          style={done ? styles.endTextStyle : styles.runningTextStyle}
        >
          {done ? endText ?? '' : formatTime?.(seconds) ?? getFormatTimer(seconds)}
        </Text>
      </View>
    );
  }
);

export default CountdownTimer;
