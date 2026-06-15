import type { ReactNode, HTMLProps, FunctionComponent, MouseEvent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Tearsheet/tearsheet';
import { Modal, ModalVariant } from '../Modal';

export interface TearsheetProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the tearsheet. Should be TearsheetHeader, TearsheetBody, and/or TearsheetFooter. */
  children: ReactNode;
  /** Additional classes added to the tearsheet. */
  className?: string;
  /** Flag to show the tearsheet. */
  isOpen?: boolean;
  /** Flag to show a stacked tearsheet. */
  stackLevel?: 0 | 1 | 2;
  /** A callback for when the close button is clicked. This prop needs to be passed to render the close button. */
  onClose?: (event: KeyboardEvent | MouseEvent) => void;
  /** A callback for when the tearsheet is closed via the escape key. */
  onEscapePress?: (event: KeyboardEvent) => void;
  /** The parent container to append the tearsheet to. Defaults to document.body. */
  appendTo?: HTMLElement | (() => HTMLElement);
  /** Accessible label for the tearsheet. */
  'aria-label'?: string;
  /** ID of the element that labels the tearsheet. */
  'aria-labelledby'?: string;
  /** ID of the element that describes the tearsheet. */
  'aria-describedby'?: string;
  /** Flag to disable focus trap. */
  disableFocusTrap?: boolean;
}

export const Tearsheet: FunctionComponent<TearsheetProps> = ({
  children,
  className,
  isOpen = false,
  onClose,
  onEscapePress,
  appendTo,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  disableFocusTrap,
  ...props
}: TearsheetProps) => {
  const stackLevelClassname = `pf-m-stack-level-${props.stackLevel ? props.stackLevel : '0'}`;

  return (
    <Modal
      animated
      className={css(styles.tearsheet, stackLevelClassname)}
      isOpen={isOpen}
      variant={ModalVariant.large}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      onClose={onClose}
      onEscapePress={onEscapePress}
      appendTo={appendTo}
      disableFocusTrap={disableFocusTrap}
    >
      <div className={css(styles.tearsheetInner, className)} {...props}>
        {children}
      </div>
    </Modal>
  );
};
Tearsheet.displayName = 'Tearsheet';
