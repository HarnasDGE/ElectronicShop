export const ProductPricing = ({ product }) => (
  <div>
    <div className="flex items-center gap-4 pt-6">
      <h3 className="text-secondary text-4xl">
        ${product.discount_price || product.price}
      </h3>
      {product.discount_price && (
        <p className="text-xl font-bold line-through opacity-40">
          ${product.price}
        </p>
      )}
    </div>
  </div>
);
