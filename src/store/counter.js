export default{
    namespaced: true,
    state: {
        number: 0,
    },
    
    getters: {
        number: (state) => {
            return state.number;
        },
        set: (value) => {
            state.number = value;
        }
    },
    
    mutations: {
        increment(state){
            state.number++
        },
        reset(state){
            state.number = 0
        },
        set(state, value){
            state.number = value
            console.log(value)
        }
    }
}