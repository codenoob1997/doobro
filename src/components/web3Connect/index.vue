    <template>
  <el-dropdown
    trigger="click"
    class="international"
  >
    <div class="button"  @click="handleConnect">
        {{store.getters.address}}
    </div>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command='disconnect'>
          Dissconnect
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { computed,reactive,ref } from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {connectWallet, mint} from '@/utils/connect'
import { ethers } from 'ethers'
const router = useRouter()
const store = useStore()
let isConnected = false;
var currentAcc = null;
let provider;
const data = reactive({
    text : "Connect"
})
ethereum.request({method:"eth_accounts"})
        .then(handleAccountChanged)
        .catch((err)=>{
          console.log(err)
        })
ethereum.on("accountsChanged",handleAccountChanged)
function handleAccountChanged(accounts){
  if(accounts.length === 0 ){
    data.text = "Connect"
    store.commit("web3/setAddress",null)
  }else{
    currentAcc = accounts[0]
    data.text = currentAcc
    store.commit("web3/setAddress",currentAcc)
  }
}
function handleConnect(){
  connectWallet()
}
ethereum.on("accountsChanged",async(accounts)=>{
    data.text = accounts[0]
    store.commit("web3/setAddress",accounts[0])
})
ethereum.on("chainChanged",async(chainId)=>{
  //tbd
  store.commit("web3/setChainId",chainId)
})




</script>

<style lang="scss" scoped>
  img{
    width: 162px;
    height: 36px;
  }
  .button{
    width: 50px;
    height: 50px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  

</style>