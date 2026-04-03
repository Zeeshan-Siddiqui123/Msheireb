import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';

interface CommonModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
    className?: string;
    showCloseButton?: boolean;
    scrollBehavior?: "inside" | "outside" | "normal";
    classNames?: {
        wrapper?: string;
        base?: string;
        header?: string;
        body?: string;
        footer?: string;
        closeButton?: string;
    };
}

const CommonModal: React.FC<CommonModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = "md",
    className = "",
    showCloseButton = true,
    scrollBehavior = "normal",
    classNames
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
            size={size}
            hideCloseButton={!showCloseButton}
            scrollBehavior={scrollBehavior}
            classNames={{
                wrapper: "z-[9999]",
                backdrop: "bg-black/50 backdrop-blur-sm",
                base: [
                    "bg-white border border-white/20 shadow-2xl rounded-[32px] overflow-hidden",
                    classNames?.base,
                ].filter(Boolean).join(" "),
                header: [
                    "px-6 pt-6 border-b-0",
                    classNames?.header
                ].filter(Boolean).join(" "),
                body: [
                    "px-6 py-4",
                    classNames?.body
                ].filter(Boolean).join(" "),
                footer: [
                    "px-6 pb-6 border-t-0",
                    classNames?.footer
                ].filter(Boolean).join(" "),
                closeButton: "hover:bg-black/5 active:bg-black/10 transition-colors",
                ...classNames,
            }}
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            ease: "easeOut",
                        },
                    },
                    exit: {
                        y: 20,
                        opacity: 0,
                        transition: {
                            duration: 0.2,
                            ease: "easeIn",
                        },
                    },
                },
            }}
            className={className}
        >
            <ModalContent>
                {() => (
                    <>
                        {title && (
                            <ModalHeader className="flex flex-col gap-1 items-center">
                                {typeof title === 'string' ? (
                                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                                ) : (
                                    title
                                )}
                            </ModalHeader>
                        )}
                        <ModalBody className="items-center text-center">
                            {children}
                        </ModalBody>
                        {footer && (
                            <ModalFooter className="flex-col gap-2">
                                {footer}
                            </ModalFooter>
                        )}
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default CommonModal;
