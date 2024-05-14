const itemDetail = ({product}) => {
    return(
        <div stayle = {{display:"flex"}}>
            < img style = {{width:"200"}} src ={product.image} />
        <div>
        <p>{product.name}</p>
        <p>precio:{product.price}</p>
        </div>
        </div>
    );
};
export default itemDetail;