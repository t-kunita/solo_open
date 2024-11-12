export const getTargetData = async () => {
    try {
        const result = await fetch('/targets') // サーバのエンドポイントを指定
        if (!result.ok) {
            throw new Error(`error! status: ${result.status}`);
        }
        const data = await result.json()
        return data

    } catch (error) {
        console.error('Error:', error)
    }
}
export const getBuildingData = async () => {
    try {
        const result = await fetch('/buildings') // サーバのエンドポイントを指定
        if (!result.ok) {
            throw new Error(`error! status: ${result.status}`);
        }
        const data = await result.json()
        return data

    } catch (error) {
        console.error('Error:', error)
    }
}

export const getFloorData = async () => {
    try {
        const result = await fetch('/floors') // サーバのエンドポイントを指定
        if (!result.ok) {
            throw new Error(`error! status: ${result.status}`);
        }
        const data = await result.json()
        return data

    } catch (error) {
        console.error('Error:', error)
    }
}


