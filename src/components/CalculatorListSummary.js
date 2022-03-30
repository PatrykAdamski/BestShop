import React from "react";

export default function CalculatorListSummary({
  products,
  summaryProducts,
  orders,
  summaryOrders,
  packageValue,
  summaryPackageValue,
  accountingValue,
  terminalValue,
  total,
}) {
  return (
    <div className="d-flex flex-column custom-container-form-calc">
      {summaryProducts !== 0 ? (
        <div
          data-id="products"
          className="d-flex justify-content-between align-items-center custom-summary-block py-1 px-3 mb-3"
        >
          <span className="text-white">Products</span>
          <span className="text-white">{products}</span>
          <span className="fw-bold text-white fs-4">$ {summaryProducts}</span>
        </div>
      ) : null}
      {summaryOrders !== 0 ? (
        <div
          data-id="orders"
          className="d-flex justify-content-between align-items-center custom-summary-block py-1 px-3 mb-3"
        >
          <span className="text-white">Orders</span>
          <span className="text-white">{orders}</span>
          <span className="fw-bold text-white fs-4">$ {summaryOrders}</span>
        </div>
      ) : null}
      {packageValue !== "Choose package" ? (
        <div
          data-id="package"
          className="d-flex justify-content-between align-items-center custom-summary-block py-1 px-3 mb-3"
        >
          <span className="text-white">Package</span>
          <span className="text-white">{packageValue}</span>
          <span className="fw-bold text-white fs-4">
            $ {summaryPackageValue}
          </span>
        </div>
      ) : null}
      {accountingValue !== 0 ? (
        <div
          data-id="accounting"
          className="d-flex justify-content-between align-items-center custom-summary-block py-1 px-3 mb-3"
        >
          <span className="text-white">Accounting</span>
          <span className="fw-bold text-white fs-4">$ {accountingValue}</span>
        </div>
      ) : null}
      {terminalValue !== 0 ? (
        <div
          data-id="terminal"
          className="d-flex justify-content-between align-items-center custom-summary-block py-1 px-3 mb-3"
        >
          <span className="text-white">Terminal</span>
          <span className="fw-bold text-white fs-4">$ {terminalValue}</span>
        </div>
      ) : null}
      {total !== 0 || packageValue !== "Choose package" ? (
        <div
          data-id="total"
          className=" align-self-end d-flex justify-content-between align-items-center custom-total-block py-1 px-3 my-4"
        >
          <span className="text-white">Total</span>
          <span className="text-white fs-2">$ {total}</span>
        </div>
      ) : null}
    </div>
  );
}
