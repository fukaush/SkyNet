<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8"/>
        <title>Тестовое задание</title>
        <link rel="stylesheet" href="style/test.css"/>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
        <script src="https://unpkg.com/vuex@3.1.3/dist/vuex.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="scripts/mixins/declensionOfMonth.js"></script>
        <script src="scripts/components/TopPanel.js"></script>
        <script src="scripts/components/Tariff.js"></script>
        <script src="scripts/components/TariffPlan.js"></script>
        <script src="scripts/pages/Plans.js"></script>
        <script src="scripts/pages/ListOfTariffs.js"></script>
        <script src="scripts/pages/ListOfTariffPlans.js"></script>
        <script src="scripts/store.js"></script>
        <script src="scripts/router.js"></script>
    </head>
    <body>
    <div id="test">
        <router-view></router-view>
    </div>
    <script src="scripts/test.js"></script>
    </body>
</html>