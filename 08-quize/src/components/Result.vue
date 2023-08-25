<script setup>

import { defineProps } from 'vue';

const {numberOfCurrect,numberOfQuestions} = defineProps(['numberOfCurrect','numberOfQuestions'])


</script>

<template>

    <div class="results">
        <p> Your reesult ..</p>
        <h1>
            {{numberOfCurrect}}/{{ numberOfQuestions }}
        </h1>
    </div>
</template>

<style scoped>


.results {
    text-align: center;
    padding: 100px 0;;
}
p{
    font-size: 25px;
}

h1 {
    font-size: 24px;
}

</style>