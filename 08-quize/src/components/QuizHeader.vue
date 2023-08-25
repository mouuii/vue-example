<script setup>
import { defineProps } from 'vue';

const {questionStatus,percentage} = defineProps(['questionStatus','percentage'])
</script>

<template>
<header>
    <h4>questions {{questionStatus}}</h4>
    <div class="bar">
        <div class="completion" :style="{width:percentage}">
        </div>
    </div>
</header>
</template>


<style scoped>
    header{
        margin-top:30px;
    }
    header h4 {
        font-size:  30px;
    }

    .bar {
        width:300px;
        height:50px;
        border: 3px solid crimson;
    }

    .completion{
        height: 100%;
        width: 0%;
        background-color: blue;
    }
</style>