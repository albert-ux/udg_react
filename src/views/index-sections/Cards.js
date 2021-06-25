import React from "react";

// reactstrap components
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Cards = (props) => {
  return (
    <div className="container" >
      <div className="row">
        <h1>Recetas</h1>
      </div>
      <div className="row">
        <div className="col-4">
          <Card>
            <CardImg top width="100%" src="https://i.blogs.es/4e2e74/garbanzos-gambas/2560_3000.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Garbanzos tostados al pimentón con langostinos y espinacas.</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">RECETA FIT</CardSubtitle>
              <CardText>Ahora que ya hace frío de verdad seguro que muchos habéis rescatado los platos de cuchara de legumbres. Claro que no siempre tenemos tiempo o ganas de dedicarle a un cocido o guiso el tiempo que se merece, o quizá nos resulta demasiado pesado.</CardText>
              <Button>Ver más</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-4">
          <Card>
            <CardImg top width="100%" src="https://i.blogs.es/69bc19/hamburguesa_soja/1366_2000.png" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Hamburguesa de soja</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">RECETA FIT VEGETARIANA</CardSubtitle>
              <CardText>Disfrutar de una hamburguesa es un placer, no es necesario que sea de carne, la soja es un ingrediente ideal para ello, además de muy nutritiva le da un sabor exquisito. No dudes en probar la hamburguesa de soja y sorprender a tus comensales.</CardText>
              <Button>Ver más</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-4">

          <Card>
            <CardImg top width="100%" src="https://i.blogs.es/10e754/img_2189/2560_3000.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Pizza fitness</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">RECETA FIT</CardSubtitle>
              <CardText>Aunque la mayor parte de las pizzas tienen una calidad nutricional que dejan mucho que desear, en casa podemos lograr opciones mucho más sanas e igualmente sabrosas, como la que receta que mostramos a continuación de pizza fitness muy fácil y nutritiva.</CardText>
              <Button>Ver más</Button>
            </CardBody>
          </Card>

        </div>
        <div className="col-4">

          <Card>
            <CardImg top width="100%" src="https://i.blogs.es/771031/tacos-tofu/2560_3000.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Tacos de revuelto de tofu picante</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">RECETA FIT</CardSubtitle>
              <CardText>Machacado en forma de revuelto es lo más fácil del mundo y admite muchísimas variaciones de sabor, como en estos tacos de revuelto de tofu picante.</CardText>
              <Button>Ver más</Button>
            </CardBody>
          </Card>

        </div>
        <div className="col-4">

          <Card>
            <CardImg top width="100%" src="https://i.blogs.es/b30d89/sopa-pavo-cebada/2560_3000.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Sopa de pavo con cebada y zanahoria</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">RECETA FIT</CardSubtitle>
              <CardText>Es fácil convertirlos en comidas completas y sanas, que además son perfectas para llevar si tenemos que comer fuera de casa. Una variación de la receta tradicional es esta sopa de pavo con cebada y zanahoria.</CardText>
              <Button>Ver más</Button>
            </CardBody>
          </Card>

        </div>
        <div className="col-4">

          <Card>
            <CardImg top width="100%" src="https://i.blogs.es/1c7619/tortitas-calabaza/2560_3000.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Hotcakes de calabaza y avena</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">RECETA FIT</CardSubtitle>
              <CardText>Caseras ya son otro tema, y además podemos hacer muchas versiones más saludables para comer con más frecuencia en una dieta equilibrada sin problemas. </CardText>
              <Button>Ver más</Button>
            </CardBody>
          </Card>

        </div>
        <div className="col-4">

          <Card>
            <CardImg top width="100%" src="https://www.foodspring.es/magazine/wp-content/uploads/2021/05/Nicecream-Heidelbeere.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Nicecream de tarta de queso con arándanos</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">RECETA FIT</CardSubtitle>
              <CardText>Cremosa, rica en proteínas y a todo color para empezar bien el día</CardText>
              <Button>Ver más</Button>
            </CardBody>
          </Card>

        </div>
        <div className="col-4">

          <Card>
            <CardImg top width="100%" src="https://www.foodspring.es/magazine/wp-content/uploads/2021/05/P1600483-1.png" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Babka vegana de chocolate</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">RECETA FIT</CardSubtitle>
              <CardText>Masa súper esponjosa y con cremoso relleno</CardText>
              <Button>Ver más</Button>
            </CardBody>
          </Card>

        </div>
        <div className="col-4">

          <Card>
            <CardImg top width="100%" src="https://www.foodspring.es/magazine/wp-content/uploads/2021/04/noodle_buddha_bowl.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Buddha bowl vegano de pasta proteica</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">RECETA FIT</CardSubtitle>
              <CardText>Para nosotros, los buddha bowl son más que un plato de moda. Y es que estos boles no deberían faltar en cualquier cocina fitness que se precie.</CardText>
              <Button>Ver más</Button>
            </CardBody>
          </Card>

        </div>
        <div className="col-4">

          <Card>
            <CardImg top width="100%" src="https://www.foodspring.es/magazine/wp-content/uploads/2021/02/vegane_zucchini_pfannkuchen.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Tortitas veganas de calabacín</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">RECETA FIT</CardSubtitle>
              <CardText>Las tortitas son una de esas especialidades que siempre apetecen. En esta ocasión te proponemos una variante salada basada con el calabacín como ingrediente principal.</CardText>
              <Button>Ver más</Button>
            </CardBody>
          </Card>

        </div>
        <div className="col-4">

          <Card>
            <CardImg top width="100%" src="https://www.foodspring.es/magazine/wp-content/uploads/2021/01/rainbow_pancakes.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Wraps multicolor proteicos veganos</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">RECETA FIT</CardSubtitle>
              <CardText>Los wraps nunca fallan. Nos valen para llevárnoslos al trabajo o para picar entre horas cuando estamos fuera de casa. Estos wraps multicolor que hoy os presentamos entran por los ojos, pero es que además están buenísimos. </CardText>
              <Button>Ver más</Button>
            </CardBody>
          </Card>

        </div>
      </div>


    </div>
  );
};

export default Cards;