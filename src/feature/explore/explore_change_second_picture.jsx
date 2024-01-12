import { useState } from "react";
import { useStore } from "../../hook/use_Store";
import axios from "axios";


export default function ExploreChangeSecondPicture({ close,productId }) {
  const [newPicture, setNewPicture] = useState({});
  const { productPicture,setExplorecontent,allProduct,exploreContent,setAllProduct} = useStore();
  
  const hdl_submit = (e) => {

    e.preventDefault();
    axios.post(`/store/picture/second/${newPicture.productId}/${newPicture.pictureId}`).then(res=>{
    if(exploreContent){
        setExplorecontent(prev=>{
            let foundIndex = prev.findIndex(el => el.id == res.data.result.id )
            prev.splice(foundIndex,1,res.data.result)
            let newObj = [...prev]
            for(let i = 0; i < newObj.length; i++){
                for(let j = 0; j < allProduct.length; j++ ){
                    if(newObj[i].id == allProduct[j].id){
                        let newContent = {...allProduct[j],...newObj[i]}
                        newObj[i] = newContent
                    }

                }
            }
            return newObj
        })
    }
    setAllProduct(prev=>{
        let newObj = [...prev]
        for(let i = 0; i < newObj.length; i++){
            if(newObj[i].id == res.data.result.id){
                let newContent = {...newObj[i],...res.data.result}
                newObj[i] = newContent
            }
        }
        return newObj
    })
        close()
    })
  };

  return (
    <form onSubmit={hdl_submit} className=" flex flex-col items-center">
      <label>Choose new picture</label>
      {productPicture.map((el) => {
        return (
          <div onClick={()=> setNewPicture(prev=>{
            let target = {productId:el.productId,pictureId:el.id}

            let obj = {...prev,...target}

            return obj

          })}>
            <label>id:{el.id}</label>
            <div className=" w-[8rem] h-[6rem]">
              <img src={el.picture} className=" w-full h-full" />
            </div>
          </div>
        );
      })}
    <h1>{`you have selected image id ${newPicture.pictureId}`}</h1>
      <div className=" flex gap-4">
        <button>confirm</button>
        <button type="button">cancel</button>
      </div>
    </form>
  );
}
