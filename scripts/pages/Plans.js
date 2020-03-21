const Plans = {
    components: {
        TopPanel
    },
    props: ['index', 'plan'],
    computed: {
        planOfTariff(){
            return store.state.tariffs[this.index].tarifs[this.plan]
        },
        price(){
            return this.planOfTariff.price
        },
        period(){
            return this.planOfTariff.pay_period;
        },
        pricePerMonth(){
            return Math.ceil(this.price / this.period)
        },
        payday(){
            console.warn(this.planOfTariff.new_payday)
            const [t, s] = this.planOfTariff.new_payday.split('+')
            const date = new Date((+t + +s) * 1000);
            const month = String(date.getMonth() + 1).padStart(2, "0")
            return `${date.getDate()}.${month}.${date.getFullYear()}`
        },
        title(){
            return `Выбор тарифа`
        }
    },
    methods: {
        buy(){
            alert("Оплатить")
        }
    },
    mixins: [declensionOfMonth],
    template: `
        <div class="plan-page">
            <TopPanel :title="title"/>
            <div class="tariff">
                <div class="tariff__title">
                    Тариф "{{planOfTariff.title}}"
                </div>
                <div class="tariff__price-range">
                    <div>Период оплаты – {{declensionOfMonth(period)}}</div>
                    <div>{{pricePerMonth}} ₽/мес</div>              
                </div>
                <div>
                    <div>разовый платёж – {{price}} ₽</div>
                    <div>со счета спишется – {{price}} ₽</div>
                </div>
                <div class="tariff__note">
                    <div>вступит в силу – сегодня</div>
                    <div>активно до – {{payday}}</div>
                </div> 
                <div class="tariff__button" @click="buy">Выбрать</div>
            </div>
        </div>
        `
}