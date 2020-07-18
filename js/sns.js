var app = new Vue({
  el:'#sns',
  data:{
    show:false,
    user_name:'',
    user_id:'',
    tweet_text:'',
    tweet_list:[],
    time:'',
  },
  methods:{
  	submit:function(){
    let date = new Date();
    this.time = date.getHours()+":"+date.getMinutes();
  	this.tweet_list.push({text:this.tweet_text,name:this.user_name,id:this.user_id,time:this.time});
    this.tweet_text = '';
    this.time = '';
  	}
  },
});