export default {
    getProject({commit}) {
        fetch('http://localhost:3000/api/project/list-all')
            .then(res       => res.json())
            .then(result    => {
                if(result.status === 'success'){
                    const finalData = result.data
                    commit('UPDATE_SKELETON', null, {root: true})
                    commit('UPDATE_MESSAGE', result.status ,{root: true})
                    commit('UPDATE_LIST_PROJECTS', finalData )
                }

            })
            .catch(err      => commit('UPDATE_MESSAGE', err ,{root: true}))
    }
}