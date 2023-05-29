export const logger = (store) => (next) => (action) => {

    console.log("🚀 -----------------------------🚀");
    console.log("🚀 ~ logger ~ action:", action);
    console.log("🚀 -----------------------------🚀");

    next(action)
}

export const featuring = store => next => action => {
    const featured = [{ name: 'luidev' }, ...action.action.payload];
    const updatedAction = {
        ...action,
        action: { ...action.action, payload: featured }
    }

    next(updatedAction)
}

export const prefix = (store) => (next) => (actionInfo) => {
    const prefixed = actionInfo.action.payload.map(pokemon => {
        return {
            ...pokemon,
            name: "Pokemon: " + pokemon.name
        }
    })

    const updatedAction = {
        ...actionInfo, action: {
            ...actionInfo.action, payload: prefixed
        }
    }

    next(updatedAction)
}

export const capitalLattering = state => next => action => {
    const capitalLetter = action.action.payload.map((pokemon, i) => ({
        ...action.action,
        name: `${i + 1}. ${pokemon.name.toUpperCase()}`
    }))

    const updateAction = {
        ...action,
        action: {
            ...action.action,
            payload: capitalLetter
        }
    }
    next(updateAction)
}