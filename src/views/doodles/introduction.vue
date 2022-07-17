<template>
<div class="main">
    <div class="left pics">
            <img src="@/assets/images/doodle_grid.png" id="grid" alt="">
    </div>
    <div class="right-text">
        <img src="@/assets/images/doodles-text-color.png" id="logo" alt="">
    <tbody class="text">
    Doodles是由 Burnt Toast 设计的数百个令人兴奋的视觉特征组成的 10,000 个 NFT（非同质化货币）的集合。 手绘涂鸦包括骷髅、猫、外星人、猿和Mascot。 Doodles 系列还包括数十种罕见的头像、服装和艺术家调色板的配色。
Doodles 宇宙不断扩大，Space Doodles 等新体验仅对持有者开放。 随着宇宙的扩大，肚兜品牌也在不断发展，收藏家可以通过所有权获得最新产品、商品和活动的独家访问权。
拥有 Doodle 可以让您对社区驱动的功能、产品和活动进行投票。 这使得我们的路线图协作由项目创始人和 Doodle 持有者通过 Doodlebank 决定。 Doodlebank 是我们的社区金库，拥有超过 500 万美元，用于资助这些体验。
    </tbody>
    </div>
</div>
</template>

<script setup>
import {} from 'vue'

</script>

<style lang="scss" scoped>
.main{
    overflow: hidden;
    height: 100%;
}
.left{
    float:left;
    width: 50%;
}
.right{
    float:left;
    width: 50%;
}
#grid{
    width: 100%;
    position: relative;
}
#logo{
    display: block;
    position: relative;
    width: 200px;
}

</style>