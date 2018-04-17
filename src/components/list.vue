<template>
	<div class="shop-list">
		<h4>商品信息</h4>
		<table class="table table-hover table-bordered table-shop">
			<thead>
				<tr>
					<th>id</th>
					<th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(items, index) of shop_list">	
					<td>{{ items.id }}</td>
					<td>{{ items.name }}</td>
					<td>{{ items.price }}</td>
					<td>{{ items.num || '' }}</td>
					<td>
						<div class="btn btn-info" @click='add_db(items)'>{{items.num > 0? '+' : '加入购物车'}}</div>
						<div v-if='items.num && items.num>0' class="btn btn-warning" @click='reduce_db(items)'>-</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default{
		name: 'list',
		data() {
			return {
				shop_list: [
					{
						id: 1,
						name: '鱼香肉丝',
						price: 17
					},
					{
						id: 2,
						name: '水煮肉片',
						price: 19
					},
					{
						id: 3,
						name: '腌笃鲜',
						price: 24
					},
					{
						id: 4,
						name: '米饭',
						price: 2
					}
				]
			}
		},
		mounted(){
			/**
			 * list 购物车列表 
			 * shop_list 菜品列表
			 * 
			*/
			let list = this.$store.state.cart.cartList
			for(let i = 0;i<this.shop_list.length;i++) {
				for(let j = 0;j<list.length;j++) {
					if(list[j].id === this.shop_list[i].id) {
						this.$set(this.shop_list,i,list[j])
						break
					}
				}
			}
		},
		methods: {	
			/**增加菜品
			 * param {object} 
			 * 分发至'check_db',检查是否需要修改curIndex值
			 * 1)有商品,但没有当前所选 curIndex === -1
			 * 2)无商品,无当前所选 curIndex === -1
			 * 3)有商品,有当前所选 curIndex !== -1
			*/
			add_db(items) {
				this.$store.dispatch('check_db',items.id)
				let curIndex = this.$store.state.cart.curIndex

				if(curIndex !== -1) {
					this.$store.dispatch('add_db',items)
				}else {
					this.$set(items,'num',1)
					this.$store.dispatch('create_db',items)
				}
			},
			/**减少菜品
			 * param {object} 
			*/
			reduce_db(items) {
				this.$store.dispatch('check_db',items.id)
				this.$store.dispatch('reduce_db')
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
    .btn-warning{
    	padding: 6px 14px 6px 14.5px;
    }
</style>