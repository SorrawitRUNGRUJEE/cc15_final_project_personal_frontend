import Input from "../../component/input"

export default function ExploreChangeSecondPicture(){

    const inp = [
        {id:1, label:"Enter the picture id",name:"id" , placeholder:"type here", type:"text",},
    ]

    return(
        <div>

        {inp.map((el,id)=>{
            return(
                (<div key ={id} className=" flex flex-col gap-2 "> 
                <label >{el.label}</label>
            < Input  name={el.name} className={""} type={el.type} placeholder={el.placeholder}  />
            </div>))
        })}
        </div>

    )
}