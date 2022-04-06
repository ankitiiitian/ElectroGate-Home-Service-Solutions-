import React from 'react'
import Product_type from './Product_type';
import "./Kitchen.css";

function Kitchen() {
  return (
    <div className='kitchen_app'>
      <div className='kitchen_app_container'>
          <img className="kitchen_app_image" src="https://img.wallpapersafari.com/desktop/1680/1050/12/67/jIEQvi.jpg" alt=""/>
          <div className='heading_kitchen_app'><h3 style={{ fontWeight: "bold", fontSize: "2.1vmax",}}>Kitchen Appliances</h3></div>
          <div className='kitchen_app_row'>
              <Product_type title='Microwave' image='https://img.freepik.com/free-vector/microwave-oven-opened-with-food-inside_275655-48.jpg?w=1060' button="Click here" link="/Microwave"/>
              <Product_type title='Dishwasher' image="https://img.freepik.com/free-vector/dishwasher-machine-kitchen-icons-set-flat-style_98396-253.jpg?size=338&ext=jpg" button="Click here" link="/Dishwasher" />
              <Product_type title='Mixer Grinder' image="https://cdn.shopify.com/s/files/1/0507/2096/4799/products/vijay_2048x2048.jpg?v=1628926120" button="Click here" link="/MixerG" />
              
          </div>
          <div className='kitchen_app_row'>
              <Product_type title='Electric Kettle' image='https://media.istockphoto.com/illustrations/-illustration-id165926306?k=20&m=165926306&s=170667a&w=0&h=wNMd3U1o_0H-gv9fOKAtn9gZim7U6k0mTDog4pMkYPE=' button="Click here" link="/Kettle"/>
              <Product_type title='Kitchen Hood' image="https://thumbs.dreamstime.com/b/range-hood-glyph-icon-silhouette-symbol-kitchen-extractor-fan-cooker-exhaust-household-appliance-negative-space-vector-isolated-175564543.jpg" button="Click here" link="/KitchenHood"/>
              <Product_type title="Refrigerator" image="https://img.freepik.com/free-vector/vector-illustrations-empty-closed-refrigerator-with-different-healthy-food_80590-2952.jpg?w=996" button="Click here" link="/Refrigerator"/>
              
          </div>
         
      </div>        
    </div>
  )
}

export default Kitchen
