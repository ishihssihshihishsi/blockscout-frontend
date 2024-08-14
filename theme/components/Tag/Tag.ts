import { tagAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

import colors from 'theme/foundations/colors';

import getDefaultTransitionProps from '../../utils/getDefaultTransitionProps';
import Badge from '../Badge';

const transitionProps = getDefaultTransitionProps();

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const variants = {
  subtle: definePartsStyle((props) => ({
    container: Badge.variants?.subtle(props),
  })),
  select: definePartsStyle((props) => ({
    container: {
      bg: mode('gray.100', colors.grayTrue[800])(props),
      color: mode('gray.500', colors.grayTrue[50])(props),
      _hover: {
        color: colors.grayTrue[50], // 'blue.400',
        opacity: 0.76,
      },
      [`
        &[data-selected=true],
        &[data-selected=true][aria-selected=true]
      `]: {
        bg: mode('blue.500', colors.grayTrue[700])(props),
        color: colors.grayTrue[50], //'whiteAlpha.800',
      },
    },
  })),
};

const sizes = {
  sm: definePartsStyle({
    container: {
      minH: 6,
      minW: 6,
      fontSize: 'sm',
      px: 1,
      py: '2px',
      lineHeight: 5,
    },
  }),
};

const baseStyleContainer = defineStyle({
  display: 'inline-block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  borderRadius: 'sm',
  ...transitionProps,
});

const baseStyle = definePartsStyle({
  container: baseStyleContainer,
});

const Tag = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: 'sm',
    variant: 'subtle',
    colorScheme: 'gray',
  },
});

export default Tag;
