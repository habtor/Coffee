import { GoPerson } from "react-icons/go";

function ProfileInfo() {
  return (
    <div className="flex items-end my-4">
      <div className="bg-btnColor h-8 w-8 flex items-center justify-center rounded-lg">
        <GoPerson className=" text-black text-lg" />
      </div>
      <p className="ml-2">Saleh Habtor</p>
    </div>
  );
}

export default ProfileInfo;
