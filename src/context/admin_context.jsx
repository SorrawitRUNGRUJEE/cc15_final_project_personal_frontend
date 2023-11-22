import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {useAuth} from "../hook/use_auth"

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [input, setInput] = useState({});
  const [isOpen, setIsOpen] = useState("");
  const [allAdmin, setAllAdmin] = useState(null);
  const [allProduct, setAllProduct] = useState(null);
  const [allCategory, setAllCategory] = useState(null);
  const [file,setFile] = useState([])
  const [allPicture,setAllPicture] =  useState(null)
  const {setLoading} = useAuth()


  const validateExist = (stateArrayOfAll, input, categoryState,productState) => {
    console.log(input)
    if(input.categoryId){
      const validate = categoryState.filter(el => {
       return el.id == input.categoryId
      } )
    
      if(validate.length > 0){
        if(!input.categoryName) 
        {
        alert("no catgegory name detected from the input")
        return false}
        const validate = categoryState.filter( el => el.name == input.categoryName)
        if(validate.length > 0) return true
        alert("category name not found")
        return false
      }
      alert("category id not found")  
      return false
    }
    if (input.productId) {
      
      const validate = productState.filter((el) => el.id == input.productId);
      if (validate.length > 0) {
        
        if (!input.productTitle ) {
          
          alert("no product title detected fron the input");
          return false;
        }
          const validate = productState.filter( el => el.title == input.productTitle );
          if (validate.length > 0) return true;
          
          alert(" product title not found");
          return false;
        }
    
      alert(" product id not found");
    return false;
    }

    const validate = stateArrayOfAll.filter((el) => el.id == input.id);

    if (validate.length > 0) {
      if (!input.name && !input.title && !input.username) {
        alert("no title or name detected fron the input");
        return false;
      }

      if (input.name) {
        const validate = stateArrayOfAll.filter((el) => el.name == input.name);

        if (validate.length > 0) {
          return true;
        }
        alert("name not found");
        return;
      }
      if (input.title) {
        
        const validate = stateArrayOfAll.filter(
          (el) => el.title == input.title
        );
        if (validate.length > 0) {
          return true;
        }
        alert("title not found");
        return false;
      }
      if (input.username) {
        
        const validate = stateArrayOfAll.filter(
          (el) => el.username == input.username
        );
        if (validate.length > 0) {
          return true;
        }
        alert("username not found");
        return false;
      }
    }

    
    alert("id not found");
    return false;
  };
  const validateMatching = (stateArrayOfAll, input,categoryState,productState) => {
    
    
    
    if(input.productId){
      for(let i of productState){
        if(i.id == input.productId){
          if(i.title == input.productTitle) return true
          alert("id and product's title do not match")
          return false
        }
      }
    }
    if(input.categoryId){
      
      for(let i of categoryState){
        
        if(i.id == input.categoryId){
          
          if(i.name == input.categoryName) return true
          
          alert("id and category name does not match")
          return false
        }
      }
    }
      for(let i of stateArrayOfAll){
        if(input.id == i.id){
          if (input.username) {
            console.log('here')
            if (input.username == i.username) {
              return true;
            }
          }
          if (input.title) {
            if (i.title == input.title) {
              return true;
            }
          }
          if (input.name) {
            if (input.name == i.name) {
              return true;
            }
          }
         
        }
        
      }   
      alert("id and username/name/title does not match");
      return false
    
  };

  useEffect(() => {
    axios.get("/admin").then((res) => setAllAdmin(res.data.result));
    axios.get("/admin/product").then((res) => setAllProduct(res.data.result));
    axios.get("/admin/category").then((res) => setAllCategory(res.data.result));
    axios.get('/admin/product/picture').then(res => setAllPicture(res.data.result))
    setInput({})
  }, []);

  const hdl_input = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const add_admin = async (input) => {
    await axios
      .post("/admin", input)
      .then((res) => {
        setAllAdmin((prev) => {
          prev.push(res.data.result);
          const newAlladmin = [...prev];

          return newAlladmin;
        });
        setIsOpen("");
        alert(res.data.msg);
        setInput({});
      })
      .catch((error) => {
        alert(error.response.data.msg);
        throw error;
      });
  };

  const delete_admin = async (input) => {
    if (!validateExist(allAdmin, input)) return;
    if (!validateMatching(allAdmin, input)) return;
    
          axios
            .delete(`/admin/${input.id}/${input.username}`)
            .then((res) => {
              alert(res.data.msg);
              setIsOpen("");
              setInput({});

              setAllAdmin((prev) => {
                const deletedAdmin = prev.filter(
                  (el) => el.id != res.data.result.id
                );
                return deletedAdmin;
              });
            })
            .catch((error) => {
              alert(error.response.data.msg);
            });
          
          }

  const add_product = async (input) => {
    await axios
      .post("/admin/product", input)
      .then((res) => {
        setAllProduct((prev) => {
          prev.push(res.data.result);
          const newAllProduct = [...prev];

          return newAllProduct;
        });
        setIsOpen("");
        alert(res.data.msg);
        setInput({});
      })
      .catch((error) => {
        alert(error.response.data.msg);
      })
      .finally(() => {});
  };

  const update_product = async (input) => {
    if (!validateExist(allProduct, input)) return;
    if (!validateMatching(allProduct, input)) return;

    await axios
      .patch("/admin/product", input)
      .then((res) => {
        setAllProduct((prev) => {
          const indexOfOldProduct = prev.findIndex(
            (el) => el.id == res.data.result.id
          );
          prev.splice(indexOfOldProduct, 1, res.data.result);
          const newAllPorduct = [...prev];
          return newAllPorduct;
        });
        alert(res.data.msg);
        setInput({});
        setIsOpen("");
      })
      .catch((error) => {
        alert(error.response.data.msg);
      });
  };

  const delete_product = async (input) => {
    if (!validateExist(allProduct, input)) return;
    if (!validateMatching(allProduct, input)) return;
    await axios
      .delete(`/admin/product/${input.id}/${input.title}`)
      .then((res) => {
        setAllProduct((prev) => {
          const newAllProduct = prev.filter(
            (el) => el.id != res.data.result.id
          );
          return newAllProduct;
        });
        alert(res.data.msg);
        setInput({});
        setIsOpen("");
      })
      .catch((error) => {
        alert(error.response.data.msg);
      });
  };

  const add_category = async (input) => {
    await axios
      .post("/admin/category", input)
      .then((res) => {
        setAllCategory((prev) => {
          prev.push(res.data.result);
          const newAllCategory = [...prev];

          return newAllCategory;
        });
        setIsOpen("");
        alert(res.data.msg);
        setInput({});
      })
      .catch((error) => {
        alert(error.response.data.msg);
        throw error;
      });
  };

  const update_category = async (input) => {
    if (!validateExist(allCategory, input)) return;
    if (!validateMatching(allCategory, input)) return;
    await axios
      .patch("/admin/category", input)
      .then((res) => {
        setAllCategory((prev) => {
          const indexOfoldCategory = prev.findIndex(
            (el) => el.id == res.data.category.id
          );
          prev.splice(indexOfoldCategory, 1, res.data.category);
          const newAllCategory = [...prev];
          return newAllCategory;
        });

        setAllProduct(res.data.product);
        alert(res.data.msg);
        setInput({});
        setIsOpen("");
      })
      .catch((error) => {
        alert(error.response.data.msg);
      });
  };

  const delete_category = async (input) => {
    if (!validateExist(allCategory, input)) return;
    if (!validateMatching(allCategory, input)) return;
    await axios
      .delete(`/admin/category/${input.id}/${input.name}`)
      .then((res) => {
        setAllCategory((prev) => {
          const newAllCategory = prev.filter(
            (el) => el.id != res.data.result.id
          );
          return newAllCategory;
        });
        alert(res.data.msg);
        setInput({});
        setIsOpen("");
      })
      .catch((error) => {
        alert(error.response.data.msg);
      });
  };

  const add_product_category = async (input) => {
    if (!validateExist(allCategory, input,allCategory,allProduct)) return
    if(!validateMatching(allCategory,input,allCategory,allProduct) ) return
    await axios.post('/admin/product/category',input)
    .then((res) => {
      setAllProduct(res.data.result)
      setIsOpen("");
      alert(res.data.msg);
      setInput({});
    })
    .catch((error) => {
      alert(error.response.data.msg);
      throw error;
    });
  };


  const delete_product_category = async (input) =>{
    if( !input.productId && !input.productTitle && !input.categoryId && !input.categoryName) return alert('Blank space is not allowed')
    if (!validateExist(allCategory, input,allCategory,allProduct)) return
    if(!validateMatching(allCategory,input,allCategory,allProduct) ) return

    await axios.delete(`/admin/product/category/${input.productId}/${input.productTitle}/${input.categoryId}/${input.categoryName}`).then(res=>{
      setAllProduct(res.data.product)
      setIsOpen("");
      alert(res.data.msg);
      setInput({});
    }).catch( error =>{
      alert(error.response.data.msg)
    })


  }


  const add_product_photo = async (input) =>{
    console.log(file)
    if(!validateExist(allProduct,input,allCategory,allProduct)) return
    if(!validateMatching(allProduct,input,allCategory,allProduct)) return
    const formData = new FormData
    for(let i of file){
      formData.append('productPicture',i)
    }
    setLoading(true)
    await axios.post(`/admin/product/picture/${input.productId}/${input.productTitle}`,formData).then(res=>{
      setAllPicture(res.data.result)
      setIsOpen("");
      alert(res.data.msg);
      setInput({});
      setFile([])

    }).catch( error => alert(error.response.data.msg)).finally(()=>{
      setLoading(false)
    })

  }

  const delete_product_photo = async (input) =>{
    if(!validateExist(allProduct,input,allCategory,allProduct)) return
    if(!validateMatching(allProduct,input,allCategory,allProduct)) return
    
    await axios.delete(`/admin/product/picture/${input.pictureId}/${input.id}/${input.title}`).then(res=>{
      setAllPicture(res.data.result)
      setIsOpen("");
      alert(res.data.msg);
      setInput({});
      setFile([])

    }).catch( error =>{
      console.log(error.response)
    })

  }
  
  const hdl_product_photo = (productPhoto) =>{
  setFile(prev=>{
    prev.push(productPhoto)
    const newPhoto = [...prev]
    return newPhoto
  })

  }

  return (
    <AdminContext.Provider
      value={{
        hdl_input,
        input,
        setInput,
        isOpen,
        setIsOpen,
        allAdmin,
        add_admin,
        delete_admin,
        allProduct,
        delete_product,
        update_product,
        add_product,
        allCategory,
        add_category,
        update_category,
        delete_category,
        add_product_category,
        delete_product_category,
        allPicture,
        add_product_photo,
        delete_product_photo,
        file,
        setFile,
        hdl_product_photo,
        
        
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
