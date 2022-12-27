import clsx from "clsx";
import { forwardRef, PropsWithChildren } from "react";
import { CSSTransition } from "react-transition-group";
import { useLockedBody } from "shared/lib/hooks";
import { Portal } from "../portal";
import { useEscape } from "./lib";
import styles from "./styles.module.scss";

interface ModalProps {
  className?: string;
  isOpen: boolean;
  close: () => void;
}

export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalProps>>(
  ({ isOpen, close, children, className }, ref) => {
    useLockedBody(isOpen);

    useEscape(close);

    return (
      <CSSTransition
        in={isOpen}
        timeout={0}
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.done,
          exitActive: styles.exitActive,
        }}>
        <Portal rootId="#modal">
          {isOpen && (
            <div className={clsx(styles.modal, className)} ref={ref}>
              {children}
            </div>
          )}
        </Portal>
      </CSSTransition>
    );
  }
);
