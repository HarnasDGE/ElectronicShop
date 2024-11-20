export const TabDeliveryAndReturns = () => {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Dostawa i Zwroty</h2>

      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Informacje o Dostawie</h3>
        <ul className="list-disc list-inside text-gray">
          <li>Dostawa kurierem w ciągu 2-5 dni roboczych.</li>
          <li>Koszt dostawy: 15 zł (darmowa dostawa od 300 zł).</li>
          <li>Możliwość śledzenia przesyłki online.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-2">Polityka Zwrotów</h3>
        <ul className="list-disc list-inside text-gray">
          <li>14 dni na zwrot bez podania przyczyny.</li>
          <li>Produkt musi być w oryginalnym opakowaniu i nieużywany.</li>
          <li>
            Aby dokonać zwrotu, skontaktuj się z naszym działem obsługi klienta.
          </li>
        </ul>
      </div>
    </div>
  );
};
