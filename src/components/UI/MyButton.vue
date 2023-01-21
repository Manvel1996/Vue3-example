<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
    
<script >
    export default{
        name : 'MyButton'
    }
</script>
    
<style>
    .btn{
        border: 1px solid var(--myColor);
        padding: 10px 15px;
        background: none;
        color: var(--myColor);
        cursor: pointer;
    }
</style>