<template>
  <div id="hello-world">
    <navigationbar />
    <div class="card-container">
      <div class="card-appearance">
        <div class="card-content">
          <h1 id="title" class="card-text">Hello World</h1>
          <p class="card-body card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut
            labore et dolore magna aliqua. Nullam vehicula ipsum a arcu cursus. At elementum eu facilisis sed odio morbi
            quis
            commodo odio. Faucibus nisl tincidunt eget nullam non nisi est sit. Bibendum ut tristique et egestas quis
            ipsum.
            Facilisis volutpat est velit egestas dui id ornare arcu odio. Et malesuada fames ac turpis egestas integer
            eget.
            Molestie at elementum eu facilisis sed. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.
            Aliquam
            purus sit amet luctus venenatis lectus. Vitae et leo duis ut diam. Ut eu sem integer vitae justo eget magna.
            Lacus
            luctus accumsan tortor posuere.

            Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Lacus sed viverra tellus in hac habitasse
            platea.
            Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Scelerisque eu ultrices vitae auctor
            eu
            augue ut lectus arcu. Morbi non arcu risus quis varius quam quisque id. Convallis posuere morbi leo urna
            molestie
            at.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigationbar from './Navigation.vue'

export default {
  components: {
    navigationbar,
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  border-radius: 50px;
  height: 700px;
  position: relative;
}

.card-appearance {
  width: 100%;
  height: 100%;
  overflow-block: scroll;
  background-color: rgb(129, 209, 181);
  position: absolute;
  border: 5px solid rgb(93, 124, 112);
  border-radius: 50px;
  box-shadow: 5px 5px 10px rgb(2, 32, 21);
  transition: background-color 2s, box-shadow 2s ease-in-out;
}

.card-appearance:hover,
.card-appearance:focus {
  background-color: rgb(50, 78, 68);
  box-shadow: 3px 3px 10px rgb(9, 76, 51);
}

.card-content {
  margin-top: 30px;
  height: 100%;
  color: black;
  transition: color 2s;
}

.card-content:hover,
.card-content:focus {
  color: rgb(186, 240, 222);
}

.card-text {
  text-align: center;
}

#title {
  font-family: 'Playfair Display', serif;
}

.card-body {

  font-family: 'Amarante', cursive;
  font-family: 'Edu SA Beginner', cursive;
  font-family: 'Oswald', sans-serif;
  font-family: 'PT Serif', serif;
  font-family: 'Roboto Mono', monospace;
}</style>


<!-- -->