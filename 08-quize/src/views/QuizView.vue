
<script setup>
import Question from "@/components/Question.vue"
import QuizHeader from "@/components/QuizHeader.vue"
import Result from "@/components/Result.vue"
import {useRoute} from "vue-router"
import {ref,computed} from "vue"

import quizes from "@/quizes.json"

const route = useRoute()

const quizId = parseInt(route.params.id)

const currentQuestionIndex = ref(0)

const quiz = quizes.find(q => q.id === quizId)

const numberOfCurrect = ref(0)

const onOptionSelected = (isCorrect)=>{
    if (isCorrect){
        numberOfCurrect.value++
    }
    if (quiz.questions.length-1 == currentQuestionIndex.value){
        showResult.value = true
    }
    currentQuestionIndex.value++
}

const showResult = ref(false)

// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

// watch(()=>currentQuestionIndex.value,()=>{
//     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
// })

const questionStatus = computed(()=>{
    return `${currentQuestionIndex.value}/${quiz.questions.length}`
})

const percentage = computed(()=>{
    return `${currentQuestionIndex.value/quiz.questions.length*100}%`
})

const nextQuestion = ()=>{
    currentQuestionIndex.value++
}

</script>

<template>

    <div>
        <QuizHeader :questionStatus="questionStatus" :percentage="percentage"/>
        <Question v-if="!showResult" :question="quiz.questions[currentQuestionIndex]" @selectOption="onOptionSelected"/>
        <Result v-else :numberOfCurrect="numberOfCurrect" :numberOfQuestions="quiz.questions.length" />
    </div>
</template>
