import Image from "next/image";
export const ProductKeyFeatures = ({ features }) => (
  <ul className="py-5">
    {features.map((key) => (
      <li key={key} className="flex gap-2 items-center mb-2">
        <Image
          src="/images/icons/apply.png"
          width={20}
          height={20}
          alt="Apply Icon"
        />
        <p className="p-0">{key}</p>
      </li>
    ))}
  </ul>
);
