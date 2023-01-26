Vue.component('my-cleaner', {
    data: () => {
        return {

        }
    },
    template: `
      <button @click = "clean" >Clean Json</button>`,
    methods: {
        clean() {
            fetch('http://localhost:3000/api/all',{
          })
          .then(response => response.json())
          .then(response => { this.$root.objectStore(response)});
        }
    }
}
)