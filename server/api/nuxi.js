export default defineEventHandler(async (event) => {

    //const { Name } = getQuery(event)

    //const { age } = await readBody(event)
    
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_B1iPJFT87vTANCyktIMV1GGMypoEUKrds3tAwren')

    return data

})