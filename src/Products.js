function Products ({label, image, calories, ingredients, mealType, totalTime, source }) {
    return(
        <div>
        <div className="container">
            <h2>{label} <img className ="plate" src = "https://img.icons8.com/?size=512&id=jmChQdAqiBUb&format=png"  alt="pic"/></h2>
            </div>
            <div className="container">
            <img src = {image} className="picture" alt="pic"/>
            </div>
            <ul className="container row">
                {ingredients.map((ingredient, index) => (
                    <li key ={index}>
                        {ingredient}
                    </li>
                ))}
                </ul>
                <div className="container">
                <table>
                    <tbody>
                    <tr>
                        <td>
            <p>{calories.toFixed()} calories</p>
            </td>
            <td>
            <p>{mealType}</p>
            </td>
            <td>
            <p>{totalTime} minutes</p>
            </td>
            <td>
            <p>Source: "{source}"</p>
            </td>
            </tr>
            </tbody>
            </table>
            </div>
            </div>
    )
}
export default Products;