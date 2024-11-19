export const TabProductSpecification = ({ product }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Specyfikacja Produktu</h2>
      <table className="w-full border-collapse shadow-md">
        <tbody>
          {product.specification.map((spec, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-background" : "bg-gray"
              }`}
            >
              <td className="py-2 px-4 font-bold bg-gray whitespace-nowrap">
                {spec.name}
              </td>
              <td className="py-2 px-4 w-full">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
