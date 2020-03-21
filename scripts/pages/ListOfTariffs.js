const ListOfTariffs = {
    components: {
        Tariff
    },
    computed: {
        tariffs(){
            return store.state.tariffs
        }
    },
    methods: {
        showTariffPlans(index){
            router.push({name: 'ListOfTariffPlans', params: {index: index}})
        }
    },
    template: `
        <div class="tariffs">
            <Tariff 
                v-if="tariffs.length > 0"
                v-for="(tariff, index) in tariffs" 
                :tariff="tariff"
                @showTariffPlans="showTariffPlans(index)"
            />
        </div>
    `
};