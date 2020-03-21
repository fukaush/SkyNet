const router = new VueRouter({
    routes: [
        {
            name: 'ListOfTariffs',
            path: '/',
            component: ListOfTariffs,
            beforeEnter(to, from, next){
                store.dispatch('loadTariffs');
                next();
            }
        },
        {
            name: 'ListOfTariffPlans',
            path: '/tariff/:index',
            component: ListOfTariffPlans,
            props: true,
            beforeEnter(to, from, next) {
                if(store.state.tariffs.length && to.params.index <= store.state.tariffs.length){
                    next();
                } else {
                    next('/')
                }
            }
        },
        {
            name: 'Plans',
            component: Plans,
            path: '/tariff/:index/plan/:plan',
            props: true,
            beforeEnter(to, from, next) {
                if(store.state.tariffs.length && to.params.index <= store.state.tariffs.length){
                    next();
                } else {
                    next('/')
                }
            }
        },
        {
            path: '*',
            beforeEnter(to, from, next) {
                next('/')
            }
        }
    ]
})
