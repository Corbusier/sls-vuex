export default {
	check_db: ({commit},obj) => commit('CHECK_DB',obj),
	create_db: ({commit},obj) => commit('CREATE_DB',obj),
	add_db: ({commit},obj) => commit('ADD_DB',obj),
	remove_db: ({commit}) => commit('REMOVE_DB'),
	reduce_db: ({commit}) => commit('REDUCE_DB'),
	del_db: ({commit}) => commit('DEL_DB'),
	update_cur_status: ({commit},index) => commit("UPDATE_CUR_STATUS",index)
}