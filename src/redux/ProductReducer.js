const ProductReducer = (state, action )=>{

switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      const sliderFilter = action.payload.filter((p)=>{return p.slider === true});

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
        sliderProducts: sliderFilter,
      };

    //   case "Set_Slider_Data":
    //     const SliderData = action.payload.filter((curElem) => {
    //       return curElem.slider === true;
    //     });
  
    //     return {
    //       ...state,
    //       isLoading: false,
    //       products: action.payload,
    //       SliderProducts: SliderData,
    //     };

    case "SET_SINGLE_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };
  
      case "SET_SINGLE_PRODUCT":
        return {
          ...state,
          isSingleLoading: false,
          singleProduct: action.payload,
        };
  
      case "SET_SINGLE_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isError: true,
        };
    

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;