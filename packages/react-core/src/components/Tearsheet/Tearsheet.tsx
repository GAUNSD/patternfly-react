import type { ReactNode, HTMLProps, FunctionComponent } from 'react';
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
  onEscapePress,
  appendTo,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  disableFocusTrap,
  ...props
}: TearsheetProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      variant={ModalVariant.large}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      onEscapePress={onEscapePress}
      appendTo={appendTo}
      disableFocusTrap={disableFocusTrap}
    >
      <div className={css(styles.tearsheet, className)} {...props}>
        {children}
      </div>
    </Modal>
  );
};
Tearsheet.displayName = 'Tearsheet';
