const store = new Vuex.Store({
    state: {
        tariffs: []
    },
    mutations: {
        setTariffs (state, tariffs) {
            state.tariffs = tariffs;
        }
    },
    actions: {
        async loadTariffs(context){
            const {data: {tarifs: tariffs}} = await axios({
                method: 'get',
                url: 'test.php'
            });

            context.commit('setTariffs', tariffs);
        }
    }
})