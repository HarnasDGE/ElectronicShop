"use client";
import { Suspense, useState } from "react";
import { Button } from "@/app/components/Button";
import { Divider } from "@/app/components/Divider";
import { TabProductDescription } from "./TabProductDescription";

import { TabProductSpecification } from "./TabProductSpecification";
import { TabDeliveryAndReturns } from "./TabDeliveryAndReturns";

export const ProductTabs = ({ product, mdxSource }) => {
  const [activeTab, setActiveTab] = useState("Product description");

  const tabs = [
    "Product description",
    "Specification",
    "Reviews",
    "Additional Information",
    "Shipping & Returns",
  ];

  return (
    <div>
      <ul className="flex gap-4 py-5">
        {tabs.map((tab) => (
          <li key={tab}>
            <Button
              color={activeTab === tab ? "active" : "gray"}
              className="rounded-2xl font-normal"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          </li>
        ))}
      </ul>
      <Divider />
      <div className="py-5">
        {activeTab === "Product description" && (
          <TabProductDescription mdxSource={mdxSource} />
        )}
        {activeTab === "Specification" && (
          <TabProductSpecification product={product} />
        )}
        {activeTab === "Reviews" && <p>This is the reviews content.</p>}
        {activeTab === "Additional Information" && (
          <p>This is the additional information content.</p>
        )}
        {activeTab === "Shipping & Returns" && <TabDeliveryAndReturns />}
      </div>
    </div>
  );
};
