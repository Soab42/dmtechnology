import { auth } from "@/auth";
import { getDateData } from "@/lib/crud";
import Image from "next/image";
import { AiOutlineClockCircle, AiOutlineGlobal } from "react-icons/ai";
import LogoutButton from "../auth/LogoutButton";

export default async function NavBar() {
  const session = await auth();
  const workingDate = await getDateData();

  return (
    <nav className="text-[.6rem] flex justify-between px-10 p-2 items-center shadow-md capitalize">
      <div>
        <Image src="/dmlogo.png" alt="DM Technology" width={120} height={120} />
      </div>
      <div className="flex gap-10 items-center">
        {session?.user.role == "user" && (
          <div className="flex gap-2 text-md">
            <span className="text-blue-500 font-extrabold">
              <AiOutlineClockCircle className="text-xl" />
            </span>{" "}
            {dayJson[new Date(workingDate.data).getDay()]}, {workingDate.data}
          </div>
        )}
        <div>
          {session?.user ? (
            <div className="flex gap-1 items-center">
              <AiOutlineGlobal className="text-xl text-blue-600" />
              Branch:
              <p className="tracking-wider">{session?.user.name}</p>
              <LogoutButton />
            </div>
          ) : (
            <button className="btn">Login</button>
          )}
        </div>
      </div>
    </nav>
  );
}

const dayJson = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
