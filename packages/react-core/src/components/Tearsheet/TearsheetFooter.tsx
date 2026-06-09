import type { FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Tearsheet/tearsheet';
import { ModalFooter, type ModalFooterProps } from '../Modal';

export interface TearsheetFooterProps extends ModalFooterProps {}

export const TearsheetFooter: FunctionComponent<TearsheetFooterProps> = ({
  className,
  ...props
}: TearsheetFooterProps) => <ModalFooter className={css(styles.tearsheetFooter, className)} {...props} />;
TearsheetFooter.displayName = 'TearsheetFooter';
