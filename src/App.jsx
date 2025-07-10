import React,{useState} from 'react'
import ProductList from './ProductList.jsx'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
export default function App(){
  const [sort,setSort] = useState("default");
  const [query,setQuery] = useState('');
  function handelSearch(event){
    setQuery(event.target.value);
  }
  function handelSort(event){
    setSort(event.target.value);
  }
  let allData=[
                { image:"https://cdn.canvaschamp.in/static/images/landingpage/skateboard-deck/skateboard-deck-2.jpg",
                  title:"Skateboard",
                  description:"Trail Board",
                  price:" 6k",
                  
                },
                {
                  image:"https://i.ebayimg.com/images/g/hFkAAOSwpBxfFcm7/s-l1200.jpg",
                  title:"Skateboard",
                  description:"Road Board",
                  price:" 10k",
                  
                },
                {
                  image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJyNWFy_DMtEb2Lp6uQoqxt2-7rzeFaHTw8iZnRozo4iTd5DzndRwzoBf7w1F5345TNYVk9bnYhaBAQFfxWxF48LCcwhkjKVZiuWM_Mcg-RMSmL1akbX0p",
                  title:"Mug",
                  description:"Coffee Mug",
                  price:"5.22",
                  
                },
                {
                  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtCMYLCPQNiCI6o1KLYghy4M5ylYktu1OLg&s",
                  title:"Roadage",
                  description:"Doom Board",
                  price:" 10k",
                  
                },{ image:"https://cdn.canvaschamp.in/static/images/landingpage/skateboard-deck/skateboard-deck-2.jpg",
                  title:"Skateboard",
                  description:"Trail Board",
                  price:" 6k",
                  
                },
                {
                  image:"https://i.ebayimg.com/images/g/hFkAAOSwpBxfFcm7/s-l1200.jpg",
                  title:"Skateboard",
                  description:"Road Board",
                  price:" 10k",
                  
                },
                {
                  image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJyNWFy_DMtEb2Lp6uQoqxt2-7rzeFaHTw8iZnRozo4iTd5DzndRwzoBf7w1F5345TNYVk9bnYhaBAQFfxWxF48LCcwhkjKVZiuWM_Mcg-RMSmL1akbX0p",
                  title:"Mug",
                  description:"Coffee Mug",
                  price:"5.22",
                  
                },
                {
                  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtCMYLCPQNiCI6o1KLYghy4M5ylYktu1OLg&s",
                  title:"Roadage",
                  description:"Doom Board",
                  price:" 10k",
                  
                },
                {
                  image:"https://i.ebayimg.com/images/g/hFkAAOSwpBxfFcm7/s-l1200.jpg",
                  title:"Skateboard",
                  description:"Road Board",
                  price:" 10k",
                  
                },
                {
                  image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJyNWFy_DMtEb2Lp6uQoqxt2-7rzeFaHTw8iZnRozo4iTd5DzndRwzoBf7w1F5345TNYVk9bnYhaBAQFfxWxF48LCcwhkjKVZiuWM_Mcg-RMSmL1akbX0p",
                  title:"Mug",
                  description:"Coffee Mug",
                  price:"5.22",
                  
                },
                {
                  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtCMYLCPQNiCI6o1KLYghy4M5ylYktu1OLg&s",
                  title:"Roadage",
                  description:"Doom Board",
                  price:" 10k",
                  
                }
                ,
                {
                  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtCMYLCPQNiCI6o1KLYghy4M5ylYktu1OLg&s",
                  title:"Roadage",
                  description:"Doom Board",
                  price:" 10k",
                  
                }
              ];
  let filterData=allData.filter(item=>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  let data=[...filterData];
  if(sort==="lowTohigh"){
    data.sort((a,b)=>{
      const price1=+a.price;
      const price2=+b.price;
      return price1-price2;
    })
  }
  if(sort==="highTolow"){
    data.sort((a,b)=>{
      const price1=+a.price;
      const price2=+b.price;
      return price2-price1;
    })
  }
  if(sort==="title"){
    data.sort((a,b)=>{
      const title1=a.title;
      const title2=b.title;
      return title1<title2?-1:1;
    })
  }
  
  
  return (
    <>
      <Header />
      <input type="text" placeholder="search" className="border ml-2" onChange={handelSearch}/>
      <ProductList products={data}
                   sortVal={sort}
                   onSortChange={handelSort}
        />
      <Footer />
    </>
  )
}