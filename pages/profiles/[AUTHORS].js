import axios from 'axios'
import AuthorCard from '../components/AuthorCard';
import HtmlParser from 'react-html-parser';
import { useState, useEffect } from 'react';
import GridNoticia from '../components/GridNoticia';


export default function AuthorProfile(posts, author, news) {
    const [github, setGithub] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [telephone, setTelephone] = useState("");
    const [website, setWebsite] = useState("");
    const [youtube, setYoutube] = useState("");
    const [twitter, setTwitter] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    //console.table(posts.news)
    function GetPost() {
        if (typeof document != "undefined") {
            var item = posts.news.filter(post => post.author_id == posts.author.id)
            return item.map((evento) => (
                <div key={evento.id}>
                    <GridNoticia
                        id={evento.id}
                        title={evento.title}
                        id_author={evento.author_id}
                        author={evento.author.name}
                        description={evento.description}
                        image={evento.file_id}
                        date={evento.created_at}
                    />
                </div>
            ));
        }
    }

    if (typeof document != "undefined") {
        //console.table(author)
        console.log()
        console.log(posts.author.contactType.length)
        if (posts.author.contactType.length === 0) {
        } else {
            author.contactType.map((contact) => {
                if (contact.contact_type_id === 1) {
                    setEmail(contact.value);
                }
                if (contact.contact_type_id === 2) {
                    setTelephone(contact.value);
                }
                if (contact.contact_type_id === 3) {
                    setWhatsapp(contact.value);
                }
                if (contact.contact_type_id === 4) {
                    setFacebook(contact.value);
                }
                if (contact.contact_type_id === 5) {
                    setInstagram(contact.value);
                }
                if (contact.contact_type_id === 6) {
                    setTwitter(contact.value);
                }
                if (contact.contact_type_id === 7) {
                    setLinkedin(contact.value);
                }
                if (contact.contact_type_id === 8) {
                    setYoutube(contact.value);
                }
                if (contact.contact_type_id === 9) {
                    setGithub(contact.value);
                }
                if (contact.contact_type_id === 10) {
                    setWebsite(contact.value);
                }
            }
            );
        }
    }



    return (
        <div className="mx-4 sm:mx-8 md:mx-30 xl:mx-48 min-h-screen pt-12 mb-16">
            <div className="textoBasico">
                <h2 className="titulo-principal">Perfil do Autor</h2>
            </div>
            <AuthorCard id={process.env.BACKEND + "showFile/" + author.photo_id} name={author.name} image={author.photo_id} bio={HtmlParser(author.bio)} github={github} facebook={facebook} email={email} youtube={youtube} twitter={twitter} linkedin={linkedin} instagram={instagram} website={website} whatsapp={whatsapp} telephone={telephone} />

            <hr className="mb-4"></hr>
            <div className=" grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 px-4 gap-4">
                {GetPost()}
            </div>

        </div>
    );
}

// This gets called on every request
export async function getStaticProps(context) {
    // Fetch data from external API
    const res = await axios.get(process.env.BACKEND + "author/" + context.params.AUTHORS);
    var post = await axios.get(process.env.BACKEND + "news");
    var author = res.data
    var posts = post.data
    var news = posts.news
    //console.log(res.data.contactcontact_type_id)
    // Pass data to the page via props
    return { props: { posts, author, news } }
}

export async function getStaticPaths(context) {
    // Call an external API endpoint to get posts
    const res = await axios.get(process.env.BACKEND + "authors/all")

    // Get the paths we want to pre-render based on posts
    const paths = res.data.map((authors) => ({
        params: { AUTHORS: (authors.id.toString()) },
    }));
    //console.log(paths)
    return { paths, fallback: true }
}
