import gif from "./gif";

const Gambar= ()=> {
    return (
        <div>
            <img src={gif.url} width="50%" height="70%" />
            <h3>{gif.title}</h3>
        </div>

    );
}

export default Gambar;