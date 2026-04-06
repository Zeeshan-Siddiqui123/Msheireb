import React from "react";
import Accordian from "../../../common/Accordian";
import type { AccordianItem } from "../../../common/Accordian";

interface GenericAccordianProps<T> {
    data: T[];
    mapItem: (item: T) => AccordianItem;
    defaultOpenId?: string | null;
    openItemId?: string | null;
    onOpenItemIdChange?: (id: string | null) => void;
}

function GenericAccordian<T>({
    data,
    mapItem,
    defaultOpenId,
    openItemId,
    onOpenItemIdChange,
}: GenericAccordianProps<T>) {
    const items: AccordianItem[] = data.map(mapItem);

    return (
        <Accordian
            items={items}
            defaultOpenId={defaultOpenId}
            openItemId={openItemId}
            onOpenItemIdChange={onOpenItemIdChange}
        />
    );
}

export default GenericAccordian;