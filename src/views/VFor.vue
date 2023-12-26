<script>
export default{
    data(){
        return{
            paoMian :["康師父","雙響砲","維力","來一客","花雕雞"],
            paoMian2 :[
                {
                    name:"康師父",
                    price:300,
                    na : 1459
                },
                {
                    name:"雙響砲",
                    price:10,
                    na : 1300
                },
                {
                    name:"維力",
                    price:20,
                    na : 1230
                },
                {
                    name:"來一客",
                    price:60,
                    na : 1900
                },
                {
                    name:"花雕雞",
                    price:125,
                    na : 2100
                }
            ]
        }
    }
}
</script>

<template>
    <h2>v-for</h2>
    <ul>
        <li v-for="item in paoMian" :key="item">{{ item }}</li>
    </ul>

    <div class="divbox">
        <div v-for="(item , index) in paoMian2" class="div">
        <p>名次:{{index+1}}</p>
        <p>名稱:{{item.name}}</p>
        <p>價格:{{item.price}}</p>
        <p>鈉含量:{{item.na}}mg</p>
    </div>
    </div>
    
</template>

<style lang="scss">

.divbox{
    display: flex;
    flex-direction: column;
    justify-content: start;
    .div{
    display: flex;
}
}

</style>