export default {
    namespaced:true,
    state:()=>({
        provider :''
    }),
    mutations:{
        setProvider(state,provider){
            state.provider = provider
            // setItem(PROVIDER,provider)
        }

    },
    actions:{

    }
}
