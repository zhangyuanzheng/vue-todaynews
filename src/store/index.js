import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


// var state, xmlhttp;
// xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function () {
// 	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
// 		state = eval('(' + xmlhttp.responseText + ')')
// 	} else {
// 		state = { serverIp: 0 }
// 	}
// 	// console.log(state)
// }
// let serverIp = 'http://192.168.1.102';
// xmlhttp.open('GET', serverIp + '/json/news.php', false)
// xmlhttp.send();
var state = {
	start:0,
	news: []
}
const actions = {
	getNews(context) {
		axios.get('/api/news', {
			params: {
				_start: context.state.start,
			}
		}).then(res => {
			//	console.log(res);
			context.state.news = res.data;
		}).catch(err => {
			console.log(err);
		});
	}
}
const getters = {
	newsDetail() {
		var mydate = new Date();
		return mydate.getTime();
	}
}
const mutations = {
	go(state, s) {
		console.log(s);
		// s[0].push({path:'/'+s[1]});

	}
}

export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations
})


