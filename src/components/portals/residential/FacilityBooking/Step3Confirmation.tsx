import { Checkbox } from "@heroui/react";
import { useState } from "react";
import BaseCard, { CardBody, CardFooter, CardHeader } from "../../../common/BaseCard";
import GlassButton from "../../../common/GlassButton";

interface PaymentOption {
  key: string;
  name: string;
  description: string;
  logo: React.ReactNode;
  hasAdd?: boolean;
}

const paymentOptions: PaymentOption[] = [
  {
    key: "apple-pay",
    name: "Apple Pay",
    description: "Tap and pay quickly with Apple Pay",
    logo: (
      <div className="flex items-center gap-1">
        <svg width="14" height="17" viewBox="0 0 14 17" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.47 8.77c-.02-2.07 1.69-3.07 1.77-3.12-0.97-1.41-2.47-1.6-3-1.63-1.28-.13-2.5.75-3.15.75-.65 0-1.65-.73-2.71-.71-1.39.02-2.68.81-3.4 2.06C-.42 8.7.67 13.04 2.37 15.42c.83 1.19 1.82 2.52 3.11 2.47 1.25-.05 1.73-.8 3.24-.8 1.51 0 1.95.8 3.27.77 1.35-.02 2.2-1.21 3.02-2.4.96-1.37 1.35-2.7 1.37-2.77-.03-.01-2.63-1-2.65-3.92zM9.33 2.5C10 1.7 10.46.6 10.32-.5 9.38-.44 8.24.13 7.54.95 6.91 1.68 6.36 2.82 6.52 3.9c1.04.08 2.1-.5 2.81-1.4z" />
        </svg>
        <span className="text-white  text-sm">Pay</span>
      </div>
    ),
  },
  {
    key: "card",
    name: "Credit or Debit Card",
    description: "Connect your card for fast & secure",
    hasAdd: true,
    logo: (
      <div className="w-8 h-5 rounded bg-[#EB001B] relative overflow-hidden flex items-center justify-center">
        <div className="absolute right-0 w-5 h-5 rounded-full bg-[#F79E1B] opacity-90" />
        <div className="absolute left-0 w-5 h-5 rounded-full bg-[#EB001B]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-5 bg-[#FF5F00] opacity-80" />
        </div>
      </div>
    ),
  },
  {
    key: "amex",
    name: "American Express",
    description: "Pay by card for fast and secure payment method",
    logo: (
      <div className="bg-[#2E77BC] rounded px-1.5 py-0.5">
        <span className="text-white font-bold text-xs tracking-wider">AMEX</span>
      </div>
    ),
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
        <h2 className="heading-medium-regular text-white text-center w-full">
          Book Multipurpose Room
        </h2>
      </CardHeader>

      {/* ── BODY ── */}
      <CardBody className="space-y-4 py-5">

        {/* Order Confirmation */}
        <div className="space-y-1">
          <h3 className="body-regular  text-white">Order Confirmation</h3>
          <p className="text-small-regular text-white">
            Please verify the configuration of your service by clicking on confirm. If you need to change any value you
            are invited to contact your service desk.
          </p>
        </div>

        {/* Silver Package */}
        <div className="space-y-1">
          <p className="text-small-regular  text-white">Silver Package - Cleaning Service</p>
          <p className="text-small-regular text-white">
            This service is dedicated to those residents that require additional access cards or door keys to facilitate
            entry into their residential accommodation and appropriate in the following circumstances:
          </p>
        </div>

        {/* Service Delivery */}
        <div className="border border-white rounded-lg p-3 space-y-0.5">
          <p className="text-small-regular text-white  mb-1">Service Delivery</p>
          <p className="text-small-regular text-white">Morning (7 am - 12 pm)</p>
          <p className="text-small-regular text-white">Delivery on 15 February 2026</p>
        </div>

        {/* Details */}
        <div className="border border-white rounded-lg p-3">
          <p className="text-small-regular text-white  mb-1">Details</p>
          <p className="text-small-regular text-white">1 Bedroom - 3 hrs (*1) - 840 QAR</p>
        </div>

        {/* My Information */}
        <div className="border border-white rounded-lg p-3">
          <p className="text-small-regular text-white  mb-1">My information</p>
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
              <div className="w-10 flex items-center justify-center shrink-0">
                {option.logo}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-small-regular  text-white">{option.name}</p>
                <p className="text-inter-xs text-white">{option.description}</p>
              </div>

              {/* Add button or radio */}
              {option.hasAdd ? (
                <span className="text-small-regular text-white border border-white rounded-full px-3 py-0.5 shrink-0">
                  Add
                </span>
              ) : (
                <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${selectedPayment === option.key ? "border-white" : "border-white"
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
      <CardFooter className="pt-0 space-y-4">
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
        <div className="flex items-center gap-12 justify-center w-full py-8">
          <GlassButton className="w-32" buttonClassName="py-2.5 shadow-figma-drop" onClick={onCancel}>
            Cancel
          </GlassButton>
          <GlassButton className="w-32" buttonClassName="py-2.5 shadow-figma-drop" onClick={onConfirm}>
            Next
          </GlassButton>
        </div>
      </CardFooter>

    </BaseCard>
  );
};

export default Step3Confirmation;
