export default {
	cartList: localStorage.getItem('vuex_cart') ?
			  JSON.parse(localStorage.getItem('vuex_cart')) :
			  [],
	//初始化Index,对应当前菜品在购物车中的索引
	curIndex: -1,
	cartInfos: {
		total_price: 0,
		total_nums: 0
	}
}