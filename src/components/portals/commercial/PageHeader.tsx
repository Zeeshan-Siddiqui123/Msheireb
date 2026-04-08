import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GlassTabs } from '../../common/GlassTabs';

interface PageHeaderProps {
    title: string;
    description?: string;
    backPath?: string;
    onBack?: () => void;
    className?: string;
    belowTabsContent?: React.ReactNode;
    showTabs?: boolean;
    tabs?: any[];
    selectedTab?: string;
    onTabChange?: (key: string) => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    backPath = '/commercial',
    onBack,
    className = "",
    showTabs = false,
    tabs = [],
    selectedTab,
    belowTabsContent,
    onTabChange
}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigate(backPath);
        }
    };

    return (
        <div className={`flex flex-col items-center ${className}`}>

            {/* Header */}
            <div className="w-full flex items-center relative justify-center">
                <button
                    onClick={handleBack}
                    className="text-white absolute left-0 hover:text-white/80 mb-3 transition-colors cursor-pointer"
                >
                    <ChevronLeft size={26} strokeWidth={2} className='mb-6'/>
                </button>

                <p className="page-header-heading">
                    {title}
                </p>
            </div>

            {description && (
                <p className="body-regular text-center mb-6">
                    {description}
                </p>
            )}

            {/* Tabs (Reusable) */}
            {showTabs && tabs.length > 0 && (
                <div className="w-full">
                    <GlassTabs
                        items={tabs}
                        ariaLabel="Page Tabs"
                        selectedKey={selectedTab}
                        onSelectionChange={(key) => onTabChange?.(key as string)}
                    />
                    {belowTabsContent}
                </div>
            )}
        </div>
    );
};

export default PageHeader;