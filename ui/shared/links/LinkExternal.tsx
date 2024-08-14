import type { LinkProps } from '@chakra-ui/react';
import { Link, chakra, Box, Skeleton } from '@chakra-ui/react';
import React from 'react';

import IconSvg from 'ui/shared/IconSvg';

import type { Variants } from './useLinkStyles';
import { useLinkStyles } from './useLinkStyles';

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
  variant?: Variants;
  iconColor?: LinkProps['color'];
  onClick?: LinkProps['onClick'];
}

const LinkExternal = ({ href, children, className, isLoading, variant, iconColor, onClick }: Props) => {
  const commonProps = {
    display: 'inline-block',
    alignItems: 'center',
  };

  const styleProps = useLinkStyles(commonProps, variant);

  if (isLoading) {
    if (variant === 'subtle') {
      return (
        <Skeleton className={ className } { ...styleProps } bgColor="inherit">
          { children }
          <Box boxSize={ 4 } display="inline-block"/>
        </Skeleton>
      );
    }

    return (
      <Box className={ className } { ...styleProps }>
        { children }
        <Skeleton boxSize={ 4 } verticalAlign="middle" display="inline-block"/>
      </Box>
    );
  }

  return (
    <Link className={ className } { ...styleProps } target="_blank" href={ href } onClick={ onClick }>
      { children }
      <IconSvg name="arrows/north-east" boxSize={ 4 } verticalAlign="middle" color={ iconColor ?? 'white' } flexShrink={ 0 }/>
    </Link>
  );
};

export default React.memo(chakra(LinkExternal));
