const getters = {
    address : state => state.web3.address,
    chainId : state => state.web3.chainId,
    networkId : state => state.web3.networkId,
    showList: state => state.gallery.showList
}
export default getters