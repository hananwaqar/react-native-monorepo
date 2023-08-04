import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useMergeStyles from './theme';
import { TooltipProps, TooltipStyles } from './types';
import { ToolTipIcon } from '../assets/';

export type Position = {
  left?: number;
  top?: number;
};

const TooltipComponent = (props: TooltipProps) => {
  const {
    description,
    style,
    iconStyles,
    isShowTooltip,
    popupAlignment,
    arrowSize = 10,
    popUpWidth = 210,
  } = props;
  const { size, color, bgColor } = iconStyles || {};
  const styles: TooltipStyles = useMergeStyles(style);

  const [showPopup, setShowPopup] = useState<boolean>(isShowTooltip || false);
  const [popupPosition, setPopupPosition] = useState<Position>();
  const [toolTipPosition, setToolTipIconPosition] = useState<Position>();

  return (
    <>
      <View
        style={styles.container}
        onLayout={(event) => {
          const { x, y, width, height } = event.nativeEvent.layout;
          setToolTipIconPosition({ left: x, top: y + height });
          switch (popupAlignment) {
            case 'left':
              setPopupPosition({
                left: x - popUpWidth + width,
                top: y + height + arrowSize,
              });
              break;
            case 'right':
              setPopupPosition({
                left: x,
                top: y + height + arrowSize,
              });
              break;
            case 'center':
            default:
              setPopupPosition({
                left: x - popUpWidth / 2 + width / 2,
                top: y + height + arrowSize,
              });
              break;
          }
        }}
      >
        <TouchableOpacity onPress={() => setShowPopup(!showPopup)}>
          <ToolTipIcon size={size} backgroundColor={bgColor} color={color} />
        </TouchableOpacity>
      </View>
      <>
        {showPopup && popupPosition ? (
          <>
            <View
              style={[
                styles.popupContainer,
                { left: popupPosition.left, top: popupPosition.top, width: popUpWidth },
              ]}
            >
              <Text style={styles.popupDescriptionText}>{description}</Text>
            </View>
            <View
              style={[
                styles.triangleArrowView,
                {
                  borderRightWidth: arrowSize,
                  borderBottomWidth: arrowSize,
                  borderLeftWidth: arrowSize,
                  left: toolTipPosition?.left,
                  top: toolTipPosition?.top,
                },
              ]}
            />
          </>
        ) : null}
      </>
    </>
  );
};

export default TooltipComponent;
