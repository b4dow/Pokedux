export const logger = (store) => (next) => (action) => {

    console.log(action)
    next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    const fetured = [{ name: 'eddie' }, ...actionInfo.action.payload];
    const updatedActionInfo = { ...actionInfo, action:{...actionInfo.action, payload: fetured} }
    next(updatedActionInfo)
}