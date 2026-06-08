import { type FunctionComponent, type HTMLProps, type ReactNode } from 'react';
import styles from '@patternfly/react-styles/css/components/Tearsheet/tearsheet';
import { css } from '@patternfly/react-styles';

interface TearsheetProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside Tearsheet */
  children?: ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const Tearsheet: FunctionComponent<TearsheetProps> = ({ className, children, ...props }: TearsheetProps) => (
  <div className={css(styles.tearsheet, className)} {...props}>
    {children}
  </div>
);
Tearsheet.displayName = 'Tearsheet';
