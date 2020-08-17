import React from 'react'
let titulo="Mi primer sitio con React JS";

function Content() {
    return (
        <div className="row my-3">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <h1>{}</h1>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-md-4">
                        <img style={{width:'100%'}} src={"https://placeimg.com/500/240/nature"} alt={'articulo'}/>
                        <a target="_blank" className="text-secondary" href={"https://placeimg.com/500/240/nature"}>Fuente: {"https://placeimg.com/500/240/nature"}</a>
                    </div>

                    <div className="col-md-8">
                        <p>{require("../data/articulo").texto}</p>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col">
                        <p>{}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content