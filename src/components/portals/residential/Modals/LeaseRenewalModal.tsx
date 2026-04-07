import React from 'react';
import { Button } from '@heroui/react';
import { Bell } from 'lucide-react';
import CommonModal from '../../../common/CommonModal';
import GlassButton from '../../../common/GlassButton';

interface LeaseRenewalModalProps {
    isOpen: boolean;
    onClose: () => void;
    expiryDate: string;
    daysRemaining: number;
    onRequestRenewal: () => void;
}

const LeaseRenewalModal: React.FC<LeaseRenewalModalProps> = ({
    isOpen,
    onClose,
    expiryDate,
    daysRemaining,
    onRequestRenewal
}) => {
    return (
        <CommonModal
            isOpen={isOpen}
            onClose={onClose}
            size="sm"
            showCloseButton={false}
            classNames={{
                base: "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-lg p-1",
                body: "pt-8 pb-4",
                footer: "pb-4"
            }}
        >
            {/* Icon Container */}
            <div className="relative mb-6">
                <div className="w-24 h-24 flex items-center justify-center relative">
                    {/* Subtle decorative elements for the bell icon similar to image */}
                    <Bell size={56} className="text-slate-900 stroke-[1.5]" />
                    <div className="absolute top-6 right-6 w-3.5 h-3.5 rounded-full border-2 border-white bg-slate-900" />
                </div>
            </div>

            {/* Content */}
            <div className="space-y-3 px-4">
                <h2 className="text-xl font-bold text-slate-900">
                    Lease Renewal Reminder
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mx-auto">
                    Your lease is set to expire on [{expiryDate}] <br />
                    (in [{daysRemaining}] days)
                </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 w-full mt-3 px-4">
                <GlassButton
                    onClick={onRequestRenewal}
                    className="w-full py-1 bg-gradient-to-r from-blue-100 via-white to-blue-100 hover:from-blue-100 hover:to-blue-100  font-semibold rounded-full shadow-lg"
                >
                    <span className='text-blue-600'>Request Renewal</span>
                </GlassButton>
                <Button
                    onPress={onClose}
                    variant="light"
                    className="w-full rounded-full py-1 text-slate-400 hover:text-slate-600 font-medium"
                >
                    Remind me later
                </Button>
            </div>
        </CommonModal>
    );
};

export default LeaseRenewalModal;
