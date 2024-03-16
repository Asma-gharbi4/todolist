import { createApp } from 'vue';
import App from './vue/App.vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { faPlusSquare, faTrash  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
 
/* add icons to the library */
library.add( faPlusSquare, faTrash)

// Create a Vue application instance
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
// Mount the Vue application instance to an element with the id 'app'
app.mount('#app');
