import { Select, SelectItem, Textarea, Checkbox } from "@heroui/react";
import { useState } from "react";
import BaseCard, { CardBody, CardFooter } from "../../../common/ui/BaseCard";
import GlassButton from "../../../common/ui/GlassButton";

const selectClassNames = {
  trigger: [
    "bg-transparent border border-white rounded-xl min-h-[46px]",
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

interface Step2Props {
  onNext: () => void;
  onCancel: () => void;
}

const Step2PersonalInfo = ({ onNext, onCancel }: Step2Props) => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="space-y-4 w-full">
      {/* Title */}
      <h2 className="heading-medium-regular text-white text-center">My Personal Information</h2>

      {/* Contact Method */}
      <BaseCard>
        <CardBody className="space-y-3">

          {/* Contact Method dropdown */}
          <div className="space-y-1.5">
            <label className="text-small-regular text-white">Contact Method</label>
            <Select
              defaultSelectedKeys={["email"]}
              classNames={selectClassNames}
              renderValue={(items) =>
                items.map((item) => (
                  <div key={item.key} className="text-white text-small-regular">{item.textValue}</div>
                ))
              }
            >
              <SelectItem key="email" textValue="Email Contact">Email Contact</SelectItem>
              <SelectItem key="phone" textValue="Phone Contact">Phone Contact</SelectItem>
              <SelectItem key="in-person" textValue="In Person">In Person</SelectItem>
            </Select>
          </div>

          {/* Email display row */}
          <div className="flex items-center justify-between bg-transparent border border-white rounded-xl px-4 py-3">
            <span className="text-small-regular text-white">svarghese@msheireb.com</span>
            <button className="text-white/60 hover:text-white transition-colors">
              <img src="/src/assets/edit.png" alt="" />
            </button>
          </div>

          {/* Add Comment */}
          <div className="space-y-1.5">
            <label className="text-small-regular text-white">Add Comment</label>
            <Textarea
              placeholder="Kindly specify the date and time you wish to recieve your second visit and any other relevant details:"
              minRows={8}
              className="w-full"
              classNames={{
                inputWrapper: [
                  "bg-transparent border border-white rounded-xl",
                  "hover:!bg-white/15 transition-colors duration-200",
                  "data-[hover=true]:!bg-white/15",
                  "group-data-[focus=true]:!bg-white",
                  "group-data-[focus=true]:!border-white",
                  "group-data-[focus=true]:!shadow-none",
                  "data-[focus-visible=true]:!ring-0",
                  "data-[focus-visible=true]:!outline-none",
                ].join(" "),
                input: "text-white placeholder:text-white font-sans-pro text-[12px] py-2 leading-[16px] resize-none",
              }}
            />
          </div>

        </CardBody>
        <CardFooter className="mt-5">
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
          <div className="flex items-center gap-12 justify-center pt-2 mb-14 mt-8">
            <GlassButton className="w-36" buttonClassName="py-2.5 shadow-figma-drop" onClick={onCancel}>
              Cancel
            </GlassButton>
            <GlassButton className="w-36" buttonClassName="py-2.5 shadow-figma-drop" onClick={onNext}>
              Next
            </GlassButton>
          </div>
        </CardFooter>
      </BaseCard>

      {/* Terms */}

    </div>
  );
};

export default Step2PersonalInfo;
