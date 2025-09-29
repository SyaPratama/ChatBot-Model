import Image from "next/image";

export function NavFooter() {
  return (
    <div className="cursor-pointer flex items-center justify-center gap-2.5 px-2 mb-2.5 mx-2 py-1.5 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:m-1 group-data-[collapsible=icon]:my-3 hover:bg-black/20 rounded-md">
      <div className="group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:py-2">
        <Image
          src="/images/default.jpg"
          alt="Default Image"
          className="object-cover rounded-full group-data-[collapsible=icon]:w-6 group-data-[collapsible=icon]:h-6"
          width={40}
          height={40}
        />
      </div>
      <div className="w-full group-data-[collapsible=icon]:hidden">
        <span className="text-[12px] text-gray-300">Account</span>
        <h2 className="text-[13px]">Rasya Pratama</h2>
      </div>
    </div>
  );
}
