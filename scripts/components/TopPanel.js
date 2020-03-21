const TopPanel = {
    props: ['title'],
    template: `
        <div class="top-panel">
            <img class="arrow" src="images/test.svg" @click="$router.go(-1)"/>
            {{title}}
        </div>
    `
}