import Orders from "../components/profile/orders";
import ProfileInfo from "../components/profile/profileInfo";
import SearchBar from "../components/profile/searchBar";

function Profile() {
  return (
    <div className="relative sm:w-full w-[306px]  max-w-[1200px] m-auto mt-10">
      <ProfileInfo />
      <SearchBar />
      <Orders />
    </div>
  );
}

export default Profile;
