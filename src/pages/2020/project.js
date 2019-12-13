import React from "react"
import Layout from "../../components/Layout"
import ImageGallery from "react-image-gallery"

import bolt_sketch from "../../images/bolt_sketch.svg"
import SEO from "../../components/SEO"

const images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
]

class Galeria extends React.Component {
    render() {
        return <ImageGallery items={images} />
    }
}

const Project = () => (
    <Layout>
        <SEO
            title="Protótipo Bolt"
            description="Insper Mileage protótipo Bolt"
            lang="pt-br"
            meta={[
                `Insper`,
                `projeto`,
                `protótipo`,
                `Insper Mileage`,
                `Shell Eco-Marathon`,
            ]}
        />
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-2 block-title-bw">Protótipo Bolt</h1>
                    <div class="columns">
                        <div class="column is-6">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                        </div>
                        <div class="column">
                            <figure class="image">
                                <img
                                    src={bolt_sketch}
                                    alt="Rascunho do protótipo"
                                />
                            </figure>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-6">
                            <Galeria></Galeria>
                        </div>
                        <div class="column">
                            <h3 class="title is-4 block-title-bw">
                                Especificações
                            </h3>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th>Velocidade máxima</th>
                                        <td>__ km/h</td>
                                    </tr>
                                    <tr>
                                        <th>Aceleração</th>
                                        <td>0-100 km/h em __s</td>
                                    </tr>
                                    <tr>
                                        <th>Autonomia</th>
                                        <td>__ km</td>
                                    </tr>
                                    <tr>
                                        <th>Eficiência</th>
                                        <td>__ kWh/km</td>
                                    </tr>
                                    <tr>
                                        <th>Baterias</th>
                                        <td>48V 4000 mAh</td>
                                    </tr>
                                    <tr>
                                        <th>Chassi</th>
                                        <td>
                                            Tubular de alumínio + carenagem de
                                            fibra de carbono
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Telemetria</th>
                                        <td>
                                            Aplicativo React Native + Dashbord
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default Project
