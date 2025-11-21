"use server";


export const submitProduct = async(prevState, formData) => {
  const error = {};

    const productName = formData.get("productname");
    const productPrice = formData.get("productprice");

    if (!productName){
        error.productName = "Feltet skal udfyldes";
    } else if (productName && productName.length < 5) {
        error.productName = "Feltet skal være mindst 5 tegn langt!";
      } 

      if (!productPrice){
        error.productPrice = "Feltet skal udfyldes";
    } else if (isNaN(Number(productPrice))) {
        error.productPrice = "Feltet skal indholde en pris!";
      } 


      if(Object.keys(error).length > 0 ){
    return {error, productName, productPrice};
    }

    return {succes: true};
};