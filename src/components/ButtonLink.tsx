import React, { FC } from 'react';
import Link from 'next/link';
import { Button, ButtonProps } from './ui/button';

type ButtonLinkProps = ButtonProps & {
  href: string;
};

const ButtonLink: FC<ButtonLinkProps> = ({ href, children, ...props }) => {
  return (
    <Link href={href} passHref>
      <Button asChild {...props}>
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
