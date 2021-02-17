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
        
        <div className="filter">
        {filter && filter.gender ==="Mens" ? <h1>Men's {filter.category}</h1>:null}
        {filter && filter.gender ==="Womens" ? <h1>Women's {filter.category}</h1>:null}

            <ul className="categorys">
                <li className="category-item">Lifetyle</li>
                <li className="category-item">Running</li>
                <li className="category-item">Skateboarding</li>
                <li className="category-item">Basketball</li>
                <li className="category-item">Trendy</li>
            </ul>
            <span className="divider"></span>
            <ul className="price-filter">
                <li className="price-item"><input type="checkbox" className="price-filter" id="0"/>$0-$25</li>
                <li className="price-item"><input type="checkbox" className="price-filter" id="1"/>$26-$50</li>
                <li className="price-item"><input type="checkbox" className="price-filter" id="2"/>$51-$100</li>
                <li className="price-item"><input type="checkbox" className="price-filter" id="3"/>$101-$150</li>
                <li className="price-item"><input type="checkbox" className="price-filter" id="4"/>Over $150</li>
            </ul>
            <span className="divider"></span>
            <ul className="color-filter">
                <li className="color-item"><span className="black-color-filter"></span><p>Black</p></li>
                <li className="color-item"><span className="blue-color-filter"></span><p>Blue</p></li>
                <li className="color-item"><span className="brown-color-filter"></span><p>Brown</p></li>
                <li className="color-item"><span className="green-color-filter"></span><p>Green</p></li>
                <li className="color-item"><span className="gray-color-filter"></span><p>Gray</p></li>
                <li className="color-item"><span className="multi-color-filter"></span><p>Multi</p></li>
                <li className="color-item"><span className="orange-color-filter"></span><p>Orange</p></li>
                <li className="color-item"><span className="yellow-color-filter"></span><p>Yellow</p></li>
            </ul>

            </div>

        <div className="shopping-items">
         {data ? data.map((item,index)=>{
             return(
                 <div className="shopping-item" key={index} data-item={JSON.stringify(item)}>
                     
                     <img src={item.img} alt={item.name}/>
                     <p>{item.name}</p>

                </div>
             )
         }):null}

        </div>
    </div>
    )
}

export default Shopping;