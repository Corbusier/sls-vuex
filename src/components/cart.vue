<template>
	<div class="shop-list">
		<h4>购物车信息</h4>
		<table class="table table-hover table-shop">
			<thead>
				<tr>
					<th>id</th>
					<th>名称</th>
					<th>价格</th>
                    <th>数量</th>
                    <th>总价</th>
                    <th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(value, index) of cartList">
					<td>{{ value.id }}</td>
					<td>{{ value.name }}</td>
					<td>{{ value.price }}</td>
					<td>{{ value.num }}</td>
					<td>{{ value.price*value.num }}</td>
					<td>
						<div class="btn btn-info" @click="action_cart(index,'add_db')">+</div>
						<div class="btn btn-warning" @click="action_cart(index,'reduce_db')">-</div>
						<div class="btn btn-danger" @click="action_cart(index,'del_db')" title="删除">x</div>
					</td>
				</tr>
			</tbody>
		</table>	
	</div>
</template>
	
<script>
	export default {
		name: 'cart',
		computed: {
			cartList() {
				return this.$store.getters.getCartList
			}
		},
		methods: {
			/**
			 * 更新curIndex
			*/
			action_cart(index,type) {
				this.$store.dispatch('update_cur_status',{index})
				this.$store.dispatch(type)
			}
		}
	}
</script>

<style scoped lang="less">
    .table-shop{
        th{
            text-align: center;
        }
    }
</style>