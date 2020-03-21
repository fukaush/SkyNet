const app = new Vue({
    router,
    mixins: [
        {
            methods: {
                declensionOfMonth(number){
                    const decCache = [],
                        decCases = [2, 0, 1, 1, 1, 2],
                        titles = ["месяц", "месяца", "месяцев"];

                    if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];

                    return `${number} ${titles[decCache[number]]}`;
                },
            }
        }
    ]
});

app.$mount("#test");