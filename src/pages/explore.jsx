import { useState } from "react";
import Modal from "../component/modal";
import ProductCard from "../component/productCard";
import SecondaryModal from "../component/seconday_modal";
import ExploreChangeSecondPicture from "../feature/explore/explore_change_second_picture";
import { useStore } from "../hook/use_Store";
import { useAuth } from "../hook/use_auth";
export default function Explore() {
  const {
    allCategory,
    hdl_explore_content,
    setExplore,
    exploreContent,
    allProduct,
    setExplorecontent
  } = useStore();

  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className=" max-w-[1024px] mx-auto">
      <SecondaryModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ExploreChangeSecondPicture close={() => setIsOpen(false)} />
      </SecondaryModal>

      <div className=" bg-gray-300 p-3 flex gap-4 justify-center">
        <div className=" flex  gap-4">
          <div
            className="p-0.5 flex text-center justify-center rounded-md bg-gray-200 hover:underline hover:cursor-pointer text-gray-600 hover:text-gray-950 text-xs"
            onClick={() => {
          
              setExplorecontent(null);
            }}
          >
            <h4>all game</h4>
          </div>
          {allCategory.map((el, id) => {
            return (
              <div
                key={id}
                className="p-0.5 flex text-center justify-center rounded-md bg-gray-200 hover:underline hover:cursor-pointer text-gray-600 hover:text-gray-950 text-xs"
                onClick={() => {
                  setExplore(el.id);
                  hdl_explore_content(el.id);
                }}
              >
                <h4>{el.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" bg-red-200 w-full flex flex-col items-center gap-4 py-4 ">
        {exploreContent ? (
          <>
            {exploreContent.length == 0 && <h1>No product of this category</h1>}
            {exploreContent.map((el) => (
              <ProductCard
                setIsOpen={setIsOpen}
                category={el.productCategory}
                id={el.id}
                className={""}
                image={el.secondPicture}
                briefDesc={el.briefDesc}
                title={el.title}
                price={el.price}
              />
            ))}
          </>
        ) :   (
          <>
            {allProduct.map((el) => (
              <ProductCard
                setIsOpen={setIsOpen}
                category={el.productCategory}
                id={el.id}
                className={""}
                image={el.secondPicture}
                briefDesc={el.briefDesc}
                title={el.title}
                price={el.price}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
