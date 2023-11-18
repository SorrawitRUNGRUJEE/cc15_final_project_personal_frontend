export default function Loading(){
console.log("loading")
    return (
        <>
        <div className=" fixed inset-0 bg-black opacity-30 z-40"> </div>  
        <div className=" fixed inset-0 z-50">
            <div className=" flex items-center justify-center min-h-full">
                <h1>Loading...</h1>
                
                  
            </div>
         </div>
        </>

    )
}