import { Breadcrumb } from "antd";
import React from "react";

export default function CommonPageTitle({ children, title, items }: { children?: React.ReactNode | React.ReactElement, title: string, items: { title: any }[] }) {
    return (
        <div className="mb-4 flex justify-between ">
            <div>
                <h3 className="text-xl">{title}</h3>
                <Breadcrumb
                    items={items}
                />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
