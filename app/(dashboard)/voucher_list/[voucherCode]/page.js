import { getVoucherDataById } from "@/lib/crud";
import DataTable from "./DataTable";
import BackButton from "@/app/(dashboard)/_component/BackButton";
export default async function SingleVoucher({ params: { voucherCode } }) {
  // Helper function to format ledger entries
  const data = (await getVoucherDataById(voucherCode)).voucherData;
  const type = data[0].voucherType;

  return (
    <div>
      <BackButton />
      <DataTable data={data} type={type} voucherCode={voucherCode} />
    </div>
  );
}
