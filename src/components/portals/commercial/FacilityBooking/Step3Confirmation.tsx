import { Checkbox } from "@heroui/react";
import { useState } from "react";
import BaseCard, { CardBody, CardFooter, CardHeader } from "../../../common/BaseCard";
import GlassButton from "../../../common/GlassButton";

interface PaymentOption {
  key: string;
  name: string;
  description: string;
  logo: string;
  hasAdd?: boolean;
}

const paymentOptions: PaymentOption[] = [
  {
    key: "apple-pay",
    name: "Apple Pay",
    description: "Tap and pay quickly with Apple Pay",
    logo: "/src/assets/svg/socials/apple.svg"
  },
  {
    key: "card",
    name: "Credit or Debit Card",
    description: "Connect your card for fast & secure",
    hasAdd: true,
    logo: "/src/assets/svg/socials/mastercard.svg",
  },
  {
    key: "amex",
    name: "American Express",
    description: "Pay by card for fast and secure payment method",
    logo: "/src/assets/svg/socials/amex.svg",
  },
];

interface Step3Props {
  onConfirm: () => void;
  onCancel: () => void;
}

const Step3Confirmation = ({ onConfirm, onCancel }: Step3Props) => {
  const [selectedPayment, setSelectedPayment] = useState("apple-pay");
  const [accepted, setAccepted] = useState(false);

  return (
    <BaseCard hideBorder={false} className="w-full">

      {/* ── HEADER ── */}
      <CardHeader className="pb-4">
        <h2 className="heading-medium-semibold text-white text-center w-full">
          Book Multipurpose Room
        </h2>
      </CardHeader>

      {/* ── BODY ── */}
      <CardBody className="space-y-4 py-5">

        {/* Order Confirmation */}
        <div className="space-y-1">
          <h3 className="body-regular font-semibold text-white">Order Confirmation</h3>
          <p className="text-small-regular text-white">
            Please verify the configuration of your service by clicking on confirm. If you need to change any value you
            are invited to contact your service desk.
          </p>
        </div>

        {/* Silver Package */}
        <div className="space-y-1">
          <p className="text-small-regular font-semibold text-white">Silver Package - Cleaning Service</p>
          <p className="text-small-regular text-white">
            This service is dedicated to those residents that require additional access cards or door keys to facilitate
            entry into their residential accommodation and appropriate in the following circumstances:
          </p>
        </div>

        {/* Service Delivery */}
        <div className="border border-white rounded-lg p-3 space-y-0.5">
          <p className="text-small-regular text-white font-semibold mb-1">Service Delivery</p>
          <p className="text-small-regular text-white">Morning (7 am - 12 pm)</p>
          <p className="text-small-regular text-white">Delivery on 15 February 2026</p>
        </div>

        {/* Details */}
        <div className="border border-white rounded-lg p-3">
          <p className="text-small-regular text-white font-semibold mb-1">Details</p>
          <p className="text-small-regular text-white">1 Bedroom - 3 hrs (*1) - 840 QAR</p>
        </div>

        {/* My Information */}
        <div className="border border-white rounded-lg p-3">
          <p className="text-small-regular text-white font-semibold mb-1">My information</p>
          <p className="text-small-regular text-white">svarghese@msheireb.com</p>
        </div>

        {/* Payment Options */}
        <div className="rounded-lg divide-y divide-dotted overflow-hidden">
          {paymentOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setSelectedPayment(option.key)}
              className="flex items-center gap-3 w-full px-3 py-3 text-left"
            >
              {/* Logo */}
              <div className="w-16 flex items-center justify-center shrink-0">
                <img src={option.logo} alt={option.name} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-small-regular font-semibold text-white">{option.name}</p>
                <p className="text-inter-xs text-white">{option.description}</p>
              </div>

              {/* Add button or radio */}
              {option.hasAdd ? (
                <span className="text-small-regular text-white border border-white rounded-full px-3 py-0.5 shrink-0">
                  Add
                </span>
              ) : (
                <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                  selectedPayment === option.key ? "border-white" : "border-white"
                }`}>
                  {selectedPayment === option.key && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
              )}
            </button>
          ))}
        </div>

      </CardBody>

      {/* ── FOOTER ── */}
      <CardFooter className="pt-4 space-y-4">
        {/* Terms */}
        <Checkbox
            isSelected={accepted}
            onValueChange={setAccepted}
            classNames={{
              label: "text-[14px] leading-wider leading-[16px] font-sans-pro text-white", // ✅ your class applied

              wrapper: `
      border-white/50
      data-[selected=true]:bg-blue-500
      data-[selected=true]:border-blue-500
    `,

              icon: "text-white", // check icon color
            }}
          >
            Accept Terms and Conditions
          </Checkbox>

        {/* Buttons */}
        <div className="flex items-center gap-12 justify-center w-full pt-1">
          <GlassButton className="w-32" buttonClassName="py-2.5" onClick={onCancel}>
            Cancel
          </GlassButton>
          <GlassButton className="w-32" buttonClassName="py-2.5" onClick={onConfirm}>
            Next
          </GlassButton>
        </div>
      </CardFooter>

    </BaseCard>
  );
};

export default Step3Confirmation;
