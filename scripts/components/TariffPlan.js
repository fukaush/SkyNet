const TariffPlan = {
    props: ['plans', 'index'],
    computed: {
        plan(){
            return this.plans[this.index]
        },
        price(){
            return this.plan.price
        },
        period(){
            return this.plan.pay_period;
        },
        pricePerMonth(){
            return Math.ceil(this.price / this.period)
        },
        discount(){
            return this.plans[0].price * this.period - this.price;
        },
    },
    mixins: [declensionOfMonth],
    methods: {
        showPlan(index){
            this.$emit('showPlan');
        }
    },
    template: `
        <div class="tariff">
            <div class="tariff__title">{{declensionOfMonth(this.period)}}</div>
            <div class="middle" @click="showPlan">
                <div>
                    <div class="tariff__price-range">{{pricePerMonth}} ₽/мес</div>
                    <div>разовый платёж – {{price}} ₽</div>
                    <div v-if="discount > 0">скидка – {{discount}} ₽</div>
                </div>
                <img class="arrow" src="images/test.svg"/>
            </div>
        </div>
    `
}