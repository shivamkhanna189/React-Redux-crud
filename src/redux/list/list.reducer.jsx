

const INTIAL_STATE = {
    listingData : []
}

const listReducer = (state = INTIAL_STATE, action)=>{
    switch(action.type){
        case 'AddItems':{
             return {...state , listingData : [...state.listingData , action.payload]}
        }
        case 'DeleteItems' :{
                let listingData = [...state.listingData]
                listingData.splice(action.payload,1)
                return {...state , listingData : listingData}
        }

        case 'EditItems' :{
            let listingData = [...state.listingData] ;
            listingData[action.payload.index] = action.payload.data ; 
            return {...state , listingData : listingData}
        }

        default :
            return state ; 
    }
}

export default listReducer ;