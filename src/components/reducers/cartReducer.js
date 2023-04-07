import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import Item7 from '../../images/item7.jpg'
import Item8 from '../../images/item8.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Chicken Dinner', desc: "Marinated Chicken breast cubes, served on a bed of rice, with a side of tomato sauce Served with pita and a side house salad.", price:20.95,img: Item1},
        {id:2,title:'Kafta Dinner', desc: "Ground Sirloin, mixed with parsley, onions, and spices. Served on a bed of rice with a side of tomato sauce. Served with pita and a side house salad.", price:20.99,img: Item2},
        {id:3,title:'Gyro Dinner', desc: "Grilled Gyro meat, served on a bed of rice, with a side of tomato sauce. Served with pita and a side house salad.",price:17.99,img: Item3},
        {id:4,title:'Lamb Shank', desc: "Fork tender Lamb Shank, slightly drizzled in tomato sauce, served on a bed of rice, with a side of tomato sauce. Served with pita and a side house salad.", price:19.95,img:Item4},
        {id:5,title:'Falafel Dinner', desc: "Six freshly fried Falafel balls, served on a bed of rice, with a side of tahini sauce. Served with pita and a side house salad.", price:19.95,img: Item5},
        {id:6,title:'Baked Kibbi Dinner', desc: "Mixture of Beef, cracked wheat, and herbs. Baked and stuffed with sautéed Beef, onions and pine nuts. Served with pita and a side house salad.",price:17.95,img: Item6},
        {id:7,title:'Meat Moussaka Dinner', desc: " Eggplant, onions, zucchini, potatoes, ground Sirloin. Cooked with a special white sauce. Served with pita and a side house salad.",price:17.95,img: Item7},
        {id:8,title:'Shawarma Dinner', desc: "Marinated tender Beef slices served with a side of vegetables that include: lettuce, tomatoes, onions, and tahini.",price:16.95,img: Item8}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
