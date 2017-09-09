import Vue from 'vue'
import App from './App'
import { directive as clickAway } from 'vue-clickaway';


Vue.directive( 'clickaway', clickAway );

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue( {
	el: '#app',
	render: h => h( App )
} )

//start: 10:00

