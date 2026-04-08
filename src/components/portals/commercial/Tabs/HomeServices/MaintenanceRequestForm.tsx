import QuickActionsWrapper from '../../../../common/QuickActionsWrapper';
import FormField from '../../../../common/FormFields';
import React from 'react';

interface MaintenanceRequestFormProps {
    category: string;
}

const MaintenanceRequestForm = ({ category }: MaintenanceRequestFormProps) => {
    const [formData, setFormData] = React.useState({
        subCategory: "ceiling",
        description: "",
    });

    const handleChange = (field: keyof typeof formData) => (value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <QuickActionsWrapper className="w-full gap-5 bg-transparent shadow-figma-drop">
            <div className="w-full space-y-4">

                {/* Category */}
                <FormField 
                    label="Category"
                    type="select"
                    value={category}
                    options={[{ key: category, text: category }]}
                />

                {/* Sub Category */}
                <FormField 
                    label="Sub Category"
                    type="select"
                    placeholder="Ceiling issues"
                    required
                    value={formData.subCategory}
                    onChange={handleChange('subCategory')}
                    options={[
                        { key: "ceiling", text: "Ceiling issues" },
                        { key: "wall", text: "Wall painting" },
                        { key: "flooring", text: "Flooring repair" },
                        { key: "other", text: "Other" }
                    ]}
                />

                {/* Description */}
                <FormField 
                    label="Description (Optional)"
                    type="textarea"
                    placeholder="Add your text"
                    required
                    value={formData.description}
                    onChange={handleChange('description')}
                />

                {/* Upload Image */}
                <FormField 
                    label="Upload Image"
                    type="file"
                />

            </div>
        </QuickActionsWrapper>
    );
};

export default MaintenanceRequestForm;