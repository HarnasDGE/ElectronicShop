// ./src/app/product/[productId]/page.js
import { serialize } from "next-mdx-remote/serialize";
import { getProductById } from "@/app/api/getProductById";
import { getProductGroup } from "@/app/api/getProductGroup";
import { checkAvailableColors } from "@/app/utilities/checkAvailableColors";
import { checkAvailableCapacities } from "@/app/utilities/checkAvailableCapacities";
import { SubPageBar } from "@/app/components/SubPageBar";
import { WidthWrapper } from "@/app/components/WidthWrapper";
import { ImageGallery } from "@/app/components/ImageGallery";
import { ProductDetails } from "@/app/components/ProductDetails";
import { CtaSecondary } from "@/app/components/CtaSecondary";
import { ProductTabs } from "@/app/components/ProductTabs";
import { RelatedProducts } from "@/app/components/RelatedProducts";

// Ten komponent jest serwerowym komponentem
export default async function ProductPage({ params }) {
  const { productId } = await params;
  // Pobierz dane asynchronicznie
  const product = await getProductById(productId);
  const group = await getProductGroup(product);

  const reviews = {
    stars: 3.3,
    count: 12,
  };

  // Serializacja opisu produktu do MDX
  const mdxSource = await serialize(product.fullDescription);

  return (
    <div>
      <SubPageBar title={product.name} />
      <WidthWrapper className="flex gap-7 pt-20">
        <ImageGallery images={product.images} />
        <ProductDetails product={product} group={group} reviews={reviews} />
      </WidthWrapper>
      <WidthWrapper>
        <ProductTabs product={product} mdxSource={mdxSource} />
        <RelatedProducts products={group} />
      </WidthWrapper>
      <CtaSecondary />
    </div>
  );
}
