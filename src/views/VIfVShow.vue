<script>
export default {
    data() {
        return {
            car: false,
            house: false,
            car2:false,
            house2:false,
            car3:"沒車",
            house3:"沒房",
            car4: false,
            house4: false,
        }
    }
}
</script>

<template>
    <h2>v-if</h2>
    <p>小明</p>
    <div>
        <input type="checkbox" name="" id="car" value="true" v-model="car">
        <label for="car">有車</label>
    </div>
    <div>
        <input type="checkbox" name="" id="house" value="true" v-model="house">
        <label for="house">有房</label>
    </div>

    <h2 v-if="car">小明有車</h2>
    <h2 v-if="house">小明有房</h2>

    <br>
    <!-- v-if / v-else -->
    <h2>v-if / v-else</h2>
    <p>小明</p>
    <div>
        <input type="checkbox" name="" id="car2" value="true" v-model="car2">
        <label for="car2">有車</label>
    </div>
    <div>
        <input type="checkbox" name="" id="house2" value="true" v-model="house2">
        <label for="house2">有房</label>
    </div>
    <div>
        <h2 v-if="car2">小明有車</h2>
        <p v-else>小明沒車</p>
        <h2 v-if="house2">小明有房</h2>
        <p v-else>小明沒房</p>
    </div>

    <br>
    <!-- v-if / v-else-if / v-else -->
    <h2>v-if / v-else if / v-else</h2>

    <p>小明</p>
    <div>
        <select v-model="car3" name="car3" id="">
            <option  value="沒車">沒車</option>
            <option value="toyota">toyota</option>
            <option value="benz">benz</option>
        </select>
    </div>
    <div>
        <select v-model="house3" name="house3" id="">
            <option value="沒房">沒房</option>
            <option value="透天">透天</option>
            <option value="豪宅">豪宅</option>
        </select>
    </div>
    <div>
        <h2 v-if="car3 == '沒車'">小明沒車</h2>
        <p v-else-if="car3 == 'toyota'">小明有toyota</p>
        <p v-else>小明開好車</p>

        <h2 v-if="house3 == '沒房'">小明沒房</h2>
        <p v-else-if="house3 == '透天'">小明有透天</p>
        <p v-else>小明住好房</p>
    </div>
    <br>

    <!-- v-show -->

    <h2>v-show</h2>
    <p>小明</p>
    <div>
        <input type="checkbox" name="" id="car4" value="true" v-model="car4">
        <label for="car4">有車</label>
    </div>
    <div>
        <input type="checkbox" name="" id="house4" value="true" v-model="house4">
        <label for="house4">有房</label>
    </div>

    <h2 v-show="car4">小明有車</h2>
    <h2 v-show="house4">小明有房</h2>

</template>

<style></style>