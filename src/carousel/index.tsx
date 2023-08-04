import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { FlatList, StyleProp, View, ViewabilityConfig, ViewStyle, ViewToken } from 'react-native';
import useMergeStyles from './theme';

export type CarouselStyles = {
  container?: StyleProp<ViewStyle>;
  listWrapper?: StyleProp<ViewStyle>;
  circle?: StyleProp<ViewStyle>;
  selectedCircle?: StyleProp<ViewStyle>;
  pagingCircleContainer?: StyleProp<ViewStyle>;
};

export type CarouselProps = {
  data: JSX.Element[];
  style?: CarouselStyles;
  isShowPagingCircle?: boolean;
  onChangeIndex?: (index: number) => void;
  bounces?: boolean;
  swipeAble?: boolean;
};

export type CarouselRef = {
  scrollToNextSlide: () => void;
};

const Carousel = forwardRef((props: CarouselProps, ref) => {
  const {
    data,
    style,
    isShowPagingCircle = true,
    swipeAble = true,
    bounces = false,
    onChangeIndex,
  } = props;
  const styles: CarouselStyles = useMergeStyles(style);
  const carouselRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useImperativeHandle(
    ref,
    (): CarouselRef => ({
      scrollToNextSlide: () => {
        carouselRef.current?.scrollToIndex({ animated: true, index: currentIndex + 1 });
      },
    })
  );

  const onViewableItemsChanged = (info: {
    viewableItems: Array<ViewToken>;
    changed: Array<ViewToken>;
  }) => {
    const selectedIndex = info?.viewableItems[0]?.index;
    setCurrentIndex(selectedIndex || 0);
    onChangeIndex && onChangeIndex(selectedIndex || 0);
  };

  const viewabilityConfig: ViewabilityConfig = { itemVisiblePercentThreshold: 50 };

  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={carouselRef}
        style={styles.listWrapper}
        scrollEnabled={swipeAble}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        pagingEnabled={true}
        data={data}
        renderItem={({ item }) => item}
        bounces={bounces}
      />
      {isShowPagingCircle && (
        <View style={styles.pagingCircleContainer}>
          {data.map((_, index) => (
            <View
              key={`circle-${index}`}
              style={[styles.circle, index === currentIndex && styles.selectedCircle]}
            />
          ))}
        </View>
      )}
    </View>
  );
});

export default Carousel;
