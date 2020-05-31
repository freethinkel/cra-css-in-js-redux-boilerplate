import React, { FC } from 'react';
import styled, { css, cx } from 'linaria';
import { theme } from '../config/theme';
import { borderRadius, rgba, darken, rgb } from 'polished';

const Button: FC<ButtonProps> = ({ children, color, raised, ...props }) => {
  return (
    <button
      className={cx(
        classes.btn,
        color === 'primary' && classes.primary,
        !!raised && classes.raised
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

type ButtonProps = {
  color?: 'primary' | string;
  raised?: boolean;
};

const classes = {
  btn: css`
    margin: 12px;
    display: flex;
    align-items: center;
    border: none;
    font-size: 16px;
    font-weight: 900;
    height: 59px;
    padding: 0 16px;
    background-color: ${theme.colors.black12};
    border-radius: ${theme.vars.borderRadius};
    outline: none;
    transition: ${theme.vars.transiton};
    cursor: pointer;
    &[disabled] {
      opacity: 0.6;
      cursor: pointer;
    }
    &:focus {
      box-shadow: 0 0 0 3px ${rgba(theme.colors.black100, 0.5)};
    }
    &:active {
      box-shadow: none !important;
      transform: translateY(2px);
    }
  `,
  raised: css`
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      box-shadow: 0 2px 8px 3px ${theme.colors.black12};
    }
  `,
  primary: css`
    background-color: ${theme.colors.primary};
    background-image: ${theme.colors.primaryGradient};
    &:hover {
      background-image: none;
    }
    &:focus {
      background-image: none;
      box-shadow: 0 0 0 3px ${rgba(theme.colors.accent100, 0.7)};
    }
  `,
};
