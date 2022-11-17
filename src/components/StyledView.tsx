// src/components/StyledView.tsx
import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  compose,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  borderRadius,
  BorderRadiusProps
} from 'styled-system';

// space allow to use padding, margin...
// layout allow to use width, height...
type StyledViewProps = ColorProps &
  SpaceProps &
  PositionProps &
  FlexProps &
  FlexboxProps &
  LayoutProps &
  BorderRadiusProps;

const StyledView = styled.View<StyledViewProps>(
  compose(color, space, position, flex, flexbox, layout, borderRadius)
);

export default StyledView;
