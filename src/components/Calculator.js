import React from "react";
import { useState, useEffect } from "react";
import { prices } from "../data/Prices";
import CalculatorListSummary from "./CalculatorListSummary";

export default function Calculator() {
  const [products, setProducts] = useState("");
  const [summaryProducts, setSummaryProducts] = useState(0);

  const [orders, setOrders] = useState("");
  const [summaryOrders, setSummaryOrders] = useState(0);

  const [packageValue, setPackageValue] = useState("Choose package");
  const [summaryPackageValue, setSummaryPackageValue] = useState(0);

  const [accountingValue, setAccountingValue] = useState(0);
  const [terminalValue, setTerminalValue] = useState(0);

  const [total, setTotal] = useState(0);

  const handleTotalPrice = () => {
    const sumAll =
      summaryProducts +
      summaryOrders +
      summaryPackageValue +
      accountingValue +
      terminalValue;

    setTotal(sumAll);
  };

  const handleInputs = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const singlePrice = prices[id];
    const totalPrice = value * singlePrice;

    switch (id) {
      case "products":
        setProducts(`${value} * $ ${singlePrice}`);
        setSummaryProducts(totalPrice);
        break;
      case "orders":
        setOrders(`${value} * $ ${singlePrice}`);
        setSummaryOrders(totalPrice);
        break;
      default:
        return;
    }
  };

  const handleSelect = (e) => {
    const optionsList = document.querySelector("#select");
    optionsList.classList.toggle("fieldVisible");

    if (e.target.dataset.value !== undefined) {
      setPackageValue(e.target.innerText);
      setSummaryPackageValue(prices.package[e.target.dataset.value]);
    }
  };

  useEffect(() => {
    handleTotalPrice();
  }, [
    summaryProducts,
    summaryOrders,
    summaryPackageValue,
    accountingValue,
    terminalValue,
  ]);

  return (
    <section className="container-fluid custom-section-calculator px-2 py-4 p-sm-5">
      <h2 className="display-4 text-center fw-normal py-lg-4">
        Calculate how much you'll pay
      </h2>
      <div className="p-3 d-lg-flex justify-content-lg-evenly">
        <div className="d-flex flex-column custom-container-form-calc">
          <input
            id="products"
            type="number"
            onChange={handleInputs}
            placeholder="Products quanitity"
            className="custom-calculator-input my-3 fw-light"
          ></input>
          <input
            id="orders"
            type="number"
            onChange={handleInputs}
            placeholder="Estimated orders in month"
            className="custom-calculator-input my-3 fw-light"
          ></input>
          <div>
            <div onClick={handleSelect}>
              <div
                id="select"
                className="custom-calculator-input custom-select d-flex align-items-center justify-content-between my-3"
              >
                {packageValue}
              </div>
              <ul
                id="optionsList"
                className="bg-white py-2 px-3 mt-3 custom-select-dropdown"
              >
                <li data-value="basic" className="fw-light py-1">
                  Basic
                </li>
                <li data-value="basicPlus" className="fw-light py-1">
                  BasicPlus
                </li>
                <li data-value="professional" className="fw-light py-1">
                  Professional
                </li>
                <li data-value="premium" className="fw-light py-1">
                  Premium
                </li>
                <li data-value="premiumPlus" className="fw-light py-1">
                  PremiumPlus
                </li>
              </ul>
            </div>
          </div>

          <input
            id="accounting"
            onChange={(e) =>
              e.target.checked
                ? setAccountingValue(prices.accounting)
                : setAccountingValue(0)
            }
            type="checkbox"
          ></input>
          <label
            htmlFor="accounting"
            className="custom-form-checkbox custom-calculator-checkbox d-flex align-items-center mb-3"
          >
            <span className="ms-3">Accounting</span>
          </label>
          <input
            id="terminal"
            onChange={(e) =>
              e.target.checked
                ? setTerminalValue(prices.terminal)
                : setTerminalValue(0)
            }
            type="checkbox"
          ></input>
          <label
            htmlFor="terminal"
            className="custom-form-checkbox custom-calculator-checkbox d-flex align-items-center mb-3"
          >
            <span className="ms-3">Rental of a payment terminal</span>
          </label>
        </div>
        <CalculatorListSummary
          products={products}
          summaryProducts={summaryProducts}
          orders={orders}
          summaryOrders={summaryOrders}
          packageValue={packageValue}
          summaryPackageValue={summaryPackageValue}
          accountingValue={accountingValue}
          terminalValue={terminalValue}
          total={total}
        />
      </div>
    </section>
  );
}
