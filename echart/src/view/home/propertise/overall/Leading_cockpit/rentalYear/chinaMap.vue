<template>
	<div class="chinaMap">
		<div class="mapImg">
			<div class="picone picmain">
				<img src="../../../../../../assets/haiju.jpg" alt="">
				<div>生命科技中心</div>
			</div>
			<div class="pictwo picmain">
				<img src="../../../../../../assets/fuhua.jpg" alt="">
				<div>文创园</div>

			</div>
			<div class="picthree picmain">
				<img src="../../../../../../assets/jiasu.png" alt="">
				<div>海聚中心</div>

			</div>
			<div class="picfour picmain">
				<img src="../../../../../../assets/shengmin.png" alt="">
				<div>服务外包</div>

			</div>
			<div class="picfif picmain">
							<img src="../../../../../../assets/shengmin.png" alt="">
							<div>孵化器</div>
			
						</div>
			
			
			</div>
		<div :style="{height:'500px',width:'100%'}" ref="myEchart"></div>
	</div>
</template>
<script>
	 import echarts from "echarts";
	 import '../../../../../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
	export default{
		name:"chinaMap",
		props: ["userJson"],
		data() {
		  return {
			chart: null,
			mydata:[],
		  };
		},
		mounted() {
		  this.chinaConfigure();
				

		},
// 		beforeDestroy() {
// 		  if (!this.chart) {
// 			return;
// 		  }
// 		  this.chart.dispose();
// 		  this.chart = null;
// 		},
		 methods: {
			 randomData() {
				return Math.round(Math.random()*500);
			},
      chinaConfigure() {
				this.axios.get("../../../../../../../static/map.geojson").then(res=>{
					// console.log(res.data)
					echarts.registerMap('杭州', res.data);
				let myChart = echarts.init(this.$refs.myEchart); 
				myChart.setOption({
					title:{
  					text: '杭州市下沙',
  					left: 'center',
						textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
							// fontFamily: 'Arial, Verdana, sans...',
							fontSize: 18,
							backgroundColor:"#f0f",
							fontStyle: 'normal',
							fontWeight: 'normal',
							color:"#fff"
						},
  				},
					 legend: {
					orient: 'vertical',
					left: 'left',
					data:['iphone3','iphone4','iphone5']
			},
					tooltip: {
						 type:'cross',
						 alwaysShowContent: false,  
            bordeRadius: 4,  
            borderWidth: 1,  
            borderColor: 'rgba(0,0,0,0.2)',  
            backgroundColor: 'rgba(255,255,255,0.9)',  
            padding: 10,  
            // position: "top",  
            textStyle: {  
                fontSize: 12,  
                color: '#333' 
            },  
		            trigger: 'item',
		            formatter: ''
        		},
						  itemStyle: {
								normal: {
										label: {
												show: true
										},
										areaColor: '#000',
								},
								emphasis: {
										label: {
												show: true
										},
										areaColor: '#000'
								}
						},
				
					visualMap: {
			            min: 0,
			            max: 2000,
			            text:[' ','企业数量'],
			            realtime: false,
			            calculable: true,
									textStyle: {  
											fontSize: 12,  
											color: '#fff' 
									},
			            inRange: {
			                color: ['lightskyblue','yellow', 'orangered']
			            }
       			},
						
						series:[
        			{
        				name: '租金收入',
               	 		type: 'map',
               	 		map: '杭州', // 自定义扩展图表类型
               	 		aspectScale: 1.0, //长宽比. default: 0.75
               	 		zoom: 1.2,
               	 		roam: true,
										
										label: {
														normal: {
															show: false,
														
															
														},
														  // areaColor: '#089AF4',
														emphasis: {
															show: true
														}
													},
// 		                itemStyle:{
// 		                    normal:{label:{show:true}},
// 		                    emphasis:{label:{show:true}}
// 		                },
										 itemStyle: {
                            normal: {
                                areaColor: "#101f32",
                                borderWidth: 1.1,
                                textStyle: {
                                    color: "#fff"
                                },
                                borderColor: "#43d0d6" //地图边框颜色
                            },
                            emphasis: {
                                color: "#fff",
                                areaColor: "#069"
                            }
                        },
										data: [
											{
												name:'生命科技中心',value:'1800'
											},
		                  {
		                	name:'服务外包',value:'480'
		                  },
		                  {
		                	name:'海聚中心',value:'900'
		                  },
		                  {
		                	  name:'孵化器',value:'100'
		                  },
											{
												name:'文创园',value:'1400'
											},

										
		                  ]
							}
        		]


				})
				
				
				
				
				
				
// 				
//         console.log(this.userJson)
//         let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置    
//         window.onresize = myChart.resize;
//         myChart.setOption({ // 进行相关配置
// 					// backgroundColor: '#FFFFFF',
// 		title: {
// // 			text: '全国地图',
// // 			subtext: '纯属虚构',
// 			x:'center'
// 		},
// 		tooltip : {
// 			trigger: 'item'
// 		},
// 		visualMap: {
// 						show : true,
// 						x: 'left',
// 						y: 'bottom',
//             min: 0,
//             max: 1000,
//             text:['High','Low'],
//             realtime: false,
//             calculable: true,
//             inRange: {
//                 color: ['lightskyblue','yellow', 'orangered']
//             }
//         },
// 		series: [{
// 			name: '随机数据',
// 			type: 'map',
// 			mapType: 'china', 
// 			roam: true,
// 			rippleEffect:{
// 			brushType:'stroke'
// 			},
// 			label: {
// 				normal: {
// 					show: false
// 				},
// 				emphasis: {
// 					show: false
// 				}
// 			},
// 			data:[
// 				{name: '北京',value: this.randomData() },{name: '天津',value: this.randomData() },
// 				{name: '上海',value: this.randomData() },{name: '重庆',value: this.randomData() },
// 				{name: '河北',value: this.randomData() },{name: '河南',value: this.randomData() },
// 				{name: '云南',value: this.randomData() },{name: '辽宁',value: this.randomData() },
// 				{name: '黑龙江',value: this.randomData() },{name: '湖南',value: this.randomData() },
// 				{name: '安徽',value: this.randomData() },{name: '山东',value: this.randomData() },
// 				{name: '新疆',value: this.randomData() },{name: '江苏',value: this.randomData() },
// 				{name: '浙江',value: this.randomData() },{name: '江西',value: this.randomData() },
// 				{name: '湖北',value: this.randomData() },{name: '广西',value: this.randomData() },
// 				{name: '甘肃',value: this.randomData() },{name: '山西',value: this.randomData() },
// 				{name: '内蒙古',value: this.randomData() },{name: '陕西',value: this.randomData() },
// 				{name: '吉林',value: this.randomData() },{name: '福建',value: this.randomData() },
// 				{name: '贵州',value: this.randomData() },{name: '广东',value: this.randomData() },
// 				{name: '青海',value: this.randomData() },{name: '西藏',value: this.randomData() },
// 				{name: '四川',value: this.randomData() },{name: '宁夏',value: this.randomData() },
// 				{name: '海南',value: this.randomData() },{name: '台湾',value: this.randomData() },
// 				{name: '香港',value: this.randomData() },{name: '澳门',value: this.randomData() }
// 			]
// 		}]
})
      }
			
    }
	}
</script>
<style scoped>
	
	.mapImg{
		position: absolute;
		text-align: center;
		width:100%;
		height:100%;
		padding-top:20px;
	}
	.mapImg img{
		display: inline-block;
	}
	
	.picone {
		top:12.1%;
		left:6%
	}
	
	.pictwo{
		top:26%;
		left:19%
	}
	.picthree{
		top:33%;
		left:46%
	}
	.picfour{
		top:12%;
		left:27%
	}
	.picfif{
		top:15%;
		left:38%
	}
	.picmain img{
		width:100%;
		height:100%;
	}
	.picmain{
		width:60px;
		height:60px;
		z-index: 1;
		position: absolute;
	}
	
/* 	.chinaMap{
		width: 100%;
		height: 100%;
		background-image: url('../../../../../../assets/map.gif');
		background-size: cover;
		background-position: center;
		position: relative;
	} */
	
</style>
