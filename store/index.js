export const state = () => ({
    countries: [],
})

export const getters = {
    getCountryData(state) {
        return state.countries
    },
    getCountryNames(state) {
        return state.countries.filter(i => i.name)
    },
    getCountryDataFiltered(state) {
        const lithuania = state.countries.find(x => x.name === 'Lithuania')
        return state.countries.filter(i => i.area < lithuania.area)
    }
}

export const mutations = {
    setCountries(state, responseDatafromLine28) {
        state.countries = responseDatafromLine28
    },
}

export const actions = {
    async fetchCountryData({ commit }) {

        const response = await this.$axios.get(
            `https://restcountries.com/v2/all?fields=name,region,area`
        )
        console.log(response.data)
        if (response && response.status === 200) {
            commit('setCountries', response.data)
        }
    },
}
