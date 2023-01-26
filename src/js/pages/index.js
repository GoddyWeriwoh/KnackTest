import {} from "../components/myCleaner.js"
import {} from "../components/objectM.js"


var app = new Vue({
    el: '#appJsonCleaner',
    data: () => {
        return {
            entireData: Object,
            objects:[],
        }
    },
    methods: {
        objectStore(entireData){
            this.entireData = entireData
            this.filterObjectArray(this.entireData.versions[0].objects);


           fetch('http://localhost:3000/api/newStorage', {
            credentials: "same-origin",
            mode: "same-origin",
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.entireData)
            })
            

        },
        
        filterObjectArray(objectArray){
            for (var i = 0; i < objectArray.length; i++) {
                this.checkFields(objectArray[i].fields);
              }

              for(var i = 1; i < objectArray.length; i++){
                if(objectArray[i-1].key === objectArray[i].key || objectArray[i-1].identifier === objectArray[i].identifier){
                    objectArray.splice(i-1, 1);
                }
              }

        },

        checkFields(fieldsArray){

              for(var i = 1; i < fieldsArray.length; i++){
                if(fieldsArray[i-1].key === fieldsArray[i].key || fieldsArray[i-1]._id === fieldsArray[i]._id){
                    fieldsArray.splice(i-1, 1);
                }
              }
        }



    }
    
})