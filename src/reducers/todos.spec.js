import todos from './todos'
describe('todos reducer', () => {
    it('should handle initial state', () => 
    {
        expect(
            todos(undefined, {})

        ).toEquals([])
    })
    it('should handle ADD_TODO', () => {
        expect(
            todos([], {
                type: 'ADD_TODOS',
                text: 'Run the tests',
                id:0

            })
        ).toEquals([
            {
                text: 'Run the tests',
                completed:false,
                id:0
            }
        ])
        expect(
            todos([
                {
                    text: 'Run the tests',
                    completed:false,
                    id:0

                }
            ],{
                type:'ADD_TODO',
                text:'Use Redux',
                id:1
            })
        ).toEqual([
            {
                text:'Run the tests',
                completed:false,
                id:0
            },{
                text: 'USeRedux',
                completed:false,
                id:1
            },{
                text: 'Fix the tests',
                completed:false,
                id:2
            }
        ])
    })
    it('should handle TOGGLE_TODO', () =>{
        expect(
            todos([
                {
                    text:'Run the tests',
                    completed:false,
                    id:1
                },{
                    text:'USe Redux',
                    completed:false,
                    id:0
                }
            ],{
                type: 'TOGGLE_TODO',
                id:1
            })
        ).toEqual([
            {
                text:'Run the tests',
                completed:true,
                id:1
            },{
                text:'USE redux',
                completed:false,
                id:0
            }
        ])
        
    })
    })
