export const reducer = (state,action) => {
    if(action.type === 'CLOSE_MODAL'){
        return(
            {
                ...state,
                showModal:false
            }
        )
    }
    if(action.type === 'OPEN_MODAL'){
        return({
            ...state,
            showModal:true
        })
    }
    return state
}