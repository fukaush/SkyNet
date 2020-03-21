const ListOfTariffPlans = {
    components: {
        TariffPlan,
        TopPanel
    },
    props: ['index'],
    computed: {
        tariff(){
            return store.state.tariffs[this.index]
        },
        plans(){
            return this.tariff.tarifs.sort((a, b) => a.pay_period - b.pay_period)
        },
        title(){
            return `Тариф "${this.tariff.title}"`
        }
    },
    methods: {
        showPlan(index){
            router.push({name: 'Plans', params: {plan: index}})
        }
    },
    watch: {
        'index'(nIndex){
            if(nIndex > store.state.tariffs.length){
                router.push('/')
            }
        }
    },
    template: `
        <div class="tariff-plans">
            <TopPanel :title="title"/>
            <div class="tariffs">
                <TariffPlan v-for="(plan, index) in plans" 
                    :key="plan.ID" 
                    :plans="plans" 
                    :index="index"
                    @showPlan="showPlan(index)"
                />          
            </div>
        </div>        
    `
}