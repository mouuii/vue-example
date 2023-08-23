const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 10,
            details: ['50% cotton','30%','200%'],
            variants:[
                {
                    id:2234,color:'green'
                },
                {
                    id:2234,color:'blue'
                }
            ]
        }
    }
})
