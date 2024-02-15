import React, { useState } from "react";
import QRCode from "react-qr-code";
const App = () => {
  const [form, setForm] = useState({
    pa: "example@bank", // Merchant VPA
    pn: "Example Merchant", // Merchant Name
    mc: "123456", // Merchant Code
    tid: "ABC123", // Transaction ID
    tr: "XYZ789", // Transaction Ref ID
    tn: "Payment for Goods", // Transaction Note
    am: "100.00", // Amount
    cu: "INR", // Currency Code
  });
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // let value="Enter number"
  const handleClick = () => {
    setForm(" ");
  };

  const upiData = {
    pa: `${form.pa}`,
    pn: `${form.pn}`,
    mc: `${form.mc}`,
    tid: `${form.tid}`,
    tr: `${form.tr}`,
    tn: `${form.tn}`,
    am: `${form.am}`,
    cu: "INR",
  };

  // Constructing UPI URL
  const upiUrl = `upi://pay?pa=${upiData.pa}&pn=${upiData.pn}&mc=${upiData.mc}&tid=${upiData.tid}&tr=${upiData.tr}&tn=${upiData.tn}&am=${upiData.am}&cu=${upiData.cu}`;

  return (
    <>
      <div className="absolute  h-5/6 w-2/4 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-1/2 rounded-md shadow-xl border border-gray-100 flex justify-around items-center flex-col">
      <h1 className="text-4xl font-serif text-gray-950">Qr Code for Bank Transfer</h1>
        <div className=" w-32 h-32 rounded-md border-2 flex items-center justify-center">
          <QRCode value={upiUrl} size={100} viewBox={`0 0 256 256`} />
        </div>
        <div className=" border-2 rounded-md h-2/4 w-1/2 flex items-center justify-evenly flex-col">
          <input
            className="w-2/3 h-8 rounded-md text-center outline-none border-2 border-gray-400"
            value={form.pa || ""}
            name="pa"
            onChange={handleForm}
            placeholder="Merchant VPA"
            type="text"
          />
          <input
            className="w-2/3 h-8 rounded-md text-center outline-none border-2 border-gray-400"
            value={form.pn || ""}
            name="pn"
            onChange={handleForm}
            placeholder=" Merchant Name"
            type="text"
          />
          <input
            className="w-2/3 h-8 rounded-md text-center outline-none border-2 border-gray-400"
            value={form.mc || ""}
            name="mc"
            onChange={handleForm}
            placeholder="Merchant code"
            type="text"
          />
          <input
            className="w-2/3 h-8 rounded-md text-center outline-none border-2 border-gray-400"
            value={form.tid || ""}
            name="tid"
            onChange={handleForm}
            placeholder="Transction id"
            type="text"
          />
          <input
            className="w-2/3 h-8 rounded-md text-center outline-none border-2 border-gray-400"
            value={form.tr || ""}
            name="tr"
            onChange={handleForm}
            placeholder="Transction Ref id"
            type="text"
          />
          <input
            className="w-2/3 h-8 rounded-md text-center outline-none border-2 border-gray-400"
            value={form.tn || ""}
            name="tn"
            onChange={handleForm}
            placeholder="Transction Note"
            type="text"
          />
          <input
            className="w-2/3 h-8 rounded-md text-center outline-none border-2 border-gray-400"
            value={form.am || ""}
            name="am"
            onChange={handleForm}
            placeholder="Amount"
            type="number"
          />

          
        </div>
        <button
            className="bg-button-color text-white w-36 mt-4 h-10 text-xl font-semibold rounded-md  "
            onClick={handleClick}
          >
            clear
          </button>
      </div>
    </>
  );
};

export default App;
