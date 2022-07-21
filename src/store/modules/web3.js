export default {
    namespaced:true,
    state:()=>({
        provider :'',
        address:'',
        chainId:null,
        networkId:null,
    }),
    mutations:{
    setNetworkId(state,networkId){
        state.networkId = networkId
    },
    setChainId(state,chainId){
        state.chainId = chainId
    },
    setAddress(state,addr){
        state.address = addr
    }

    },
    actions:{

    }
}
