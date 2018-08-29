import moment from 'moment'
const initialState = {

    clicked:false,
    image:null,
    nuggetType:"",
    currentcomponent:null,
    Eventadded:null

}

const reducer = (state = initialState, action) => {
    console.log(action.value)
    if (action.type == 'dbClicked') {
        return {
            ...state,
            clicked:action.value
        }
    }
    else if (action.type === 'ChooseImage') {
        return {
            ...state,
            image: action.value

        }
    }
    else if(action.type=="NuggetType")
    {
        return{
            ...state,
            nuggetType:action.value
        }
    }
    else if(action.type=="ChangeCurrentCmp")
    {
        return{
            ...state,
            currentcomponent:action.value
        }
    }
    else if (action.type=="addevent")
    {
        return{
            ...state,
            Eventadded:action.value
        }
    }
    
        return state;
}

export default reducer;