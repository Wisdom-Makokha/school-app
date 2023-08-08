<template>
    <div id="navigation">
        <div class="navigation-container">
            <div class="home-container">
                <router-link to="/" class="route home">Home</router-link>
            </div>
            <div class="nav-routes-container">
                <router-link to="/login" class="route login">Login</router-link>
                <router-link to="/helloworld" class="route hello-world">Hello World</router-link>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.navigation-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    background-color: rgb(86, 108, 101);
    position: sticky;
}

.route{
    text-decoration: none;
    margin-left: 10px;
    margin-right: 10px;
    color: black;
    font-family: 'Prompt', sans-serif;
    font-size: 125%;
    transition: color 0.8s;
}

.route:hover{
    color: rgb(186, 240, 222);
}


.home{
    margin-left: 180%;
}
.hello-world{
    margin-right: 90px;
}
</style>