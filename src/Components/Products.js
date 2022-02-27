import React, { useEffect, useState } from 'react'

const Products = () => {

    const [data, setData] = useState([]);
    const getProductData = async () => {

        try {
            const res = await fetch("https://fakestoreapi.com/products")
            const actualData = await res.json();
            setData(actualData[0])
        } catch (err) {
            console.log(err);

        }

    }
    useEffect(() => {
        getProductData();
    }, [])

    return (
        <>
            <ul>
                <li className='card'>
                    <h1 className='heading_style'>-------FunCart Top 3 Deal------</h1>
                    <div className='card__main'>
                        <img src={data.image} alt="myPic" className='card__img' /><br></br>
                        <div className='card__info'>
                            <h2 className='card__title'>{data.title}</h2>
                            <p className='card__price'>Price: {data.price}</p><br></br>
                            <span className='card__category'>{data.description} </span><br></br>
                            <p className='card__category'>{data.category}</p><br></br>
                        </div>
                    </div>
                    <div style={{ position: 'relative', zIndex: '1', left: "590px", top: "-580px" }}>  <li className='card'>

                        <div className='card__main'>
                            <img src={data.image} alt="myPic" className='card__img' /><br></br>


                            <div className='card__info'>
                                <h2 className='card__title'>{data.title}</h2>

                                <p className='card__price'>Price: {data.price}</p><br></br>
                                <span className='card__category'>{data.description} </span><br></br>

                                <p className='card__category'>{data.category}</p><br></br>
                            </div>
                        </div>

                        <div style={{ position: 'relative', zIndex: '1', left: "590px", top: "-580px" }}> <li className='card'>

                            <div className='card__main'>
                                <img src={data.image} alt="myPic" className='card__img' /><br></br>
                                <div className='card__info'>
                                    <h2 className='card__title'>{data.title}</h2>

                                    <p className='card__price'>Price: {data.price}</p><br></br>
                                    <span className='card__category'>{data.description} </span><br></br>

                                    <p className='card__category'>{data.category}</p><br></br>
                                </div>
                            </div>


                        </li>
                        </div>
                        <div style={{ position: 'relative', zIndex: '2' }}> top </div>


                    </li></div>
                    <div style={{ position: 'relative', zIndex: '2' }}>  <li className='card'>


                    </li>
                    </div>





                    </li>
                   
              

            </ul>
        </>

    )
}
export default Products