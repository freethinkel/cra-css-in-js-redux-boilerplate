import React, { FC } from 'react';
import { css } from 'linaria';
import { theme } from '../config/theme';
import Button from './Button';

const Header: FC = () => {
  return (
    <header className={classes.wrapper}>
      <div className="container">
        <div className={classes.row}>
          <div className={classes.logo}>Taksa</div>
          <div className="profile">
            <Button>Вход</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
const classes = {
  wrapper: css`
    padding: 8px 0;
    border-bottom: 1px solid ${theme.colors.black12};
    background-color: #fff;
  `,
  row: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  logo: css`
    font-weight: 900;
    font-size: 22px;
    letter-spacing: 2px;
    text-transform: uppercase;
  `,
};
