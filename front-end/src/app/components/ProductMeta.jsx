import { Divider } from "@/app/components/Divider";
import PayPalIcon from "@/app/assets/images/paypal.svg";
import { PaymentIcons } from "@/app/components/PaymentIcons";
export const ProductMeta = ({ product }) => (
  <div>
    <div className="flex gap-3 items-center pb-3">
      Buy with <PayPalIcon className="scale-150" />
    </div>
    <Divider />
    <div className="py-5 flex flex-col gap-2">
      <p>
        SKU: <span className="opacity-70">{product.SKU}</span>
      </p>
      <p>
        Category: <span className="opacity-70">{product.category}</span>
      </p>
      <p>
        Tag: <span className="opacity-70">{product.key_features[0]}</span>
      </p>
    </div>
    <PaymentIcons background="gray" />
  </div>
);
