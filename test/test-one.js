let states = [{
    s_name:"ca",
    enabled:true,
    group:'sanity'
},
{
    s_name:"sa",
    enabled:false,
    group:'sanity'
},
{
    s_name:"ka",
    enabled:true,
    group:'smoke'
},
{
    s_name:"la",
    enabled:false,
    group:'smoke'
},

]

let grp = 'sanity'


describe('test suite', () => {

    if (grp) {
        states = states.filter(state => {
            return state.group === grp;
        })
    }
    
    states.filter((state => {
        return state.enabled
    })).forEach(state => {
        it('test the state '.concat(state.s_name), () => {
            console.log(state)
        });
    })
    
})
