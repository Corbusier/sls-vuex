export default{
	getCartList(state) {
		return state.cartList
	},
	getInfos(state) {
		state.cartInfos.total_price = 0
		state.cartInfos.total_nums  = 0
		let list = state.cartList
		for(let i = 0;i<list.length;i++) {
			let price = parseInt(list[i].price),
				num   = parseInt(list[i].num);
			state.cartInfos.total_price += price * num
			state.cartInfos.total_nums  += num
		}
		return state.cartInfos
	}
}