import StoreSidebarContent from "../feature/storefront/store_sidebar_content";
import StorefrontMainContent from "../feature/storefront/storefront_main_content";

export default function StoreFront() {
  return (
    
      <div className="flex"> 
        <div className=" w-[15vw] h-[100vh] bg-gray-300 flex flex-col p-4">
        < StoreSidebarContent />

        </div> 
        <div className=" w-[90vw] bg-gray-200 flex  flex-col items-center justify-center p-8">
          <StorefrontMainContent/>
        </div>
      </div>
    
  );
}
