import {Carousel} from "react-bootstrap"
const Carouselle=()=>{
 
    return (
        <div>
            <Carousel style={{width:'70%',margin:'0 auto'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://img.freepik.com/vecteurs-libre/suivez-moi-conception-themes-sociaux-commerciaux_24877-50426.jpg?size=338&ext=jpg&ga=GA1.2.678311658.1657016926'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://img.freepik.com/vecteurs-libre/illustration-caractere-personnes-detenant-icones-compte-utilisateur_53876-43022.jpg?size=626&ext=jpg&ga=GA1.2.678311658.1657016926'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://img.freepik.com/vecteurs-libre/illustration-du-concept-flux-utilisateur_114360-1658.jpg?size=338&ext=jpg&ga=GA1.2.678311658.1657016926'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )

}
export default Carouselle
