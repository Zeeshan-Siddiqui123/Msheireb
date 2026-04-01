import { Select, SelectItem, Checkbox, DatePicker } from "@heroui/react";
import { parseDate } from "@internationalized/date";
import { useState } from "react";
import BaseCard, { CardBody, CardHeader } from "../../../common/BaseCard";
import GlassButton from "../../../common/GlassButton";

const selectClassNames = {
  trigger: [
    "bg-white/10 border border-white/40 rounded-xl min-h-[46px]",
    "hover:!bg-white/15 transition-colors duration-200",
    "data-[hover=true]:!bg-white/15",
    "group-data-[focus=true]:!bg-white/10",
    "group-data-[focus=true]:!border-white/60",
    "group-data-[focus=true]:!shadow-none",
    "data-[focus-visible=true]:!ring-0",
    "data-[focus-visible=true]:!outline-none",
  ].join(" "),
  value: "text-white text-sm",
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
    <div className="space-y-4 w-full">
      {/* Title */}
      <h2 className="heading-medium-semibold text-white text-center">Book Multipurpose Room</h2>

      {/* Main form card */}
      <BaseCard>
        <CardBody className="space-y-4">

          {/* Services */}
          <div className="space-y-1.5">
            <label className="text-small-regular text-white/80">Services*</label>
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
            <label className="text-small-regular text-white/80">Type of Service*</label>
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
            <label className="text-small-regular text-white/80">Qty/Hrs*</label>
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
            <span className="text-small-regular text-white/80">Price</span>
            <span className="body-regular text-white font-semibold">840.00 QAR</span>
          </div>

        </CardBody>
      </BaseCard>

      {/* Options card */}
      <BaseCard>
        <CardHeader>
          <p className="text-small-regular text-white/80 mb-3">Options</p>
        </CardHeader>
        <CardBody className="space-y-3">
          {radioOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(index)}
              className="flex items-center gap-3 w-full text-left"
            >
              {/* Custom radio */}
              <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                selectedOption === index ? "border-white" : "border-white/40"
              }`}>
                {selectedOption === index && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="text-small-regular text-white/90">
                {option.label}{" "}
                <span className="font-bold text-white">{option.price}</span>
              </span>
            </button>
          ))}
        </CardBody>
      </BaseCard>

      {/* Service Delivery card */}
      <BaseCard>
        <CardHeader>
          <p className="text-small-regular text-white/80 mb-3">Service Delivery</p>
        </CardHeader>
        <CardBody className="space-y-3">
          <div className="flex items-center gap-4">
            <label className="text-small-regular text-white/80 w-24 shrink-0">Date*</label>
            <DatePicker
              defaultValue={parseDate("2026-02-15")}
              classNames={{
                inputWrapper: [
                  "bg-white/10 border border-white/40 rounded-xl h-10",
                  "hover:!bg-white/15",
                  "data-[focus-within=true]:!bg-white/10",
                  "data-[focus-within=true]:!border-white/60",
                  "shadow-none",
                ].join(" "),
                input: "text-white text-sm",
                selectorButton: "text-white/60",
              }}
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="text-small-regular text-white/80 w-24 shrink-0">Daily Period*</label>
            <Select
              defaultSelectedKeys={["morning"]}
              className="flex-1"
              classNames={selectClassNames}
              renderValue={(items) =>
                items.map((item) => (
                  <div key={item.key} className="text-white text-sm">{item.textValue}</div>
                ))
              }
            >
              <SelectItem key="morning" textValue="Morning (7am - 12pm)">Morning (7am - 12pm)</SelectItem>
              <SelectItem key="afternoon" textValue="Afternoon (12pm - 5pm)">Afternoon (12pm - 5pm)</SelectItem>
              <SelectItem key="evening" textValue="Evening (5pm - 10pm)">Evening (5pm - 10pm)</SelectItem>
            </Select>
          </div>
        </CardBody>
      </BaseCard>

      {/* Terms */}
      <Checkbox
        isSelected={accepted}
        onValueChange={setAccepted}
        classNames={{
          label: "text-small-regular text-white/80",
          wrapper: "border-white/50 before:border-white/50 after:bg-white/80",
        }}
      >
        Accept Terms and Conditions
      </Checkbox>

      {/* Buttons */}
      <div className="flex items-center gap-3 justify-center pt-2">
        <GlassButton className="w-32" buttonClassName="py-2.5" onClick={onCancel}>
          Cancel
        </GlassButton>
        <GlassButton className="w-32" buttonClassName="py-2.5" onClick={onNext}>
          Next
        </GlassButton>
      </div>
    </div>
  );
};

export default Step1ServiceSelection;
