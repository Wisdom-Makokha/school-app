<template>
    <div id="navigation">
        <div class="navigation-container">
            <div class="home-container">
                <router-link to="/" class="route">Home</router-link>
            </div>
            <div class="nav-routes-container">
                <router-link to="/login" class="route">Login</router-link>
                <router-link to="/helloworld" class="route">Hello World</router-link>
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
    background-color: rgb(164, 200, 188);
    position: fixed;
}

.route{
    text-decoration: none;
    margin-left: 10px;
    margin-right: 10px;
    color: black;
    font-weight: 140%, 120%;
    font-size: 115%;
}
</style>