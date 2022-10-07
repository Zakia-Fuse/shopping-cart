import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import background3 from '../images/background3.jpg'
class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5" style={{backgroundImage :`url$(${background3})`}}>
          <div className="container"  >
            
            <Title name="our" title="products" />
            <div>
              <div className="row">
                <ProductConsumer>
                  {(value) => {
                    return value.product.map((product) => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
