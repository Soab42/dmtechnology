import PrintWrapper from "@/app/_component/PrintWrapper";
import { getAccountsName } from "@/services/data";
import { formatDate } from "@/utils/formatDate";
import { numberToWords } from "@/utils/numToWord";
import CompanyHeader from "../../_component/CompanyHeader";
import FootSignatureTable from "../../_component/FootSignatureTable";
import { calculateBalance } from "@/utils/calculateBalance";
export default function DataTable({ vouchers = [], branch, date }) {
  const openingBalance = 0;
  const { updatedTransactions, totalReceipt, totalPayment, balance } =
    calculateBalance(openingBalance, vouchers);

  return (
    <PrintWrapper>
      <div>
        <CompanyHeader />
        <h4 className={"flex justify-center text-xs font-black mt-2"}>
          <u>Cash & Bank Book Report</u>
        </h4>
        <table className={"w-full capitalize"}>
          <tr className="rth">
            <td nowrap="nowrap" align="left" className="text-left">
              <strong>Reporting Date : </strong>
              {date}
            </td>
            <td nowrap="nowrap" align="right" className="text-right">
              <strong>Print Date : </strong>{" "}
              {new Date().toLocaleDateString("en-CA")}
            </td>
          </tr>
          <tr className="rth">
            <td nowrap="nowrap" align="left" className="text-left">
              <strong>Branch : </strong>
              {branch ? branch : "All"}
            </td>
            <td nowrap="nowrap" align="right" className="text-right">
              <strong>Cash Opening : </strong>
              {openingBalance}
            </td>
          </tr>
        </table>
        <table className={"w-full"}>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Voucher Code</th>
              <th>Particular</th>
              <th>Receipt (Debit)</th>
              <th>Payment (Credit)</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td align="center"></td>
              <td align="center">&nbsp;</td>
              <td align="center">&nbsp;</td>
              <td align="left">Opening Balance &nbsp;</td>
              <td align="right">0</td>
              <td align="right">0</td>
              <td align="right">{openingBalance}</td>
            </tr>
            {updatedTransactions.map((voucher, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{formatDate(voucher.date)}</td>
                  <td className="min-w-fit">{voucher.voucherCode}</td>
                  <td className={""}>
                    {voucher.voucherType == "receipt"
                      ? getAccountsName(voucher.creditAccounts)
                      : getAccountsName(voucher.debitAccounts)}
                  </td>
                  <td>
                    {voucher.voucherType == "receipt" ? voucher.amount : "-"}
                  </td>
                  <td>
                    {voucher.voucherType == "payment" ? voucher.amount : "-"}
                  </td>
                  <td>{voucher.balance}</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="4" style={{ textAlign: "right" }}>
                <strong>Total</strong>
              </td>
              <td>
                <strong>{totalReceipt}</strong>
              </td>
              <td>
                <strong>{totalPayment}</strong>
              </td>
              <td>
                <strong>{balance}</strong>
              </td>
            </tr>
            <tr className={"font-black text-md  p-4 capitalize"}>
              <td colSpan="7" className={"text-left p-2"}>
                In Words : <span>{numberToWords(balance)} only</span>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <FootSignatureTable />
      </div>
    </PrintWrapper>
  );
}
