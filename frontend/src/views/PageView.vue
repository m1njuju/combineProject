<template>
    <div class="page">
        <h3>{{memo.title}}</h3>
        <p>{{memo.memo}}</p>
        <button @click="$router.go(-1)">뒤로가기</button>
    </div>
</template>

<script>
export default {
    created() {
        // memo의 id값을 가져오기 위해서, route의 params 사용
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response)=>{
        this.memo = response.data
        })
    },
    data() {
        return {
        memo : {}
        }
    }
}
</script>