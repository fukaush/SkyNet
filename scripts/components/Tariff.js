const Tariff =  {
    props: ['tariff'],
    computed: {
        priceRange(){
            const plan = this.tariff.tarifs;
            const prices = plan.map(plan => Math.ceil(plan.price / plan.pay_period))

            return {
                min: Math.min(...prices),
                max: Math.max(...prices)
            }
        },
        tariffClass(){
            switch(this.tariff.speed){
                case 50:
                    return 'brown';
                case 100:
                    return 'blue';
                case 200:
                    return 'orange';
                default:
            }
        }
    },
    methods: {
        showTariffPlans(){
            this.$emit('showTariffPlans');
        }
    },
    template: `
        <div class="tariff">
            <div class="tariff__title">Тариф "{{tariff.title}}"</div>
            <div class="middle" @click="showTariffPlans">
                <div>
                    <div :class="['tariff__speed', tariffClass]">{{tariff.speed}} Мбит/c</div>
                    <div class="tariff__price-range">{{priceRange.min}} – {{priceRange.max}} ₽/мес</div>
                    <div class="tariff__free-options">
                        <div v-for="option in tariff.free_options">{{option}}</div>
                    </div>
                </div>
                <img class="arrow" src="images/test.svg"/>
            </div>
            <div class="tariff__link">
                <a :href="tariff.link">узнать подробнее на сайте www.sknt.ru</a>
            </div>
        </div>
    `
};
