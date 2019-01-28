<template>
  <div class="headercomp">
		<ul>
			<li class="l list1">
				<span>南都物业</span>
				<span>股权代码:603506</span>				
			</li>
			<li class="list2">云图系统</li>		
			<li class="r "><span><i class="icon iconfont">&#xe634;</i></span>{{dataTime}}</li>			
		</ul>		   
  </div>
</template>
<script>
export default {
  name: 'headercomp',
	data(){
		return{
			 nowdate: new Date()
		}
	},
	mounted(){
		 var that = this;                    
		 that.time = setInterval(function() {
				that.nowdate = new Date();//修改数据date
		}, 1000);
	},
	computed: {
		dataTime() {		
			var hour = this.nowdate.getHours();
			var year=this.nowdate.getFullYear()
			var hour=hour >= 10 ? '' + hour : '0' + hour
			var minute = this.nowdate.getMinutes();
			var minute=minute >= 10 ? '' + minute : '0' + minute
			var second = this.nowdate.getSeconds();
			var month = this.nowdate.getMonth();
			var date = this.nowdate.getDate();
			var data=date >= 10 ? '' + date : '0' + date
			return year+'-'+(month+1)+"-"+date+"  "+hour+":"+minute
		},
			
	},
	methods:{
	
      
	}
}
</script>

<style scoped>
	.headercomp{
		height:50px;
		line-height: 50px;
		background:rgba(0, 0 , 0 , .1);
		/* border: 1px solid #ccc; */
		border-radius: 5px;
		box-shadow:0 0 5px #ccc;
	}
	.headercomp ul li{
		display: inline-block;	
		color: #fff;
		padding:0 1%;

	}
	.headercomp ul{
		text-align: center;
	}
	.list1,.list3{
		font-size: 14px;
	}
	.list2{
		font-size: 20px;
	}
	
	
	


</style>
