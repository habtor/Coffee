import BeansStore from "../components/shop/beans.jsx";
import SearchBar from "../components/shop/searchBar.jsx";

function Shop() {
  return (
    <div className="relative sm:w-full w-[306px] max-w-[1200px] m-auto mt-10">
      <SearchBar />
      <BeansStore />
    </div>
  );
}

export default Shop;
