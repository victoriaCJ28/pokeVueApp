const url = "https://pokeapi.co/api/v2/pokemon/";
const app = new Vue ({
    el: "#app",
    created: function(){
        this.getPokemon();
    },
    data () {
        return {
            search: "",
            pokemon: []

          }
    },
    // mounted () {
    //     axios
    //       .get(url)
    //       .then(response => {
    //           this.pokemon = response.data 
    //         })
    //   },
      methods: {
          getPokemon(){
              let result = axios
              .get("https://pokeapi.co/api/v2/pokemon/2")
                .then(res =>{
                    console.log(res, data);
                });
                  
          }

      }

    

})