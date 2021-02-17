import React,{useEffect,useState} from 'react'
import MensShoes from '../../assets/JSONS/mensShoes.json'

function Shopping(){
    const [filter,setFilter] = useState("");
    const [data,setData]= useState("");

    useEffect(()=>{

        if(localStorage.getItem("filter")){
            let tempFilter = JSON.parse(localStorage.getItem("filter"));
            console.log(tempFilter);
            console.log(tempFilter.gender);
            console.log(tempFilter.category);

            checkFilters(tempFilter);
            setFilter(tempFilter);
        }
    },[])

    const checkFilters=filter=>{
        console.log('test')
       if(filter.gender==="Mens"){
        switch(filter.category){
            case "Shoes":
                setData(MensShoes);
                break;
            default:
            break;
        }
       }else{

       }
    }

    return(
        <div className="shopping">
        {console.log(data)}
        {filter && filter.gender ==="Mens" ? <h1>Men's {filter.category}</h1>:null}
        {filter && filter.gender ==="Womens" ? <h1>Women's {filter.category}</h1>:null}
        <h1>{filter.gender}</h1>
    </div>
    )
}

export default Shopping;