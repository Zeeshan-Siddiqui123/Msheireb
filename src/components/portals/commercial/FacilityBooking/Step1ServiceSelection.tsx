import { Select, SelectItem, Checkbox, DatePicker } from "@heroui/react";
import { parseDate } from "@internationalized/date";
import { useState } from "react";
import BaseCard, { CardBody, CardFooter, CardHeader } from "../../../common/BaseCard";
import GlassButton from "../../../common/GlassButton";

const selectClassNames = {
  trigger: [
    "bg-transparent border border-white rounded-lg",
    "hover:!bg-white/15 transition-colors duration-200",
    "data-[hover=true]:!bg-white/15",
    "group-data-[focus=true]:!bg-white/10",
    "group-data-[focus=true]:!border-white/60",
    "group-data-[focus=true]:!shadow-none",
    "data-[focus-visible=true]:!ring-0",
    "data-[focus-visible=true]:!outline-none",
  ].join(" "),
  value: "text-white",
  selectorIcon: "text-white/60",
  innerWrapper: "text-white",
};

const radioOptions = [
  { label: "Additional Cleaning - 1 hr per visit", price: "136.00 QAR" },
  { label: "Additional Cleaning - 2 hr per visit", price: "272.00 QAR" },
  { label: "Additional Cleaning - 3 hr per visit", price: "408.00 QAR" },
  { label: "Additional Cleaning - 4 hr per visit", price: "544.00 QAR" },
];

interface Step1Props {
  onNext: () => void;
  onCancel: () => void;
}

const Step1ServiceSelection = ({ onNext, onCancel }: Step1Props) => {
  const [selectedOption, setSelectedOption] = useState(3);
  const [accepted, setAccepted] = useState(false);

  return (
    <BaseCard hideBorder={false} className="w-full">
      {/* ── HEADER ── */}
      <CardHeader className="pb-4">
        <h2 className="text-heading-primary text-white text-center w-full">
          Book Multipurpose Room
        </h2>
      </CardHeader>

      {/* ── BODY ── */}
      <CardBody className="space-y-5 py-5">

        {/* Services */}
        <div className="space-y-1.5">
          <label className="text-small-regular text-white">Services*</label>
          <Select
            defaultSelectedKeys={["1bed-3hrs"]}
            classNames={selectClassNames}
            renderValue={(items) =>
              items.map((item) => (
                <div key={item.key} className="text-white text-sm">{item.textValue}</div>
              ))
            }
          >
            <SelectItem key="1bed-3hrs" textValue="1 Bedroom - 3 hrs">1 Bedroom - 3 hrs</SelectItem>
            <SelectItem key="1bed-6hrs" textValue="1 Bedroom - 6 hrs">1 Bedroom - 6 hrs</SelectItem>
            <SelectItem key="2bed-3hrs" textValue="2 Bedroom - 3 hrs">2 Bedroom - 3 hrs</SelectItem>
          </Select>
        </div>

        {/* Type of Service */}
        <div className="space-y-1.5">
          <label className="text-small-regular text-white">Type of Service*</label>
          <Select
            defaultSelectedKeys={["cleaning"]}
            classNames={selectClassNames}
            renderValue={(items) =>
              items.map((item) => (
                <div key={item.key} className="text-white text-sm">{item.textValue}</div>
              ))
            }
          >
            <SelectItem key="cleaning" textValue="Cleaning">Cleaning</SelectItem>
            <SelectItem key="maintenance" textValue="Maintenance">Maintenance</SelectItem>
            <SelectItem key="security" textValue="Security">Security</SelectItem>
          </Select>
        </div>

        {/* Qty/Hrs */}
        <div className="space-y-1.5">
          <label className="text-small-regular text-white">Qty/Hrs*</label>
          <Select
            defaultSelectedKeys={["1"]}
            classNames={selectClassNames}
            renderValue={(items) =>
              items.map((item) => (
                <div key={item.key} className="text-white text-sm">{item.textValue}</div>
              ))
            }
          >
            <SelectItem key="1" textValue="1">1</SelectItem>
            <SelectItem key="2" textValue="2">2</SelectItem>
            <SelectItem key="3" textValue="3">3</SelectItem>
            <SelectItem key="4" textValue="4">4</SelectItem>
          </Select>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-small-regular text-white">Price</span>
          <span className="body-regular text-white font-semibold">840.00 QAR</span>
        </div>

        {/* Options */}
        <div className="space-y-3">
          <p className="text-small-regular text-white">Options</p>
          {radioOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(index)}
              className="flex items-center gap-3 w-full text-left"
            >
              <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                selectedOption === index ? "border-white" : "border-white/40"
              }`}>
                {selectedOption === index && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="text-small-regular text-white">
                {option.label}{" "}
                <span className="font-bold text-white">{option.price}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Service Delivery */}
        <div className="space-y-3">
          <p className="text-small-regular text-white">Service Delivery</p>
          <div className="flex items-center gap-3">
            <label className="text-small-regular text-white w-20 shrink-0">Date*</label>
            <DatePicker
              defaultValue={parseDate("2026-02-15")}
              classNames={{
                inputWrapper: [
                  "bg-white/10 border border-white/40 rounded-lg h-8",
                  "hover:!bg-white/15",
                  "data-[focus-within=true]:!bg-white/10",
                  "data-[focus-within=true]:!border-white/60",
                  "shadow-none",
                ].join(" "),
                input: "text-white text-xs",
                selectorButton: "text-white/60 !w-6 !h-6",
              }}
            />
          </div>
          <div className="flex items-center gap-3">
            <label className="text-small-regular text-white w-20 shrink-0">Daily Period*</label>
            <Select
              defaultSelectedKeys={["morning"]}
              className="flex-1"
              classNames={{
                ...selectClassNames,
                trigger: [
                  selectClassNames.trigger,
                  "!min-h-8 !h-8 py-0",
                ].join(" "),
              }}
              renderValue={(items) =>
                items.map((item) => (
                  <div key={item.key} className="text-white text-xs">{item.textValue}</div>
                ))
              }
            >
              <SelectItem key="morning" textValue="Morning (7am - 12pm)">Morning (7am - 12pm)</SelectItem>
              <SelectItem key="afternoon" textValue="Afternoon (12pm - 5pm)">Afternoon (12pm - 5pm)</SelectItem>
              <SelectItem key="evening" textValue="Evening (5pm - 10pm)">Evening (5pm - 10pm)</SelectItem>
            </Select>
          </div>
        </div>
      </CardBody>

      {/* ── FOOTER ── */}
      <CardFooter className="pt-4 border-t border-white/20 space-y-4">
        {/* Terms */}
        <Checkbox
          isSelected={accepted}
          onValueChange={setAccepted}
          classNames={{
            label: "text-small-regular text-white",
            wrapper: "border-white/50 before:border-white/50 after:bg-white/80",
          }}
        >
          Accept Terms and Conditions
        </Checkbox>

        {/* Buttons */}
        <div className="flex items-center gap-3 justify-center w-full pt-1">
          <GlassButton className="w-32" buttonClassName="py-2.5" onClick={onCancel}>
            Cancel
          </GlassButton>
          <GlassButton className="w-32" buttonClassName="py-2.5" onClick={onNext}>
            Next
          </GlassButton>
        </div>
      </CardFooter>
    </BaseCard>
  );
};

export default Step1ServiceSelection;
