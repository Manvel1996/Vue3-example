<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div class="dialogContent" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>
    
<script>
    import toogleMixins from '../../mixins/toogleMixins.js';

    export default{
        name: "MyDialog",
        mixins: [toogleMixins]
    }    
</script>
    
<style>
    .dialog{
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dialogContent{
        background: white;
        border-radius: 12px;
        min-height: 50px;
        min-width: 250px;
        padding: 20px;
    }
</style>