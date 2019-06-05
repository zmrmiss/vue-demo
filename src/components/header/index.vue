<template>
    <div class="m-header">
         <el-row>
            <search-bar />
        </el-row>
        <el-row>
            <top-bar />
        </el-row>
    </div>

</template>

<script>
import topBar from './searchBar';
import searchBar from './topBar'
export default {
    components:{
        searchBar,
        topBar
    }
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>