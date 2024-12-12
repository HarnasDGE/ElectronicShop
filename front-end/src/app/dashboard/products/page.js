"use client";
import { products } from "@/app/data/products";
// Komponent przykładowego formularza do dodawania nowych produktów z podpowiedziami i możliwością dodawania unikatowych specyfikacji oraz cech

import { useState, useMemo } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [capacity, setCapacity] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [resolution, setResolution] = useState("");
  const [panelType, setPanelType] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [keyFeatures, setKeyFeatures] = useState([]);
  const [currentFeature, setCurrentFeature] = useState("");
  const [description, setDescription] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [SKU, setSKU] = useState("");
  const [inStock, setInStock] = useState("");
  const [availability, setAvailability] = useState("");
  const [variantGroup, setVariantGroup] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [specification, setSpecification] = useState([
    { name: "Color", value: "" },
    { name: "Capacity", value: "" },
    { name: "Screen Size", value: "" },
    { name: "Resolution", value: "" },
    { name: "Panel Type", value: "" },
  ]);
  const [currentSpecName, setCurrentSpecName] = useState("");
  const [currentSpecValue, setCurrentSpecValue] = useState("");

  const brands = useMemo(() => {
    const allBrands = products.map((p) => p.brand).filter(Boolean);
    return Array.from(new Set(allBrands));
  }, []);

  const categories = useMemo(() => {
    const allCats = products.map((p) => p.category).filter(Boolean);
    return Array.from(new Set(allCats));
  }, []);

  const colors = useMemo(() => {
    const allColors = products.map((p) => p.color).filter(Boolean);
    return Array.from(new Set(allColors));
  }, []);

  const panelTypes = useMemo(() => {
    const panels = products.map((p) => p.panel_type).filter(Boolean);
    return Array.from(new Set(panels));
  }, []);

  const addFeature = () => {
    if (currentFeature.trim()) {
      setKeyFeatures((prev) => [...prev, currentFeature.trim()]);
      setCurrentFeature("");
    }
  };

  const removeFeature = (index) => {
    setKeyFeatures((prev) => prev.filter((_, i) => i !== index));
  };

  const addImage = () => {
    if (currentImage.trim()) {
      setImages((prev) => [...prev, currentImage.trim()]);
      setCurrentImage("");
    }
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const addSpecification = () => {
    if (currentSpecName.trim() && currentSpecValue.trim()) {
      setSpecification((prev) => [
        ...prev,
        { name: currentSpecName.trim(), value: currentSpecValue.trim() },
      ]);
      setCurrentSpecName("");
      setCurrentSpecValue("");
    }
  };

  const removeSpecification = (index) => {
    setSpecification((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredBrands = brand
    ? brands.filter((b) => b.toLowerCase().includes(brand.toLowerCase()))
    : [];
  const filteredCategories = category
    ? categories.filter((c) => c.toLowerCase().includes(category.toLowerCase()))
    : [];
  const filteredColors = color
    ? colors.filter((col) => col.toLowerCase().includes(color.toLowerCase()))
    : [];
  const filteredPanelTypes = panelType
    ? panelTypes.filter((p) =>
        p.toLowerCase().includes(panelType.toLowerCase())
      )
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika dodawania produktu
  };

  return (
    <section className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Add products</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Price:</label>
          <input
            type="number"
            step="0.01"
            className="w-full border border-gray-300 rounded p-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Discount Price:</label>
          <input
            type="number"
            step="0.01"
            className="w-full border border-gray-300 rounded p-2"
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Brand:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          {brand && filteredBrands.length > 0 && (
            <ul className="bg-white border border-gray-200 shadow mt-1 p-2">
              {filteredBrands.map((b, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:bg-gray-100 p-1"
                  onClick={() => setBrand(b)}
                >
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Color:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          {color && filteredColors.length > 0 && (
            <ul className="bg-white border border-gray-200 shadow mt-1 p-2">
              {filteredColors.map((c, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:bg-gray-100 p-1"
                  onClick={() => setColor(c)}
                >
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Capacity:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Screen Size:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={screenSize}
            onChange={(e) => setScreenSize(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Resolution:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={resolution}
            onChange={(e) => setResolution(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Panel Type:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={panelType}
            onChange={(e) => setPanelType(e.target.value)}
          />
          {panelType && filteredPanelTypes.length > 0 && (
            <ul className="bg-white border border-gray-200 shadow mt-1 p-2">
              {filteredPanelTypes.map((p, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:bg-gray-100 p-1"
                  onClick={() => setPanelType(p)}
                >
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <label className="font-semibold">Is New:</label>
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={isNew}
            onChange={(e) => setIsNew(e.target.checked)}
          />
        </div>

        <div>
          <h3 className="font-bold mb-2">Cechy</h3>
          <div className="flex space-x-2">
            <input
              className="flex-1 border border-gray-300 rounded p-2"
              value={currentFeature}
              onChange={(e) => setCurrentFeature(e.target.value)}
              placeholder="Dodaj cechę"
            />
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              onClick={addFeature}
            >
              Dodaj cechę
            </button>
          </div>
          <ul className="mt-2 space-y-1">
            {keyFeatures.map((f, i) => (
              <li key={i} className="flex justify-between items-center">
                <span>{f}</span>
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => removeFeature(i)}
                >
                  Usuń
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description:</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Additional Info:</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">SKU:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={SKU}
            onChange={(e) => setSKU(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">In Stock:</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded p-2"
            value={inStock}
            onChange={(e) => setInStock(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Availability:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Variant Group:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={variantGroup}
            onChange={(e) => setVariantGroup(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Category:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {category && filteredCategories.length > 0 && (
            <ul className="bg-white border border-gray-200 shadow mt-1 p-2">
              {filteredCategories.map((c, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:bg-gray-100 p-1"
                  onClick={() => setCategory(c)}
                >
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="font-bold mb-2">Obrazy</h3>
          <div className="flex space-x-2">
            <input
              className="flex-1 border border-gray-300 rounded p-2"
              value={currentImage}
              onChange={(e) => setCurrentImage(e.target.value)}
              placeholder="URL do obrazu"
            />
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              onClick={addImage}
            >
              Dodaj obraz
            </button>
          </div>
          <ul className="mt-2 space-y-1">
            {images.map((img, i) => (
              <li key={i} className="flex justify-between items-center">
                <span>{img}</span>
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => removeImage(i)}
                >
                  Usuń
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Full Description (Markdown/HTML):
          </label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            value={fullDescription}
            onChange={(e) => setFullDescription(e.target.value)}
          />
        </div>

        <div>
          <h3 className="font-bold mb-2">Specyfikacja</h3>
          <ul className="space-y-1">
            {specification.map((spec, i) => (
              <li key={i} className="flex justify-between items-center">
                <span>
                  {spec.name}: {spec.value}
                </span>
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => removeSpecification(i)}
                >
                  Usuń
                </button>
              </li>
            ))}
          </ul>
          <div className="flex space-x-2 mt-2">
            <input
              className="border border-gray-300 rounded p-2"
              value={currentSpecName}
              onChange={(e) => setCurrentSpecName(e.target.value)}
              placeholder="Nazwa specyfikacji"
            />
            <input
              className="border border-gray-300 rounded p-2"
              value={currentSpecValue}
              onChange={(e) => setCurrentSpecValue(e.target.value)}
              placeholder="Wartość specyfikacji"
            />
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              onClick={addSpecification}
            >
              Dodaj specyfikację
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Dodaj produkt
        </button>
      </form>
    </section>
  );
}
